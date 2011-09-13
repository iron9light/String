randomS = ->
  String.fromCharCode(Math.floor(Math.random()*95+32))
next = (s, oldS) ->
  i = 0
  (for c in s
    if c == oldS[i++] then c else randomS()).join ""
$(->
  xx = (f, s, oldS = "") ->
    newS = next s, oldS
    f newS
    $(@).queue(->
      xx f, s, newS
    ).delay(17).dequeue() if s isnt newS

  show = (s) -> $("#s").text s

  $("input").blur ->
    $("#s").clearQueue()
    $("#s").queue ->
      xx show, $("input").val()
#    $(@).delay(100).dequeue() while $(@).queue().length > 0
    return

  $("#s").queue ->
    xx show, $("input").val()
)
