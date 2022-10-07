// 1. rest operator & arrow function

const collectAnimals = (...animals) => animals

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 2. Write a function that returns a food object with the array names as properties
const  combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// 

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
}
 
const parseSentence = ({location, duration}) => `We're going to have a great time in ${location} for ${duration}.`

console.log(parseSentence(vacation))

// 3. array destructuring 
function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}
