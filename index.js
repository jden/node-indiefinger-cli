#!/usr/bin/env node
var argv = require('yargs')
  .alias('v','verbose')
  .argv
var request = require('request')
var verbose = argv.verbose
var target = argv._[0]

function vlog() {
  if (!verbose) { return }
  console.log.apply(console, arguments)
}

if (!target) {
  console.log('indiefinger [user@]host')
  console.log('\n\texample:')
  console.log('\t\tindiefinger www.w3c.org')
  return process.exit(1)
}

target = heuristicFix(target)

vlog(target)

var uri = 'http://indiefinger.org/.well-known/webfinger?resource=' + encodeURIComponent(target)
vlog(uri)

request({
  uri: uri
}, function (e, res) {
  if (e || res.statusCode >= 400) {
    console.error(e)
    console.error(res.statusCode)
    return process.exit(1)
  }
  var jrd = JSON.parse(res.body)
  console.log(JSON.stringify(jrd, null, 2))
})

function heuristicFix(target) {
  if (~target.indexOf('@') && !~target.indexOf(':')) {
    // email address
    return 'acct:'+target
  }

  if (target.substr(7) !== 'http://' && target.substr(8) !== 'https://') {
    return 'http://'+target
  }
  return target
}