const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development',
      IS_DEVELOPMENT = NODE_ENV === 'development',
      IS_PRODUCTION = NODE_ENV === 'production';

console.log(process.env.VIETNAM);
const dir = (src) => path.join(__dirname, src);

const paths = {
    bundle    : dir('../bundle'),
    src       : dir('../src') ,
    indexHtml : dir('../index.html'), 
};



const
    outputFiles = {
        bundle: 'bundle.js',
        vendor: 'vendor.js',
        css: 'style.css',
    };

const
    entries = {
        js: 'index.js',
    };

module.exports = {
    paths,
    outputFiles,
    entries,
    NODE_ENV,
    IS_DEVELOPMENT,
    IS_PRODUCTION
};