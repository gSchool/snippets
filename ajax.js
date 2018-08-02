
let button = document.querySelector("button");

button.onclick = function(){
    console.log("button clicked");

    let newXHR = new XMLHttpRequest();
    newXHR.addEventListener( 'load', function(){
        console.log(this.response);
        $("div").text(this.response)
    } );
    newXHR.open( 'GET', 'http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json' );
    newXHR.send();

    console.log("i'm here")
}