const express = require('express')
const app = express()

app.enable('trust proxy');

app.set('trust proxy', function (ip) {
  console.log('-=-=-= ip: ', ip)
  return true
  // if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
  // else return false
})

app.get('/', function (req, res) {
  console.log('app.get("trust proxy")(): ', app.get("trust proxy")())
  console.log('req.headers: ', req.headers)
  res.json({data: 'success'})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})