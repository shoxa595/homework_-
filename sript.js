//1
function square(num) {
  return num * num;
}

console.log(square(8));
//2
let cityName = prompt("Назови название города");

let persons = [
  { name: "John", age: 25, city: "NewYork" },
  { name: "Alice", age: 30, city: "London" },
  { name: "Bob", age: 22, city: "Paris" },
  { name: "Alex", age: 19, city: "London" },
  { name: "Tyler", age: 24, city: "NewYork" },
  { name: "Constantine", age: 31, city: "Paris" },
  { name: "Cole", age: 21, city: "London" },
];

let findPersonsByCity = (city) => {
  return persons.filter(person => person.city.toLowerCase() === city.toLowerCase());
};

let result = findPersonsByCity(cityName);

console.log(result);

//4
let a = prompt("Имя")

let b = persons.push(a)


console.log(persons);
