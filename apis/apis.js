axios.get('http:www.clashapi.xyz/api/cards')
  .then(function (result) {
    console.log(result)

    //get the first card from the array of results
    var firstCardObj = result.data[0]

    //use a selector to select the body
    var body = document.querySelector("body");

    //make an img element
    var img = document.createElement("img");

    //set src of that img to the car img
    img.src = `http:www.clashapi.xyz/images/cards/${firstCardObj.idName}.png`;

    //append that img to body
    body.appendChild(img);

  })

// // // this fetch grabs the boulder sub reddit
// fetch('http:www.clashapi.xyz/api/cards').then(function(response) {
//     // the json method on the response object also returns a promise
//     return response.json();
// }).then(function(json) {
//     // so any additional json processing must happen in another then
//     console.log(json);
// });