
let button = document.querySelector("button");

button.onclick = function(){
    let newXHR = new XMLHttpRequest();
    newXHR.addEventListener('load', function(){
        let div = document.querySelector("div");
        div.innerText = newXHR.response;
    })
    newXHR.open( 'GET', 'http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json' );
    newXHR.send();
}