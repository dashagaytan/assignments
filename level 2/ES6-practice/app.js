const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Task 1: arrow function

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables= (arr) => arr.map (carrot => ({ type: "carrot", name: carrot }))

// console.log(mapVegetables(carrots))

// Task 2: re-write .filter()'s callback function using arrow function
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

const fulterForFriendly = (arr) => arr.filter(person => person.friendly)
console.log(fulterForFriendly(people))

// Task 3: 
// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => (a + b)
console.log(doMathSum(3, 4))

const produceProduct = (a, b) => (a * b)
console.log(produceProduct(5, 5))

// Task 4: 

const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => (`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)
console.log(printString())

// Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog"))
 console.log(filterForDogs(animals))
 