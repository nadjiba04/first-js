//informational message
console.log("Hello World!");
//warning message
console.warn("It must be incorrect!");
//error message
console.error("There is some error!");
//istifadəçinin ad,soyad və yaşı
let firstName = prompt("Type your first name"); 
let lastName = prompt("Type your last name"); 
let userAge = prompt("Type your age");
let mySentence = "My name is" + " " + firstName + " " + lastName + " " + "and I am" + " " + userAge + " " + "years old." ;
console.log(mySentence);
//
let numberOne = + prompt("Pls, Give any number");
let numberTwo = +prompt("Pls, Give any number");
// console.log(typeof numberOne, typeof numberTwo);
let sum = (numberOne + numberTwo) ;
let substract = (numberOne - numberTwo) ;
let mult = (numberOne *  numberTwo) ;
console.log(numberOne +  "+" + numberTwo + "=" +  sum);
console.log(numberOne +  "-" + numberTwo + "=" +  substract);
console.log(numberOne +  "x" + numberTwo + "=" +  mult);
// 
let countryName = prompt("Type your country name");
let cityName = prompt("Type your city name");
let streetName = prompt("Type your street name");
 console.log(countryName, cityName, streetName);
// //
let number1=  1  ;
let number2 = 10;
numberOne = number1 *(number2 + 10);
let result = (number1*number2);
console.log(result);
//
console.log(10 && 12) //AND operatorunun hem sag hem sol terefinin boolean chevrilmesi true olarsa sag terefde dayananin deyeri goturulur.
console.log("" && 12) //Eger tereflerden birinin boolean chevrilmesi false (yeni tereflerden biri falsy value olarsa) o zaman hemin falsy deyeri goturulur.
console.log(undefined || "Boolean Teach") //Or operatorunda hem sag hem sol terefinin boolean chevrilmesi true olarsa ilk true olan deyer hansidirsa o goturulur.
//
let numberOne1= 8 && 12 ; //burada sag ve sol true oldugu ucun sag terefi goturub yeni 12
let numberTwo1= 0 && 12 ; //burada tereflerden biri falsy deyeri oldugu ucun 0-i goturub.
let numberThree= null || 10 // burada tereflerden biri true olarsa o zaman bu deyer goturulur. ona gorede 10 goturulub
console.log((numberOne1+numberTwo1)*numberThree) // (12+0)*10=120
//
let numberOne2= 12||"25"; // Or operatorunda hem sag hem sol terefinin boolean chevrilmesi true olarsa ilk true olan deyer hansidirsa o goturulur.
let numberTwo2= 10 && 12; //AND operatorunun hem sag hem sol terefinin boolean chevrilmesi true olarsa sag terefde dayananin deyeri goturulur.
let substract1= numberOne2-numberTwo2 //12-12
let sum1= numberOne2+numberTwo2 //12+12
console.log(substract1,sum1) // 12-12=0 12+12=24
