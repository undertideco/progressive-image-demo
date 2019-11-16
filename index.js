document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('img');

  elems.forEach(function (elem) {
    var src = elem.getAttribute('src');
    var srcParts = src.split('.');
    elem.src = srcParts[0] + '-thumbnail' + '.' + srcParts[1];
    elem.classList.add('blurred');
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      elem.src = imageUrl;
      elem.classList.remove('blurred');
    };
    xhr.send();
  });
});
