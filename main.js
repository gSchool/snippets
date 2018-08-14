console.log("hello")

var $body = $("body")
console.log("body", $body)

var $div = $("<div>YO</div>")
$body.append($div)

$("button").click(function(){
    $div.fadeOut('slow');
})

