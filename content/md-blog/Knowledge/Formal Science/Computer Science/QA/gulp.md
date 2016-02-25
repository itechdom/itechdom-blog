# Concepts
### Event streams
### Vinyl files
### Globs
### Node Streams
### Regex
### Plugins
### What does a good plugin look like?
### What does a good plugin look like?



// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-prefixer';

function prefixStream(prefixText) {
  var stream = through();
  stream.write(prefixText);
  return stream;
}

// Plugin level function(dealing with files)
function gulpPrefixer(prefixText) {

  if (!prefixText) {
    throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
  }
  prefixText = new Buffer(prefixText); // allocate ahead of time

  // Creating a stream through which each file will pass
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }
    if (file.isBuffer()) {
      file.contents = Buffer.concat([prefixText, file.contents]);
    }
    if (file.isStream()) {
      file.contents = file.contents.pipe(prefixStream(prefixText));
    }

    cb(null, file);

  });

}

// Exporting the plugin main function
module.exports = gulpPrefixer;


# Third party
### Through


fs.createReadStream('ex.txt')

  .pipe(through2(function (chunk, enc, callback) {

    for (var i = 0; i  chunk.length; i++)

      if (chunk[i] == 97)

        chunk[i] = 122 // swap 'a' for 'z' 

 

    this.push(chunk)

 

    callback()

   }))

  .pipe(fs.createWriteStream('out.txt'))


### https://www.npmjs.com/package/through2
### Creates streams that are both readable and writeable
### through suggests that files go through two functions
### Read
### Write
# Resources
### https://github.com/substack/stream-handbook
### node stream handbook
### https://github.com/wearefractal/vinyl-fs
### vinyl-fs
### metadata with a file?
### https://github.com/gulpjs/gulp/blob/master/docs/API.md
### gulp docs
### https://github.com/isaacs/node-glob
### glob options
### https://github.com/gulpjs/gulp/blob/master/docs/API.md
### Gulp Api
### gulp.dest
### gulp.src 
### ...
### https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
### Writing a plugin
