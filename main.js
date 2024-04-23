//Q2:
//let personName="Asghar";
//console.log('hello',personName,"Would you like to learn some Typescript today");
//Q3:
//let personName="Asghar";
//console.log(personName.toLowerCase());
//console.log(personName.toUpperCase());
//console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
//Q4:
//console.log("Audrey Hypburn once said",'"Word IMPOSSIBLE itself says I AM Possible"');
//Q5:
//let famousPerson="Audrey Hypburn";
//let message="once said,'Word IMPOSSIBLE itself says I AM Possible'";
//console.log(famousPerson,message);
//Q6:
//let whiteSpace="\n\t Asghar Chandio\t\n";
//console.log(whiteSpace);
//let withoutwhiteSpace=whiteSpace.trim();
//console.log(withoutwhiteSpace);
//Q7:
//console.log(4+4);
//console.log(10-2);
//console.log(4*2);
//console.log(16/2);
//Q8:
//console.log(2+2);
//console.log(6-2);
//console.log(2*2);
//console.log(8/2);
//Q9:
//let favouriteNumber=10
//console.log("My favourite number is",favouriteNumber);
"use strict";
//Q10:
//date: 4-March-24
//let whiteSpace - "\n\t Asghar Chandio\t\n"; //\n is used for new line and It is used for whitespace
//console. log(whiteSpace);
//let withoutwhiteSpace = whiteSpace.trim);
//console. log(withoutwhiteSpace);
//Q11:
// let friendName -["Asghar", "Saboor", "Arham", "Iltaf"]
// console. log(friendName[0])
// console. log(friendName[1])
// console. log(friendName[2])
// console. log(friendName[3])
//Q12:
//let friendName =["Asghar", "Saboor", "Arham", "Iltaf"] 
//let message="Subscribe to my channel Asghar Chandio" 
//console.log("Hello",friendName[0],message) 
//console.log("Hello",friendName[1],message) 
//console.log("Hello",friendName[2],message) 
//console.log("Hello",friendName[3],message)
//Q13:
//let transpotation : string [] = ["Honda Motocyle", "Audi", "Honda City"];
//transpotation.map((items) => console. log('I would like to own a ${items}'));
//Q14:
//let guestArr : string [] = ["Ali", "Haseeb", "Wajahat" ];
//guestArr.map((items) => (console.log('Dear ${items) , You are invited to the dinner')));
//Q15:
//let guestArr : string[] = ["Asghar", "Haseeb", "Ali", "Hamza"];
//let canNotAttend : string = "Asghar"
// console.log(canNotAttend + " " "can not attend the dinner.")
//let newGuest : string = "Iltaf"
//guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console. log(guestArr)
//guestArr.map((items) =>
//console.log('Dear ${items}, you are invited to the dinner.')
//)
//Q16:   
//let guests: string[] = ["Alice", "Bob", "Charlie"];

// Inform people about the bigger dinner table
//console.log("Great news! We found a bigger dinner table.");

// Add a new guest to the beginning of the array
//guests.unshift("David");

// Add a new guest to the middle of the array
//const middleIndex = Math.floor(guests.length / 2);
//guests.splice(middleIndex, 0, "Emily");

// Add a new guest to the end of the array using append()
//guests.push("Frank");

// Print invitation messages
//guests.forEach((guest) => {
  //  console.log(`Dear ${guest}, you are invited to dinner at our place.`);
//});
//Q17:
//let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Emily", "Frank"];

// Inform that only two people can be invited
//console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

// Remove guests until only two remain
//while (guests.length > 2) {
    //const removedGuest = guests.pop();
  //  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
//}

// Print invitation messages to the two remaining guests
//guests.forEach((guest) => {
  //  console.log(`Dear ${guest}, you are still invited to dinner at our place.`);
//});

// Remove the last two names from the list
//guests.pop();
//guests.pop();

// Print to confirm the list is empty
//console.log("After dinner, the guest list is now:", guests);
//Q18:
//let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Machu Picchu", "Santorini"];

