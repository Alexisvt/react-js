(function (global) {

  'use strict';

  global.toolbox.options.debug = true;

  global.toolbox.precache(['/', 'index.html']);

  global.toolbox.router.get('/*', global.toolbox.fastest);

  global.toolbox.router.default = global.toolbox.cacheFirst;

})(self);