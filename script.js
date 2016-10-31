var number1 = prompt("Type in your number 1 ");
var number2 = prompt("Type in your number 2");

if (number1 < number2) {
	alert(number1 + " is lower than " + number2)
} else {
	alert(number2 + " is bigger than " + number1)
}

// exercice 1

var age = prompt("How old are you ?")

if ( age >= 18) {
	console.log ("Enjoy your drink ahi !")
} 
else { 
	console.log("Get out!")
}
// exercice 2

var citizenship = prompt("Where are you from ?")
citizenship = citizenship.toUpperCase()
if (citizenship === "ISRAEL" ) {
	console.log ("Barouh aba !")
} else 
{ console.log ("Sliha - Bye bye") };

// exercice 3

var gender= prompt(" What's your gender ? ")
var age= prompt("How old are your?")

if (gender === "female" && age >= 18) {
  alert("You get a free drink!");
} else if (age >= 18) {
  alert("You can drink, but you must pay!");
} else {
  alert("No drink for you young one!");
}

// Javascript part II

for (var number = 0; number <= 1000; number += 1)

if (number % 5 === 0 ) 
{
  console.log(number);
}

// FizzBuzz Game

for (var number=0; number <= 20; number +=1)

{
	if (number%5 === 0 && number % 3 === 0 ) 
{ 
	console.log("FizzBuzz");
}

else if (number%3 === 0) 
{ 
console.log("Buzz");
}

else if (number % 5 === 0) 
{
	console.log("Fizz");
}

else {
	console.log(number);
}
};

//Array

 var family = ["Aaron","Sarah","Isaiah"];
console.log(family)
family.push("Baby 2");
console.log(family)
family.splice(0,1);
console.log(family);

var family = ["Aaron", "Sarah", "Isaiah"];

for (var number = 0; number < family.length; number += 1) {
  console.log(family[number]);
}

//Array Partner exercice 1
 
 var restaurant = ["Kanki" , "BurgerKing" , "Meatos" , "Meme" , "Mamie"];

 for ( var number = 0; number < restaurant.length; number += 1) {
 	console.log(restaurant[number]);
 	}

// exercice 2 array average

var sum = 0;
var average =0;

var array = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62]
for (var number = 0; number < array.length; number += 1)
{
	sum = array[number] + sum;
	average = sum/array.length
}
console.log(array.length)











