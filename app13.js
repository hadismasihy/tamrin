var humans= [
    {
        name: 'mohammad',
        age: 32,
        jod: 'doctor',
        gender: 'male',
        hasCar: true,
    },
    {
        name: 'sara',
        age: 28,
        job: 'nurse',
        gender: 'female',
        hasCar: false,
    },
]
var maridd = [
    humans[0].age>18 && humans[1].age>18 && humans[0].hasCar == true || humans[1].hasCar== true
]
if (maridd){
    console.log(TheyCanMaride)
} else {
    console.log(TheyCanNotMaride);
    
}