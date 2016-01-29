#https://github.com/substack/stream-handbook
#Writing a plugin
#https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
#...
#gulp.src 
#gulp.dest
#Gulp Api
#https://github.com/gulpjs/gulp/blob/master/docs/API.md
#glob options
#https://github.com/isaacs/node-glob
#gulp docs
#https://github.com/gulpjs/gulp/blob/master/docs/API.md
#metadata with a file?
#vinyl-fs
#https://github.com/wearefractal/vinyl-fs
#Resources
#node stream handbook
#Event streams
#Concepts
#Vinyl files
#Globs
#Node Streams
#Regex
#Plugins
#What does a good plugin look like?
<h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;">What does a good plugin look like?</h3><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// through2 is a thin wrapper around node transform streams
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var through <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'through2<span class="pl-pds" style="box-sizing: border-box;">');
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var gutil <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'gulp-util<span class="pl-pds" style="box-sizing: border-box;">');
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var PluginError <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= gutil.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">PluginError;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Consts
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">PLUGIN_NAME <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'gulp-prefixer<span class="pl-pds" style="box-sizing: border-box;">';

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">prefixStream(<span class="pl-smi" style="box-sizing: border-box;">prefixText) {
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var stream <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">through();
  stream.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">write(prefixText);
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return stream;
}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Plugin level function(dealing with files)
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">gulpPrefixer(<span class="pl-smi" style="box-sizing: border-box;">prefixText) {

  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!prefixText) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">throw <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">PluginError(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">PLUGIN_NAME, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'Missing prefix text!<span class="pl-pds" style="box-sizing: border-box;">');
  }
  prefixText <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">Buffer(prefixText); <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// allocate ahead of time

  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Creating a stream through which each file will pass
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return through.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">obj(<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function(<span class="pl-smi" style="box-sizing: border-box;">file, <span class="pl-smi" style="box-sizing: border-box;">enc, <span class="pl-smi" style="box-sizing: border-box;">cb) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if (file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">isNull()) {
      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// return empty file
      <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cb(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null, file);
    }
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if (file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">isBuffer()) {
      file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= Buffer.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">concat([prefixText, file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents]);
    }
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if (file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">isStream()) {
      file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">pipe(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">prefixStream(prefixText));
    }

    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cb(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null, file);

  });

}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Exporting the plugin main function
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">module.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exports <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">= gulpPrefixer;</pre>
#Write
#Through
#https://www.npmjs.com/package/through2
#Creates streams that are both readable and writeable
#through suggests that files go through two functions
#Read
#Third party
