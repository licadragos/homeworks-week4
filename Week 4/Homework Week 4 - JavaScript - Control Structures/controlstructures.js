// 1.display in the console the numbers from 1 to 20
for (let i=0; i<21; i++){
    console.log(i)
}

//2.display in the console the odd numbers from 1 to 20
for (let i=1; i<21; i+=2){
    console.log(i)
}

//3.compute the sum of the elements of an array and display it in the console
function sumOfAll(arr) {
    let sum = 0;
    for (let a of arr)
        sum += a;
    return sum;
}
console.log(sumOfAll([3,4,13]))

//4.compute the maximum of the elements of an array and display it in the console 
const numbers = [1,2,12,4,5,6];

const largestNumber = (values) => {
    let maximum = 0;
    for (let i=0; i.values.length; i+=1) {
        if (values[i] > maximum) {
            maximum = values[i];
        }
    }
}
console.log(Math.max(...numbers));

//5.compute how many times a certain element appears in an array
let scores = [65, 65, 95, 135, 75, 95, 75, 95, 275];

const countOccurrences = function(arr, val) {
    return arr.reduce((acc, elem) => {
        return (val === elem) ? acc + 1 : acc 
    }, 0);
}

console.log(countOccurrences(scores, 95));
console.log(countOccurrences(scores, 75));

//Challenge
for(var i=1; i<=2; i++)
{
    for(var j=1; j<=2; j++)
    {
        document.write('3232')
        document.write('<br>')
    };
}