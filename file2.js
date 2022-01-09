"use strict";
let name = "aman";
name = name.slice(0, 2);
name = "aman";
let age = 23;
let aboutme = `my name is ${name} and my age is ${age} `;
console.log(aboutme);

//type case to  str
console.log(typeof (age + ""));
age = "23";
console.log(typeof +age);

// const should be defined
//ype of null is object -bug in javascript
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(12);
myNumber = 12n;
console.log(typeof myNumber, myNumber);

// == checks value not datatype
// === check values and datatype
// same with  != and !==

// && and ||

// let username =prompt("Enter a Number");//it tqakes input as string
// console.log(username)

let day = 2;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
let i = 0;

while (i < 1) {
  i++;
}

let fruits = ["apple", "mango"];
fruits.pop();
fruits.unshift("apple");
fruits.shift();
let fruits1 = fruits; //it is reference they  both pointing to  same address in memmory if i change
// anything in array 1 changes will be reflect in array 2 ,to overcome use slice array2=array1.slice(0) or
// array2 = [].concat(array1)
// or spread operator array2 =[...array1] slice operator is the fastest one

for (let fruit of fruits) {
  console.log(fruit);
}

for (let index in fruits) {
  console.log(fruits[index]);
}

let [myvar1, myvar2] = ["value1", "value2"];
console.log(myvar1, myvar2);

const person = { name: "aman", age: 22 };
console.log(person);

person.gender = "male";
console.log(person);
console.log(person.name);

for (let key in person) {
  console.log(person[key]);
}

console.log(Object.keys(person));

const obj = { [myvar1]: myvar1, [myvar2]: myvar2 };
console.log(obj);

// const newarray =[...array1,...array2] same thing work for dict as well
// const newarray = [..."12345"]
// const newObject = {...obj2,...obj1,key68:"value"}
let band = { bandName: "twenty one pilots", famousSong: "stairway to heaven" };
let { bandName, famousSong } = band;
console.log(bandName); //twenty one pilots

// give new variablename
// let { bandName, famousSong ,...restobject} = band;
const { bandName: var1, famousSong: var2 } = band;

function singleHappy() {
  console.log("happy birthday");
}

const single = function () {};

//arrow functions
const singlearrowfunctio = () => {
  console.log("happy birthday");
};
//hoinsting works only with normal function where you can call function
// befored eclaring
//  hello();
// let hello = function (){
// console.log("hello world")
// }

//you can  define  function inside function

//lexical scope

//rest parameters
function myFunc(a, b, ...c) {}

// call back  function we can  slso pass  function as argument
// we can aslso return function

function myFunc() {
  function hello() {
    console.log("hello world");
  }
  return hello;
}
const ans = myFunc();
ans();

const numbers = [4, 2, 5, 8];
function multiplyby2(number, index) {}
numbers.forEach(multiplyby2);
// above for each pass the value and index one by one

// map

const square = function (number) {
  return number * number;
};
const squareNumber = numbers.map(square);
console.log(squareNumber);

//filter function
const isEven = function (number) {
  return number % 2 === 0;
};
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// reduce
const sum = numbers.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 100);
console.log(sum);

// sort method
// javascript by default consider them as string and sort
numbers.sort((a, b) => {
  return a - b;
});

// above function willreturn in ascending order ,ford ecreasing order
// change it to b-a

//find method
function isLength3(string) {
  return string.length === 3;
}
const ans1 = numbers.find(isLength3);
console.log(ans1);

//every  method
const ans2 = numbers.every((number) => number % 2 === 0);
console.log(ans2);

//some :- is any of the value  satisfy the condition

// fill
const myArray = [1, 2, 3, 4, 5, 6, 7];
myArray.fill(0, 2, 5);
console.log(myArray);

// splice :- select ,delete and insert between array splice(start,delete ,insert)

//delete
myArray.splice(1, 1);
console.log(myArray);

//insert item

myArray.splice(1, 0, "inserted iteem ");
console.log(myArray);

// set: no index based access and  order is also  not defined 

const numbers1 = new Set([1, 2, 3, 3]);
console.log(numbers1)
console.log(numbers1.has(1))

//map 
//in objects every key is string but in map data typee will be defined
const person1 =new Map();
person1.set("firstname","aman");
person1.set("age",7);
person1.set(1,"one");
for(let key of person1.keys()){
    console.log(key);
}

for(let [key,value] of person1){
    console.log(key,value);
}

const person2= new Map([['firstname','aman'],['lastname','lalwani']]);
console.log(person2)

//clone using object.assign 
//memory

const obj1 = {
    "key1":"value1",
    "key2":"value2"
}

const obj2 =Object.assign({},obj1);
console.log(obj2)

const obj3 = {...obj1}


//?. use when the key  does not exist it will not give error and 
// it will give undefined 

// console.log(user?.address?.houseNumber);

//methods  

//function inside object 

const person3  ={
    firstName: "aman",
    age :8,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age} `);
        
    }
}

person3.about();
const users =[
  {userid:1},
  {userid:2}
]
const myuser =users.find((user)=>user.userid ===1)
console.log(myuser);


function personInfo(){
  console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person4= {
  firstName:"harsh",
  age:8,
  about:personInfo
}

person4.about()

//call  is used when you want to call object of another object in another object

function favmusician (hobby,favmusician ){
  console.log(this.firstName,this.age,hobby,favmusician)
}

const user1={
  firstName:"aman",
  age:8,
  about: function(){
    console.log(this.firstName,this.age);
  }
}

const  user2 ={
  firstName:"mohit",
  age:9
}

user1.about.call(user2)//print the values of user2
// user1.about.call(); it will print undefined 
user1.about.call(user1);//it will print user1 values 


favmusician.call(user1,"cricket","linkin park");

//apply 

favmusician.apply(user2, ["cricket","linkin park"])

//bind returns a new sunction which you can use anytime 

const func =favmusician.bind(user2,"cricket","linkin park");
func();

//arrow functions (there is no this of array function )


const obj4=  {
  key1:"value1",
  key2:"value2"
}

const obj5 = Object.create(obj4);
//obj1  is  the proto of obj2
obj2.key3="value3"
console.log(obj2.key1)//it will print the value of  protois  not found 

console.log(obj2.__proto__)


//in javacript function is also a object 
function hello (){
console.log("hello world");

}
hello.prototype.sing=function (){
  return "lalal";
}
console.log(hello.prototype.sing())
//prototype is  present in function 

function createUser (firstName,age){
  this.firstName=firstName;
  this.age=age ;

}
createUser.prototype.about= function(){
  console.log(this.firstName,this.age);
}

const user1 = new createUser("harshit",6);
//Objects.create(createUser.prototype)


class Animal {
  constructor(name,age ){
    this.name=name;
    this.age =age;
  }

  eat(){
    return this.name;
  }
  get name(){
    return this.name;
  }
  set name(name){
    this.name=name;
  }
}

class Dog extends Animal {

  constructor(name,age,speed){
    super(name,age);
    this.speed=speed;

  }
}


names= ["aman","prem"]
names .forEach(e=> console.log(e));


//dates 

const fromDate =new Date();

const  toDate =new Date();
//gives epoch 
console.log(fromDate.getTime());



//sync vs asynchronous 


function isPrimePromise(number) {
  return new Promise((resolve,reject) => {

    resolve 
  });
}

//async await

function testfunction(){
  return "";
} 

async function testasync(){
  const r1 = await testfunction();
  console.log(r1)
}

//fetch api (promise based)

fetch("").then(a=>a.json()).then(j=>console.log(j))