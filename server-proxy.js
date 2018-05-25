const http = require('http')
const httpProxy = require('http-proxy')
const TARGET_PORT = '3000'
const PROXY_PORT = '8000'

const proxy = httpProxy.createProxyServer({})

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar')
})
  
const server = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    proxy.web(req, res, { target: `http://localhost:${TARGET_PORT}` })
})

console.log(`listening on port ${PROXY_PORT}`)
server.listen(PROXY_PORT)