// Print original order
//console.log("Original order:", placesToVisit);

// Print alphabetical order without modifying the actual list
//console.log("Alphabetical order:", [...placesToVisit].sort());

// Print to show original order is unchanged
//console.log("Original order after alphabetical print:", placesToVisit);

// Print reverse alphabetical order without modifying the actual list
//console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print to show original order is unchanged
//console.log("Original order after reverse alphabetical print:", placesToVisit);

// Reverse the order of the list
//placesToVisit.reverse();
//console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
//placesToVisit.reverse();
//console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
//placesToVisit.sort();
//console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
//placesToVisit.sort((a, b) => b.localeCompare(a));
//console.log("Sorted in reverse alphabetical order:", placesToVisit);
//Q19:
//let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Emily", "Frank"];

// Print the number of people invited to dinner
//console.log(`You are inviting ${guests.length} people to dinner.`);
//Q20:
//let landmarks: string[] = [
    //"Eiffel Tower",
    //"Great Wall of China",
    //"Statue of Liberty",
    //"Machu Picchu",
    //"Taj Mahal",
    //"Pyramids of Giza",
    //"Sydney Opera House",
    //"Colosseum",
    //"Christ the Redeemer",
  //  "Petra"
//];

//console.log("List of Famous Landmarks:");
//landmarks.forEach((landmark, index) => {
  //  console.log(`${index + 1}. ${landmark}`);
//});
//Q21:
// Define a Book type
//type Book = {
    //title: string;
    //author: string;
    //genre: string;
  //  year: number;
//};

// Create an array of books
//let books: Book[] = [
    //{ title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
   // { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
   // { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics", year: 1925 },
   // { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813 },
  //  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997 }
//];

// Print information about each book
//console.log("List of Books:");
//books.forEach((book, index) => {
  //  console.log(`${index + 1}. ${book.title} by ${book.author}, ${book.genre}, ${book.year}`);
//});
//Q22:
//let numbers: number[] = [1, 2, 3, 4, 5];

// Try accessing an index that doesn't exist
//console.log(numbers[10]); // This will produce an index error
//Q23:
//let car = "subaru";
//console. log("is car == 'subaru'? predict true") 
//console. log(car ==' subaru')
//console. log("is car != 'honda city'? predict true")

//console. log(car != 'honda city' )
// console. log("is car == 'Subaru'? predict false")
// console. log(car == 'Subaru")

//console. log("is car == 'SUBARU'? predict false")
//console.log(car ==   'SUBARU')
//console. log("is car.length == 3? predict false")
//console. log(car.length == 3)
//console. log("is car.length != 10? predict true")
//console.log(car.length != 10)
//console.log("is 10 › 45 ? predict false")
//console. log (10 > 45)
//console. log("is 3 <= 2 ? predict false")
//console. log(3 <= 2)
//console. log("is 72 ›= 83 ? predict false")
//console. log(72 ›= 83)
//console. log("is car == 'subaru' && car.length == 6? predict true ") 
//console.log (car == 'subaru' && car.length == 6)
//Q24:
// Tests for equality and inequality with strings
//let fruit1 = 'apple';
//let fruit2 = 'banana';

//console.log("Is fruit1 equal to fruit2? I predict False.");
//console.log(fruit1 == fruit2); // False

//console.log("Is fruit1 not equal to fruit2? I predict True.");
//console.log(fruit1 != fruit2); // True

// Tests using the lower case function
//let word1 = 'HELLO';
//let word2 = 'hello';

//console.log("Is word1 lower case equal to word2 lower case? I predict True.");
//console.log(word1.toLowerCase() == word2.toLowerCase()); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//let num1 = 10;
//let num2 = 5;

//console.log("Is num1 greater than num2? I predict True.");
//console.log(num1 > num2); // True

//console.log("Is num1 less than or equal to num2? I predict False.");
//console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
//let x = 20;
//let y = 30;
//let z = 40;

//console.log("Is x less than y and y less than z? I predict True.");
//console.log(x < y && y < z); // True

