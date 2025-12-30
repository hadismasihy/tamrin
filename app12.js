var humans= [
    {
        name: 'mohammad',
        age: 32,
        jobs: ['doctor'],
        gender: 'male',
        hasCar: true,
    },
    {
        name: 'sara',
        age: 28,
        jobs: ['nurse'],
        gender: 'female',
        hasCar: false,
    },
]
var maridd =
  humans[0].age > 18 &&
  humans[1].age > 18 &&
  (humans[0].hasCar || humans[1].hasCar);

if (maridd) {
  console.log("They can marry");
} else {
  console.log("They cannot marry");
}