/*
 * @Author: eleven
 * @E-mail: eleven.image@gmail.com
 * @Date:   2016-10-31 17:13:50
 * @Last Modified by:   eleven
 * @Last Modified time: 2016-10-31 22:10:26
 */

'use strict';

const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;
const path = require('path');
const PLUGIN_NAME = 'gulp-flow-url';

function generator(content) {

    if (!content) {
        throw new PluginError(PLUGIN_NAME, 'Missing content!');
    }

    return through.obj(function(file, enc, cb) {

        if (file.isNull()) {
            cb(null, file);
        }
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        if (file.isBuffer()) {

            let modname = path.resolve(process.cwd());
            let mainPath = path.dirname(file.path);
            let basePath = mainPath.replace(modname, '');

            file.contents = new Buffer(content);
            console.dir(file)
            file.extname = 'html';
            // file.contens = html;
        }

        cb(null, file);

    });
}

module.exports = generator