//console.log("Is x greater than y or y greater than z? I predict False.");
//console.log(x > y || y > z); // False

// Test whether an item is in an array
//let fruits = ['apple', 'banana', 'orange'];

//console.log("Is 'banana' in the fruits array? I predict True.");
//console.log(fruits.includes('banana')); // True

// Test whether an item is not in an array
//console.log("Is 'grape' not in the fruits array? I predict True.");
//console.log(!fruits.includes('grape')); // True
//Q25:
// let alien_color = "green"

// if (alien_color == "green")
// console.log( "you earn 5 points")

//let alien_color : string = "red" 
//if (alien_color == "green")
//console. log("no output")
//Q26:
//let alien_color = "green"

//if (alien_color == "green") {
//console.log( "player just earned 5 points for shooting the alien")
//} else{
//console.log("player just earned 10 points")
//}
//let alien_color = "red"
//if (alien_color == "green") {
//console.log( "player just earned 5 points for shooting the alien")
 //} else{
//console.log("player just earned 10 points")
//}
//Q27:
//let alien_color: string = "red"

//if (alien_color == "green")  {
//console.log("5 points")
//｝ else if (alien_color == "yellow") {
//console.log("10 points")
//}
//else {
//console. log("15 points")}
//Q28:
//let age : number = 18

//if (age < 2) {
// console.log ("you are a baby")
//} else if (age < 4) {
//console.log("you are a toddler")
//} else if (age < 13) {
//console.log(" you are a kid")
//} else if (age < 20) {
//console.log(" you are a teenager")
//} else if (age < 65) {
//console.log(" you are a adult")
//｝ else {
//console.log("you are older")
//}
//Q29:
//let favourite_fruits : string [] = ["kivi", "orange" , "apple" , "berry", "peach"]

//if (favourite_fruits.includes ("kivi")) {
//console.log ("kivi")
//}
//if (favourite_fruits.includes ("apple")) {
//console. log("apple")
//}
//if (favourite_fruits.includes("orange")) {
//console.log("orange")
//}
//if (favourite_fruits.includes ("berry")) {
//console. log("You really like bananas")
//}

//if (favourite_fruits.includes ("peach")) {
//console.log("You really like bananas")
//}

//Q30:
//let users: string [] = ["eric", "haseeb", " ali" , "fatima", "admin"]
//for(let user of users) {
 //if (user === "admin") {
//console.log("Hello admin, would you like to see a status report?")
  //} else {
//console.log (' Hello $(user), thank you for logging in again')}}
//Q31:
//let users : string [] = ["eric", "haseeb", " ali" , "fatima", "admin"]
//if (users.length === 0) {
//console.log ("We need to find some users!")
//}
//else
//{
//for (let user of users) {
//if ( user === "admin") {
//console.log("Hello admin, would you like to see a status report?")
//} else {
//console.log ('Hello $(user), thank you for logging in again')
//}
//}
//}
//users = []
//if (users.length === 0 ){ 
 // console.log ("we need to find some users!")
//}
//Q32:
//let current_users : string [] = ["admin", "Eric", "Ali", "Hamza", "fatima"]
//let new_users : string [] = ["admin", "fatima", "Aliza" ,"Haseeb", "Noor" ] 
//let current_users_lower : string [] =current_users.map(user => user. toLowerCase())
//for (let new_user of new_users) {
//if (current_users_lower.includes (new_user.toLowerCase())) {
 // console.log('Sorry ${new_user}, that name is taken')
  //} else {
  //console.log('Yes ${new_user}, is still in avaliable list')
  //}
//}
//Q33:
//let numbers : number [] =[1,2,3,4,5,6,7,8,9]
//for (let number of numbers) {
//if (number === 1) {
//console.log ('${numbers}st') //1st
//} else if (number === 2) {
//console.log ('${numbers}nd') //2nd
//}
//else if (number === 3) {
//console.log ('${numbers}rd') //3rd
//} else {
 // console.log ('${number}th') //4th, 5th, 6th, 7th, 8th ,9th
