/*// 1 - Method
const animal = {
    name: "Bob",
    bark: function () {
        console.log("Au au");
    },
};
console.log(animal.name)
animal.bark();

//Going deeper into methods
const people = {
    Name: "Washington",

    getName: function () {
        return this.Name;
    },

    setName: function (newName) {
        this.Name = newName;
    },
};

console.log(people.Name);
console.log(people.getName());

people.setName("Washington Bueno");
console.log(people.getName());

//Basic Class

const dog = {
    breed: null,
    paws: 4,
};

const yorkshire = Object.create(dog);
yorkshire.breed = "YorkShire";
console.log(yorkshire);

const poodle = Object.create(dog);
poodle.breed = "Poodle";
console.log(poodle);

// 6 - Function Construct

function makeCat(name, color) {
    const cat = Object.create({});
    cat.name = name;
    cat.color = color;
    return cat;
}

const catOne = makeCat("Zoe", "Black");
const catTwo = makeCat("Zeus", "White");
console.log(catOne);
console.log(catTwo);



// 7 - Class Function
function Dog(name, age) {
    this.name = name;
    this.age = age;
}

const sdr = new Dog("Bruce", "10")
const yorkshire = new Dog("Jade", "8")
console.log(sdr);
console.log(yorkshire);

//Methods int the construction Functions
Dog.prototype.bark = function () {
    console.log("Au au au");
}

sdr.bark();

//Class ES6
class DogClass {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
};

const bruce = new DogClass("bruce", "black");
console.log(bruce);

// More about class
class Truck {
    constructor(axes, color) {
        this.axes = axes;
        this.color = color;
    }

    descriptionTruck() {
        console.log(`This truck have ${this.axes} axes and  your color is ${this.color}`);
    }
}

const scania = new Truck(6, "red");
console.log(scania);
scania.descriptionTruck();

// 11 - override por prototype
class Humano {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  const matheus = new Humano("Matheus", 31);
  
  console.log(matheus);
  
  Humano.prototype.idade = "Não definida";
  
  console.log(matheus.idade);
  console.log(Humano.prototype.idade);*/

// 12 - symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(Aviao.prototype[asas]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, javascript, js";

console.log(myPost);