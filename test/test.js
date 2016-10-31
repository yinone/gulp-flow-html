/*
* @Author: eleven
* @E-mail: eleven.image@gmail.com
* @Date:   2016-10-31 17:16:04
* @Last Modified by:   eleven
* @Last Modified time: 2016-10-31 22:04:06
*/

'use strict';

let assert = require('assert');
let File = require('vinyl');
let flowHTML = require('../');

describe('gulp-flow-html', function() {
	describe('in buffer mode', function() {
		it('append content', function(done) {

			let flowhtml = flowHTML('@@include');

			let file = new File({
				cwd: '/',
  				base: '/test/',
  				path: '/test/file.js',
				contents: new Buffer('test')
			});

			flowhtml.write(file);

			flowhtml.once('data', function(file) {

				console.log(file.contents.toString('utf8'))
				assert(file.isBuffer());
				assert.equal(file.contents.toString('utf8'), '@@include');
				done();
			
			})
		})
	})
})