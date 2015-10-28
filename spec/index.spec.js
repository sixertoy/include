/*jshint unused: false */
/*jslint indent: 4, nomen: true */
/*global __dirname, process, require, define, describe, xdescribe, it, xit, expect, beforeEach, afterEach, afterLast, console */
(function () {

    'use strict';

    var result,
        cwd = process.cwd(),
        path = require('path'),
        expect = require('chai').expect,
        include = require('./../../index');

    describe('include', function () {

        it('return false', function () {
            var p = include.root();
            expect(p).to.be.false;
        });

        it('throws: not a string', function () {
            expect(function () {
                include.root(1234);
            }).to.throw();
        });

        it('throws: empty string', function () {
            expect(function () {
                include.root('');
            }).to.throw();
        });

        it('throws: invalid path', function () {
            expect(function () {
                include.root('./invalid/path');
            }).to.throw();
        });

        it('returns new setted path', function () {
            var root = path.join(process.cwd(), './'),
                result = include.root('./');
            expect(result).to.equal(include);
        });

        it('throw: unable to load module', function () {
            var mod,
                result = include.root('./spec/fixtures');
            expect(function () {
                mod = include('mod-toto');
            }).to.throw();
        });

        it('throws no namespace defined', function () {
            expect(function () {
                include();
            }).to.throw('missing arguments');
        });

        it('throw not a string', function () {
            expect(function () {
                include(1234);
            }).to.throw('missing arguments');
        });

        it('throw empty string', function () {
            expect(function () {
                include('');
            }).to.throw('missing arguments');
        });

        it('returns a module', function () {
            var result = include.root('./spec/fixtures'),
                mod = include('mod');
            expect(mod()).to.equal('Hello world!');
        });

        it('toString method', function () {
            var p = path.join(cwd, './spec/fixtures');
            expect(include.toString()).to.equal('{root: "' + p + '"}');
        });

    });

}());
