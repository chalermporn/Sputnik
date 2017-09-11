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
        src: [
            path.join(__dirname, '../src/css/*.css'),
            path.join(__dirname, '../src/css/includes/**/*.css')
        ],
        dest: cssPath
    },

    pug: {
        src: path.join(__dirname, '../src/*.pug'),
        dest: 'dist'
    }
};
