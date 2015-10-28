/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module, process */
(function () {

    'use strict';

    var // variables
        _maps = {},
        _base_path = false,
        _absolute_path = false,
        // requires
        fs = require('fs'),
        path = require('path'),
        isempty = require('lodash.isempty'),
        isstring = require('lodash.isstring');

    /* -----------------------------
     *
     * Main
     *
     * ----------------------------- */

    module.exports = function (namespace) {
        if(!_absolute_path){
            throw new Error('root push must be setted first before any include call');
        }
        if (arguments.length < 1 || !isstring(namespace) || isempty(namespace)) {
            throw new Error('missing arguments');
        }
        var mparent = module.parent.filename,
            mpath = path.join(_base_path, namespace),
            mfile = path.join(_absolute_path, namespace + '.js');
        if(_maps.hasOwnProperty(namespace)){
            return _maps[namespace];
        }
        try {
            fs.statSync(mfile);
            _maps[namespace] = require(mpath);
            return _maps[namespace];
        } catch (e) {
            throw new Error('Unable to load module: ' + mpath + ' from ' + mparent);
        }
    };

    /* -----------------------------
     *
     * Exposed
     *
     * ----------------------------- */
    module.exports.toString = function () {
        return '{base: "' + _base_path + '", absolute: "' + _absolute_path + '"}';
    };

    module.exports.root = function (base) {
        if (arguments.length < 1) {
            return _base_path;
        }
        // root can't be redefined
        if (_base_path) {
            throw new Error('include root is already defined');
        }
        if (!isstring(base) || isempty(base)) {
            throw new Error('missing arguments');
        }
        var root = path.dirname(module.parent.filename), // first to call include()
            dirname = path.dirname(module.filename);
        _absolute_path = path.resolve(root, base);
        _base_path = path.relative(dirname, _absolute_path);
        try {
            fs.statSync(_absolute_path);
            return module.exports;
        } catch (e) {
            throw new Error('invalid path: ' + _absolute_path);
        }
    };

}());