//}
//}
//Q34:
//let favourite_pizza : string [] = ["pepperoni" , "chicken" , "veg"]

// for (let pizza of favourite_ pizza) {
//console.log(pizza)
//}
// console.log ("\n")

//for (let pizza of favourite_pizza){
//console.log('I really like ${pizza} pizza!')
//}

//console.log ("\nI really love pizza!")
//Q35:
//let animals : string [] = ["cat", "lion", "dog" ]
//for (let animal of animals) {
//console.log (animal)
//}
//console.log ("\n")
//for (let animal of animals){
//console.log (' A ${animal} has a tail')}
//Q36:
//function makeShirt(size: string, text: string): void {
  //console.log('you order a ${size} shirt that says ${text}')}
  //makeShirt('large', '"i love typescript"')
  //makeShirt ('medium', '"i need a big shirt"')
  //Q37:
  //function makeShirt(size: string = 'large', text: string = ' I love typescript'): void {
 //console.log('you have order a ${size} shirt that says ${text}')
//}
// makeShirt();
// makeShirt('medium')
//different message
//makeShirt('small','I need a big shirt to wear')
//Q38:
//   function describe_city(city: string, country: string = 'Pakistan'): void {
//   console.log('${city}is in ${country}')
//   }
//  describe_city('karachi') //default sentence 
//  describe_city('france','europe')
//  describe_city('lahore','punjab')
//Q39:
//function cityCountry(city: string, country: string): string {
//  return '${city}, ${country}'
//}

//let c1 = cityCountry('lahore', 'pakistan')
//let c2 = cityCountry('tokyo', 'japan')
//let c3 = cityCountry('paris', 'france')

//console. log(c1)
//console. log(c2)
//console. log(c3)
//Q40:
//function makeAlbum (artist: string, title: string): { artist: string; title: string} {
//const dictionaries = {
//artist: artist.charAt(0). toUpperCase() + artist.slice(1),
//title: title.charAt(0).toUpperCase() + title.slice (1)
//}
//return dictionaries;
//}

//let album = makeAlbum("ali" ,"light")
//console.log(album)
//album = makeAlbum("bilal" ,"red wave")
//console.log(album)
//album = makeAlbum ("hamza" ,"seenbreez")
//Q41:
//function show_magicians(magicians: string[]): void {
//
  //for (const magician of magicians) {
  //  console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  //}
//}
//
//const magician: string[] = ["ali", "hamza", "bilal"];
//show_magicians(magician)
//Q42:
//function make_great (magicians: string[]): void {
 //  for (let i = 0; i < magicians.length; i++) {                             //i stand for index string
  //      magicians[i] = magicians[i]    + '  the great  '
//
  // }
 // }
//const magicians2: string[] = ["usman", "haseeb", "wajahat "]; 
//make_great(magicians2)
//show_magicians(magicians2)
//Q43:
//function make_great2(magicians: string[]): string[] {
//const greatMagicians: string[] = [];
 //for (let i = 0; i < magicians.length; i++) {
  // greatMagicians.push(magicians[i] + ' the Great');
 //}
//return greatMagicians;
//}
//const magicians3: string[] = ["usman", "haseeb", "wajahat "];
 //const greatMagicians2: string[] = make_great2(magicians3);
//show_magicians(magicians3);
//show_magicians(greatMagicians2);
//Q44:
//function sandwich(...items: string[]): void {
//console.log ("Sandwich order:")
//
//for (let i = 0; i < items.length; i++) { 
  //console. log(' - ${items[i]}')
//}
//}
//console.log("enjoy your sandwich Asghar Chandio")


//sandwich('capsicum' , 'tomato', 'chicken')
//sandwich('beef' , 'cheese')
//sandwich('garlic chicken', 'mayo sauce')
//Q45:
//type car = {
//manufacture: string
//model: string 
//[key: string]: any;
//}

//function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
//return{
//manufacture,
//model,
 //...optional
//}
//}
//const mycar: car = createCar ("toyota", "corolla", { color: "silver" , year: "2024"})
//console. log(mycar)