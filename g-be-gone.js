// ==UserScript==
// @name     g be gone
// @version  1
// @grant    none
// @match		 https://www.google.com/search*
// ==/UserScript==



//alert("g be gone");




function remove_this(arr, str){
    for (var i = 0; i < arr.length; i++) {
      arr[i].removeAttribute(str);

      var jsac =  arr[i].getAttribute('jsaction');
      if (jsac === null){
        // console.log('hi null'); // for debugging
      }else{
        
        var start = jsac.indexOf(str+ ':');
        var colon = start + (str+':').length;
        var end = jsac.indexOf(';', colon);
        var fullstr = jsac.substring(start,end+1);
        var newjsac = jsac.replace(fullstr, '');
        arr[i].setAttribute('jsaction', newjsac);
      }


		}
}



var anchors = document.getElementsByTagName("a");
remove_this(anchors, 'onmousedown');
remove_this(anchors, 'mousedown');



