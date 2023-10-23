// ЗАДАНИЕ 1

// function retNum (x,y) {
//  if (x < y) {
//  return -1;
//  } else if (x > y) {
//  return 1;
//  } else {
//  return 0;
//  }
// }
//  console.log(retNum(1, 1)); 
   



   
// ЗАДАНИЕ 2

// function factor(number) {
// if (number === 0 || number === 1) {
// return 1;
//   } else {
//   return number * factor(number - 1);
//   }
//   }
//   console.log(factor(4)); 





//  ЗАДАНИЕ 3
//  function strNum (x, t, y) {
//     return (`${x}${t}${y}`);
//  }
//  console.log(strNum(2, 4, 6))




// ЗАДАНИЕ 4
// function matPlosh(length, width) {
//     if (width === undefined) {
//         return length * length 
//     } else {
//         return length * width
//     }
// }
// console.log(matPlosh(8))
// console.log(matPlosh(7, 4))





// ЗАДАНИЕ 5

// function isPerfectNumber(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
//     return sum === num;
//   }
//   console.log(isPerfectNumber(6)); 





//   Задание 6

  
// function findPerfectNumbers(min, max) {
//     let perfectNumbers = [];
  
//     for (let i = min; i <= max; i++) {
//       if (findPerfectNumber[i]) {
//         perfectNumbers.push(i);
//       }
//     }
//     return perfectNumbers;
//   }
  
//   console.log(findPerfectNumbers(1, 100)); 
 




// Задание 7 


// function isPerfectNumber(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//       if (number % i === 0) {
//         sum += i;
//       }
//     }
    
//     if (sum === number) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(isPerfectNumber(6));





//  Задание 8

    
// function convertToSeconds(hours, minutes, seconds) {
//     let totalSeconds = hours * 3600 + minutes * 60 + seconds;
//     return totalSeconds;
//   }
  
//   console.log(convertToSeconds(3, 21, 12)); 
  



//  Задагие 9

// function convertToTime(totalSeconds) {
//     let hours = Math.floor(totalSeconds / 3600);
//     let remainingSeconds = totalSeconds % 3600;
//     let minutes = Math.floor(remainingSeconds / 60);
//     let seconds = remainingSeconds % 60;
  
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//     return hours + ":" + minutes + ":" + seconds;
//   }

//   console.log(convertToTime(4444)); 





// Задание 10

// function convertToSeconds(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;
//   }
//   function convertToTime(totalSeconds) {
//     let hours = Math.floor(totalSeconds / 3600);
//     let remainingSeconds = totalSeconds % 3600;
//     let minutes = Math.floor(remainingSeconds / 60);
//     let seconds = remainingSeconds % 60;
  
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//     return hours + ":" + minutes + ":" + seconds;
//   }
  
//   function calculateTimeDifference(h1, m1, s1, h2, m2, s2) {
//     let seconds1 = convertToSeconds(h1, m1, s1);
//     let seconds2 = convertToSeconds(h2, m2, s2);
//     let difference = Math.abs(seconds1 - seconds2);
//     return convertToTime(difference);
//   }
//   console.log(calculateTimeDifference(2,3,2,4,6,5)); 
  