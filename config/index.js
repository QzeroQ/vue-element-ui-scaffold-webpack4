// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

//支持node build/build.js -config config文件路径(相对与此路径)
function getBuildEnv() {
    var configFile = 'prod.env';
    var index = process.argv.indexOf('-config');
    if (index > -1) {
        configFile = process.argv[index + 1];
    }
    return require(path.resolve(__dirname, configFile));
}

var ret = {
    build: {
        env: getBuildEnv(),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        productionSourceMap: getBuildEnv().NeedSrcMap,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8091,
        autoOpenBrowser: true,
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        // proxyTable: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         changeOrigin: true,
        //         pathRewrite: {'^/api': ''}
        //     }
        // },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: true
    }
}

module.exports = ret;