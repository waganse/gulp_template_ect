# Gulp template with ect & stylus

## Installation

### 1. Install Node.js
[Download from Node.js official site](http://nodejs.org/), or use your package management software.


* This template is based on the Node v0.12.7 and python 12.x.x. If you have one of those newer versions, please use nodebrew or pyenv where you can control different versions. 


```
nodebrew ls
nodebrew install v0.12.7
nodebrew use v0.12.7
```

```
pyenv install 2.7.9
pyenv local 2.7.9
```

### 2. Install Gulp.js
* `npm install`
  Install gulp related sources

* `bower install`
  Install bower controled sources

## Build Tasks
* `gulp serve`
  Start localhost server with BrowserSync.
  Type [Cntl + C] to exit.

* `gulp preview`
  Build preview files.
  Type [Cntl + C] to exit.

* `gulp build`
  Build release files.
  Type [Cntl + C] to exit.

## TODO
* config for assetpaths task
* config for iconfont (template html export)
