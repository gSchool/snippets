const say = words => {
    return new Promise (function(resolve, reject){
      if (words){
        resolve ({
          message : words
        })
      } else {
        reject ({error: "Try again"})
      }
    })
  }
  
const speak = async (msg) => {
    let result = await say(msg)
    return result.message
}

const speakWrapper = async(msg) => {
    let said = await speak("This is a test")
    console.log("said", said)
}

speakWrapper()

  //  say("hello").then(res => res.message).catch(error => error.error)
  // console.log("result", result)
  
  //Example Below was found online
  
  /* ES5, using Bluebird */
  // var isMomHappy = false;
  
  // // Promise
  // var willIGetNewPhone = new Promise(
  //     function (resolve, reject) {
  //         if (isMomHappy) {
  //             var phone = {
  //                 brand: 'Samsung',
  //                 color: 'black'
  //             };
  //             resolve(phone);
  //         } else {
  //             var reason = new Error('mom is not happy');
  //             reject(reason);
  //         }
  
  //     }
  // );
  
  
  // // call our promise
  // var askMom = function () {
  //     willIGetNewPhone
  //         .then(function (fulfilled) {
  //             // yay, you got a new phone
  //             console.log(fulfilled);
  //         })
  //         .catch(function (error) {
  //             // ops, mom don't buy it
  //             console.log(error.message);
  //         });
  // }
  
  // askMom();