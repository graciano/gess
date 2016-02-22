var commonmark = require('commonmark');

(function(){
    var xhr = new XMLHttpRequest();
    var reader = new commonmark.Parser();
    xhr.onload = function(){
        if(this.status === 200){
            var parsed = reader.parse(this.responseText);
            var writer = new commonmark.HtmlRenderer();
            console.log(parsed);
            var md_elem = document.getElementById('readme');
            md_elem.innerHTML = writer.render(parsed);
        }
    };
    xhr.open('get', window.location.href+"README.md");
    xhr.send();
})();
