/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, exports, module, process */
(function () {

    'use strict';

    var _root = false,
        path = require('path');

    /**
     * 
     * 
     * 
     */
    exports.path = function () {
        return _root;
    };

    /**
     * 
     * 
     * 
     */
    exports.root = function (path) {
        var cwd = process.cwd();
        _root = path.join(cwd, path);
    };

    module.exports = function (path) {
        return require(path.join(_root, path));
    };

}());