var config               = require('./webpack.config.development'),
    express              = require('express'),
    path                 = require('path'),
    webpack              = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware')

var app = new (require('express'))()
var port = 5678

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

// app.use('/react-flip-move/examples', express.static(__dirname))

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
