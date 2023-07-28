

class Cat {
    constructor(name) {
        this.name = name

    }
    speak(){
        console.log( `${this.name} says meow!`)
    }
}

class Dog{
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird{
    constructor(isMale, name) {
        this.isMale = isMale
        this.name = name
    }
    speak(){
        if(this.isMale === true){
          return  `Its me! ${this.name}`
        } else{
            return `${this.name} says squak!`
        }
    }
}

let boyBird = new Bird(true, 'Tim')
let girlBird = new Bird(false, 'Dolly')