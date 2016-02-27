var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        'webpack-hot-middleware/client',
        './index.js'
    ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/js/bundle.js',
        sourceMapFilename: 'dist/js/bundle.map'
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'moment': 'moment'
    },

    devtool: 'eval',

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "dist/js/vendor.bundle.js",
            minChunks: function (module, count) {
               return module.resource && module.resource.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            // JAVASCRIPT
            {
                test:     /\.jsx?$/,
                loader:   'babel',
                exclude:  /node_modules/
            },
            // JSON
            {
                test: /\.json$/,
                loader: 'json'
            },
            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // CSS
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
}
