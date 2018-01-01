'use strict';

goog.provide('app.bootstrap');

goog.require('app.foo');

const hoge = 'hoge in index';

const cjs = require('./cjs');

console.log(app.foo() + hoge + cjs);
