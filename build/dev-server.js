let config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
let path = require('path')
let express = require('express')
let webpack = require('webpack')
let opn = require('opn')
let proxyMiddleware = require('http-proxy-middleware')
let webpackConfig = require('./webpack.dev.conf')

let port = process.env.PORT || config.dev.port

let server = express()
let compiler = webpack(webpackConfig)

let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: true
  }
})

let hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publicPath({
      action: 'reload'
    })
    cb()
  })
})

let context = config.dev.context

switch(process.env.NODE_ENV) {
  case 'local': var proxypath = 'http://localhost:8001'; break;
  case 'online': var proxypath = 'https://elm.cangdu.org'; break;
  default: var proxypath = config.dev.proxypath;
}

var options = {
  target: proxypath,
  changeOrigin: true
}

if (context.length) {
  server.use(proxyMiddleware(context, options))
}

server.use(require('connect-history-api-fallback')())

server.use(devMiddleware)

server.use(hotMiddleware)

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err){
  if (err) {
    return
  }
  var uri = 'http://localhost' + port

  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})



