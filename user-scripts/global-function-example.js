// ==UserScript==
// @name         global-function-example
// @namespace    http://tampermonkey.net/
// @version      2025-11-12
// @description  Global Function example
// @author       Me
// @match        https://*/*
// @grant        none
// ==/UserScript==

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==

(function() {
    'use strict';

    window.foo = () => {
        console.log("foo");
        bar();
        return 123;
    }

    //console.log('Hello, world!', window.foo);
})();