class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        switch(this.type.toLowerCase()){
            
            case "guerreiro" :
                console.log(`o ${this.type} atacou usando espada`);
                break;

            case "mago":
                console.log(`o ${this.type} atacou usando magia`);
                break;

            case "monge":
                console.log(`o ${this.type} atacou usando artes marciais`);
                break;

            case "ninja":
                console.log(`o ${this.type} atacou usando shuriken`);
                break;
        }
    }
}

let myHero01 = new Hero("Aldebaran", 35, "Guerreiro")
myHero01.attack();

let myHero02 = new Hero("Friren", 25, "Mago")
myHero02.attack();

let myHero03 = new Hero("Miroku", 29, "Monge")
myHero03.attack();

let myHero04 = new Hero("Naruto", 15, "Ninja")
myHero04.attack();

// class Hero {
//     constructor(name ) {
//         this.name = name;
//     }

// }

// class Guerreiro extends Hero {
//     constructor(name, age, type = 'Guerreiro') {
//         super(name);
//         this.age = age;
//         this.type = type;
//     }

//     attack() {
//         console.log(`o ${this.type} atacou usando espada`)
//     }
// }

// class Mago extends Hero {
//     constructor(name, age, type = 'Mago') {
//         super(name);
//         this.age = age;
//         this.type = type;
//     }

//     attack() {
//         console.log(`o ${this.type} atacou usando magia`)
//     }
// }

// class Monge extends Hero {
//     constructor(name, age, type = 'Monge') {
//         super(name);
//         this.age = age;
//         this.type = type;
//     }

//     attack() {
//         console.log(`o ${this.type} atacou usando artes marciais`)
//     }
// }

// class Ninja extends Hero {
//     constructor(name, age, type = 'Ninja') {
//         super(name);
//         this.age = age;
//         this.type = type;
//     }

//     attack() {
//         console.log(`o ${this.type} atacou usando shuriken`)
//     }
// }

// let myHero01 = new Guerreiro("Aldebaran", 35)
// myHero01.attack();

// let myHero02 = new Mago("Friren", 25)
// myHero02.attack();

// let myHero03 = new Monge("Miroku", 29)
// myHero03.attack();

// let myHero04 = new Ninja("Naruto", 15)
// myHero04.attack();