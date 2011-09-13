var next, randomS;
randomS = function() {
  return String.fromCharCode(Math.floor(Math.random() * 95 + 32));
};
next = function(s, oldS) {
  var c, i;
  i = 0;
  return ((function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = s.length; _i < _len; _i++) {
      c = s[_i];
      _results.push(c === oldS[i++] ? c : randomS());
    }
    return _results;
  })()).join("");
};
$(function() {
  var show, xx;
  xx = function(f, s, oldS) {
    var newS;
    if (oldS == null) {
      oldS = "";
    }
    newS = next(s, oldS);
    f(newS);
    if (s !== newS) {
      return $(this).queue(function() {
        return xx(f, s, newS);
      }).delay(17).dequeue();
    }
  };
  show = function(s) {
    return $("#s").text(s);
  };
  $("input").blur(function() {
    $("#s").clearQueue();
    $("#s").queue(function() {
      return xx(show, $("input").val());
    });
  });
  return $("#s").queue(function() {
    return xx(show, $("input").val());
  });
});