/*
 * @Author: eleven
 * @E-mail: eleven.image@gmail.com
 * @Date:   2016-10-31 17:13:50
 * @Last Modified by:   eleven
 * @Last Modified time: 2016-11-02 20:46:47
 */

'use strict';

const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;
const path = require('path');
const PLUGIN_NAME = 'gulp-flow-html';

function generator(content) {

    if (!content) {
        throw new PluginError(PLUGIN_NAME, 'Missing content!');
    }

    return through.obj(function(file, enc, cb) {

        let targetFile, modname, mainPath, basePath;

        if (file.isNull()) {
            cb(null, file);
        }
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        if (file.isBuffer()) {

            modname = path.resolve(process.cwd());
            mainPath = path.dirname(file.path);
            basePath = mainPath.replace(modname, '');

            file.contents = new Buffer(content);
            
        }

        cb(null, file);

    });
}

module.exports = generator