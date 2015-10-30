var path = require('path');

var staticPath = 'dist/assets',
	cssPath = staticPath + '/css',
	imagesPath = staticPath + '/images'

module.exports = {	
	images: {
		src: './src/images/**/*',
		dest: imagesPath
	},

	css: {
		src: ['./src/css/style.css', './src/css/includes/*.css'],
		dest: cssPath
	},

	jade: {
		src: './src/*.jade',
		dest: 'dist'
	},

	inline: {
		src: './dist/*.html',
		dest: 'dist'
	}
};
