var hljs = require('highlight.js');
var md = require('markdown-it')();

(function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        function bindHighlightCodeToElems(code_elems) {
            for (var i = 0; i < code_elems.length; i++) {
                hljs.highlightBlock(code_elems[i]);
            }
        }

        if(this.status === 200){
            var md_elem = document.getElementById('readme');
            md_elem.innerHTML = md.render(this.responseText);
            bindHighlightCodeToElems(document.getElementsByTagName('code'));
            bindHighlightCodeToElems(document.getElementsByTagName('pre'));
        }
    };
    xhr.open('get', window.location.href+"README.md");
    xhr.send();
})();
