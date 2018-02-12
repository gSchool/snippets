var fetch = require('node-fetch');

function fetchStuffPromise() {
  return fetch('https://www.reddit.com/r/boulder.json').then(function(response) {
    return response.json()
  }).then(function(json) {
    return json.data.children[0]
  });
}

fetchStuffPromise().then(function(stuff) {
  console.log(stuff)
})

async function fetchStuffAsync() {
  var response = await fetch('https://www.reddit.com/r/boulder.json')
  var json = await response.json()
  return json.data.children[0]
}

fetchStuffAsync().then(function(stuff) {
  console.log(stuff)
})
