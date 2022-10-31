let Fontmin = require('fontmin')

const fontmin = new Fontmin().src('./setofont.ttf')

fontmin.run(function(err, files) {
  if (err) {
    throw err
  }

  console.log(files[0])
  // => { contents: <Buffer 00 01 00 ...> }
})
