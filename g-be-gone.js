// ==UserScript==
// @name     g be gone
// @version  1
// @grant    none
// @match        https://www.google.com/search*
// ==/UserScript==





var anchors = document.getElementsByTagName("a");

//alert("g be gone");

for (var i = 0; i < anchors.length; i++) {
    anchors[i].onmousedown = null;         // needed for all
    anchors[i].removeAttribute('jsaction') // needed for images

}
