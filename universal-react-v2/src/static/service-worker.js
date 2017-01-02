/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/style.css","404abf0f16248caec045dcf5b0a0d1c7"],["favicon.ico","2ffc71740d40848802d37fb34f9abb6d"],["img/android-chrome-144x144.png","31f44c8f8845e41196b389f2fdae392d"],["img/android-chrome-192x192.png","7c3470aa18f85e4454a35ef3ff8b8f6e"],["img/android-chrome-36x36.png","fc5a14316848badbd501e198f8607088"],["img/android-chrome-48x48.png","f8576bca4be18a4367e4847a09fc6945"],["img/android-chrome-72x72.png","6b26a8a135b07174d298489cc010083a"],["img/android-chrome-96x96.png","04cda150a70eb58221af3fdd4f7d4a6f"],["img/apple-touch-icon-114x114.png","e18affb685f0457672283a88c04084c9"],["img/apple-touch-icon-120x120.png","cd14469c7457cfc6d3aaf15d34faeddf"],["img/apple-touch-icon-144x144.png","95a8cb7d006c59252dd68ba73d31632a"],["img/apple-touch-icon-152x152.png","15dd03590ff7289c09cf10027597e699"],["img/apple-touch-icon-180x180.png","0b101591e8e263c6bff9133c7772194a"],["img/apple-touch-icon-57x57.png","628a477075d84a8d0996392aa6dec37c"],["img/apple-touch-icon-60x60.png","6b9fe001bc9e35320f9bb4eb28b1e6f1"],["img/apple-touch-icon-72x72.png","5830f2a4f9249b3bc3998481cc00825d"],["img/apple-touch-icon-76x76.png","812e9eb119b6bdd8f465a2d1118465b9"],["img/apple-touch-icon-precomposed.png","e45a9a06a4a9b850e3089c4e6e3ebc8d"],["img/apple-touch-icon.png","0b101591e8e263c6bff9133c7772194a"],["img/browserconfig.xml","65888950fa5a052c66715729f71739d7"],["img/driulis-gonzalez-cover.jpg","520b629d5f2ee6fd556b84bb32b8dd09"],["img/driulis-gonzalez.jpg","c7a7a84d9fc9e03596026efc3e77ae83"],["img/favicon-16x16.png","9d784dc3f4da5477156423f5f106c1c6"],["img/favicon-32x32.png","21ea2cf9cd43cdc1f808cca76a1f6fa4"],["img/favicon-96x96.png","11e36fff4c95b572ffaeef9a848da568"],["img/favicon.ico","eaa33e22fc5dab05262d316b59160a45"],["img/flag-cu.png","9d5366e9b01d5cd428429e608433d5f3"],["img/flag-fr.png","c1cf1874c3305e5663547a48f6ad2d8c"],["img/flag-jp.png","10958397bc7c25c746e6e122365c003c"],["img/flag-nl.png","6186550ebc77b1c51cd3ae37e78c33c1"],["img/flag-uz.png","37e4bdb64229f4624cacec7d4297214d"],["img/logo-judo-heroes.png","98169a8bbcf7b07691393dcefe2e6eec"],["img/logo.png","930a492dadf1ccb881bd91d424c8bf9e"],["img/mark-huizinga-cover.jpg","387e6f111e57ca9691f274a80a507408"],["img/mark-huizinga.jpg","ff107bff40c25bd048f85121d5c6d182"],["img/medal.png","e842b996b0355bbb74c4940dceaf7ece"],["img/mstile-144x144.png","3e9a3c273f9ac3b7a158132445534860"],["img/mstile-150x150.png","b0af3ec429e6828dc0606d8bb8e1421f"],["img/mstile-310x150.png","499b08d0d170e6ed89491d7e9691a8e8"],["img/mstile-310x310.png","625111493ee72a39db1420c9c235dfb3"],["img/mstile-70x70.png","4cdf64d2b55d8116c4ce8dd361a95772"],["img/rishod-sobirov-cover.jpg","0fb0426ed0cf136a7cc87fc27d8d5cb5"],["img/rishod-sobirov.jpg","3ebaedd48ab4e89b0369bfa60a8210c7"],["img/ryoko-tani-cover.jpg","ce6ebb320be3f5acb0d46152b68ff7f0"],["img/ryoko-tani.jpg","b5f529bababcd835501d9c59d597c38f"],["img/safari-pinned-tab.svg","66c5512b72af297f5806e2452eaf0651"],["img/splashscreen-icon-384x384.png","e3080842f30a9137e1464f01ffb97e71"],["img/teddy-riner-cover.jpg","9f23fe3caf03a635c74909839df92a91"],["img/teddy-riner.jpg","28352f2336d47c060c31d9e9d47387e5"],["index-static.html","f2459d6ef0038bd5844d485cfd89266a"],["js/bundle.js","eb30b5294ae3dcb7e1215a44296c70d3"],["js/runtime-caching.js","754f1db72a6073f4ae2a3192203c2f2f"],["js/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["manifest.json","2c795e5effcdfbc8662ea6b11e280009"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("js/sw-toolbox.js","js/runtime-caching.js");

