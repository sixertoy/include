/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module, process */
(function () {

    'use strict';

    var _root = false,
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
        var fullpath;
        if (arguments.length < 1 || !isstring(namespace) || isempty(namespace)) {
            throw new Error('missing arguments');
        }
        fullpath = path.join(_root, namespace);
        try {
            return require(fullpath);
        } catch (e) {
            throw new Error('invalid path: ' + fullpath);
        }
    };

    /* -----------------------------
     *
     * Exposed
     *
     * ----------------------------- */

    module.exports.root = function (namespace) {
        if (arguments.length < 1) {
            return _root;
        } else if (!isstring(namespace) || isempty(namespace)) {
            throw new Error('missing arguments');
        }
        var fullpath = path.join(process.cwd(), namespace),
            exists = fs.statSync(fullpath);
        if (exists) {
            _root = fullpath;
            return _root;
        } else {
            throw new Error('invalid path: ' + fullpath);
        }
    };

}());
