fetch('https://powerful-beyond-70119.herokuapp.com/jokes')
  .then((response) => response.json())
  .then((json) => {
    console.log("json", json)
    let body = document.querySelector("body")
    for (let i = 0; i < json.length; i++) {

        //Question
        let question = document.createElement("div");
        question.innerText += "Question:" + json[i].question;
        body.appendChild(question)

        //Answer
        let answer = document.createElement("div");
        answer.innerText += "Answer:" + json[i].answer;
        body.appendChild(answer)
    }
  });