// // // // const array =[12,433,64,75,24,90,12,43,67,43,67,90];
// // // // function noDuplicate(array){
// // // //     const no_copy = [];
// // // //     for(const items of array){
// // // //         if(no_copy.includes(items)===false){
// // // //             no_copy.push(items);
// // // //         }
// // // //     }
// // // //     return no_copy;
// // // // }

// // // // const solution =  noDuplicate(array);
// // // // console.log(solution);

// // // const array =[1,2,3,4,5,6,7,7,8,9,12,54,12,11,11,13,31];

// // // function dontcopy(array){
// // //     const real = [];
// // //     for(let i =0;i<array.length;i++){
// // //         if(real.includes(array[i])===false){
// // //             real.push(array[i]);
// // //         }
// // //     }
// // //     return real;
// // // }

// // // const solution = dontcopy(array);
// // // console.log("non repeating numbers are : " + solution);

// // const array = [12,34,656,345,5,3,5,766,34,67,76];

// // function lowest(array){
// //     let min = array[0];
// //     for(let i =0, j =1;i<array.length-1 && j<array.length;i++ ,j++){
// //         if(array[i]<min){
// //             min = array[i];
// //         }
// //         // return min;
// //     }
// //     return min;
// // }
// // const solution = lowest(array);
// // console.log(solution);
// // time table and date
// // const date = new Date();
// // console.log(date);
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//      console.log(i);
//   }, 100);
// }

// function celcius_to_farenheight(celsius) {
//   let fahrenheit = (celsius * 1.8) + 32;
//   let roundedFahrenheit = parseFloat(fahrenheit.toFixed(2));
//   return roundedFahrenheit;
// }

// const solution = celcius_to_farenheight(50);
// console.log(solution);

// const array =[5,6,1,12,98,5];
// const find_num =5;

// function repeat(array){
//   let count =0;
//   for(let i =0; i < array.length;i++){
//     if(array[i]===find_num){
//       count++;
//     }
//   }
//   return count;
// }

// const solution = repeat(array);
// console.log(solution);

// const str = "hello";

// function countVowel(str){
//   let count = 0;
//   for(let i =0;i<str.length;i++){
//     if(str[i] === 'a' ||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u' ||str[i] === 'A' ||str[i] === 'E' ||str[i] === 'I' ||str[i] === 'O' ||str[i] === 'U'){
//       count++;
//     }
// }
// return count;
// }

// const solution = countVowel(str);
// console.log(solution);

// function generateRandomNumber() {
//   const randomFraction = Math.random();
//   const randomNumber = Math.floor(randomFraction * (20 - 10 + 1) + 10);
//   return randomNumber;
// }

// const randomNum = generateRandomNumber();
// console.log(randomNum);

// const array ="hello programmers";
// const a = array.split(' ');
// const b = a[1];
// console.log(b.length);

const WordArray = "I am learning Programming to become a programmer";

function biggest_SubArray(WordArray) {
  let xy = 0;
  let sol = "";
  const Array = WordArray.split(' ');

  for (let i = 0; i < Array.length; i++) {
    let xz = Array[i].length;
    if (xy < xz) {
      xy = xz;
      sol = Array[i];
    }
  }

  return sol;
}

const solution = biggest_SubArray(WordArray);
console.log(solution);













