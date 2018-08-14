console.log("window", this)

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;

        this.makeOlderES5 = function() {
            console.log("makeOlderES5")
            console.log("this", this)
            this.age++;
            console.log("this.age", this.age)
        }

        this.makeOlderES6 = () => {
            console.log("makeOlderES6")
            console.log("this", this)
            this.age++;
            console.log("this.age", this.age)
        }
        console.log("person", this)
    }
}

let person = new Person("Jake", 55)

let buttonES5 = document.querySelector(".ES5")
buttonES5.addEventListener("click", person.makeOlderES5);

let buttonES6 = document.querySelector(".ES6")
buttonES6.addEventListener("click", person.makeOlderES6);