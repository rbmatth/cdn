// ==UserScript==
// @name         required-library-example
// @namespace    http://tampermonkey.net/
// @version      2025-11-12
// @description  Required library example
// @author       Me
// @match        https://*/*
// @grant        none
// @require      https://rbmatth.github.io/cdn/tampermonkey-utils.js
// ==/UserScript==

// @icon         https://www.google.com/s2/favicons?sz=64&domain=dev.to

(function() {
    'use strict';

    bar();
})();