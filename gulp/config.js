var path = require('path');

var staticPath = 'dist/assets',
	cssPath = staticPath + '/css',
	imagesPath = staticPath + '/images'

module.exports = {	
	images: {
		src: path.join(__dirname, '../src/images/**/*'),
		dest: imagesPath
	},

	css: {
		src: [path.join(__dirname, '../src/css/style.css'), path.join(__dirname, '../src/css/includes/*.css')],
		dest: cssPath
	},

	jade: {
		src: path.join(__dirname, '../src/*.jade'),
		data: path.join(__dirname, '../src/tpl/data/'),
		dest: 'dist'
	}
};
