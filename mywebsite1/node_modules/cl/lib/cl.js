var util = require('util')

function exit () { //([message], [format], [code]) or ([code], [message], [format])
  var args = Array.prototype.slice.call(arguments, 0)
    , code = 0
    , msg = ''

  if (args.length) { 
    if (typeof args[args.length - 1] === 'number') {
      code = args[args.length - 1]
      args.pop()
    } else if (typeof args[0] === 'number') {
      code = args[0]
      args.shift()
    }
  }

  if (args.length) {
    if (code)
      console.log.apply(null, args)
    else
      console.error.apply(null, args)
  }

  process.exit(code)
}

module.exports.exit = exit