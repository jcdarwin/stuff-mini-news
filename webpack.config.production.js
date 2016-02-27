var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js'
    ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/js/bundle.js'
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'moment': 'moment'
    },

    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "dist/js/vendor.bundle.js",
            minChunks: function (module, count) {
               return module.resource && module.resource.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        })
    ],

    module: {
        loaders: [
            // JAVASCRIPT
            {
                test:     /\.jsx?$/,
                loader:   'babel',
        exclude: 'node_modules',
                include:  __dirname
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
