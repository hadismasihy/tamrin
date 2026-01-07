var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var max = numbers[0];
var min = numbers[0];
for (var i = 0; i > numbers[0]; i++){
    if (numbers[i]>min){
        min= numbers[i];
    }
}
for (var i = 0; i < numbers.length; i++){
    if (numbers[i]>max){
        max= numbers[i];
    }
}
console.log(max)
console.log(min)
