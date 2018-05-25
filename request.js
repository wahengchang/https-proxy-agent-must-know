const HttpProxyAgent = require('http-proxy-agent')
const TARGET_PORT = '3000'
const PROXY_PORT = '8000'
require('es6-promise').polyfill();
require('isomorphic-fetch');
 
const options = {
    agent: new HttpProxyAgent(`http://localhost:${PROXY_PORT}`)
}

console.log(`going to request http://localhost:${TARGET_PORT}`)

return fetch(`http://localhost:${TARGET_PORT}`, options)
.then( res => res.json())
.then( result => console.log(result))
    