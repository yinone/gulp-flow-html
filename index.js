/*
* @Author: eleven
* @E-mail: eleven.image@gmail.com
* @Date:   2016-10-31 17:13:50
* @Last Modified by:   eleven
* @Last Modified time: 2016-10-31 17:14:31
*/

'use strict';

const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;
const path = require('path');
const PLUGIN_NAME = 'gulp-flow-url';