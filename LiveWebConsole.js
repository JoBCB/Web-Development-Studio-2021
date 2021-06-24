//  * * * * * WELCOME TO JS EXPLORATIONS IN THE DOM * * * * *  //

alert('Hello, world!')


function hello() {
    alert('Hello, world!')
}
// hello()

var hello;

  hello = function() {
      alert('Hello, world!')
} 
// hello()


// ARROW FUNCTION
// if the function has only one statement, and the statement returns a value, 
// you can remove the brackets;

var hello;
  hello = () => { alert('Hello, world!') } 
hello()



// var x = 10;  
// here x is 10

{
  var x = 2; // block Scope: here x is 2
}
// console.log(x); // here x is 2 

// variables declared Locally (inside a function) have Function Scope.

// var x = 10;

function name() {
  var x = 2;
  console.log(x); // code here can use x
}
// name()


// for debugging purposes, you can call the console.log() method in the browser to display data


//  var: function scoped VS let: block scoped

function anothername() {
  var x = 2;
  let y = 3;

  console.log(x, y); 

  {
    let x = "100";
    console.log(x); // 100
  }

  console.log(x); // 2
}
anothername();


// CONST can't be reassigned and is block scoped
// you’re signalling to your future self as well as any other future developers that have to read your code that this variable shouldn’t change

// const y = 50;

// y = 100; // ReferenceError



// JavaScript variables can hold many data types: numbers, strings, objects and more;
// all JavaScript identifiers are case sensitive;
// JavaScript does not interpret VAR or Var as the keyword var;

var length = 205;                               // Number
var lastName = "Lovelace";                      // Strings store text, you write them in between single or double quotes;
var x = {firstName:"Ada", lastName:"Lovelace"};  // Objects are variables too that can contain many values. 


//ARRAY
var fruits = ["Almond", "Apple", "Chili pepper"];

fruits.sort();   
// console.log(fruits[0]);

fruits.reverse();
// console.log(fruits[0]);


// document.getElementById("empty").innerHTML = fruits[0]; 

// OBJECTS
var person = {firstName:"Ada", lastName:"Lovelace", age:"205"}; 

var person = {
  firstName: "Ada",
  lastName: "Lovelace",
  age: 205,
};

// Display some data from the object:

// document.getElementById("empty").innerHTML = person.firstName + " is " + person.age + " years old.";


// JavaScript has a Boolean data type. It can only take the values true or false.
let isPending = false;
let isDone = true;

console.log(typeof(isPending)); 
console.log(typeof(isDone)); 

// Boolean(10 > 9)

// Display a string:
var txt = "You can display the lenght of this text on the empty div";
// document.getElementById("empty").innerHTML = txt.length; // counts empty spaces

// document.getElementById("empty").innerHTML = "Hello World!";

// IF STATEMENTS

// if (1 + 1 == 2) console.log("It's true");

// LOOPS

// let icons = "🌍 🖥️ 🌟";
// for (let char of icons) {
//   console.log(char);
// }


// excerpt From: Marijn Haverbeke, 'Eloquent JavaScript'


// document.querySelector("#empty").style.width="1000px"
// document.querySelector("#empty").style.fontSize="42pt"


navigator.userAgent

window.innerWidth

window.innerHeight


// scroll to top

function scrollWin() {
  window.scrollTo(0, 0);
}

// document.body.style.background = "url()"

// var x = document.querySelector("h1")

//x.style.color="pink"

// adding your prefered colour as a parameter

function changeColor(newColor) {
   var elem = document.getElementById('title');
   elem.style.color = newColor;
}
changeColor('blue')



// TIMING EVENTS

// setInterval(function, milliseconds)
// same as setTimeout(), but repeats the execution of the function continuously.


// ADDING AN INTERVAL TO AN ARRAY

colors = new Array("#FFF", "#202020 ", "#859de4 ","#fdf56d" ,"#b8ffeb  ", "#404040 ", "#cc92ba")

colorIndex = 0
idInterval = 0

function colourify () {
 document.querySelector('body').style.backgroundColor = colors[colorIndex];
 colorIndex = (colorIndex + 1) % colors.length;
}
// colourify ()

//setInterval("colourify()", 800);


// EVENT LISTENERS

// eventListener() method attaches an event handler to the specified element
// if the viewport is less than, or equal to, 600 pixels wide, 
// change the background color to pink. If it is greater than 600, change it to aquamarine

var mediaQueryList = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    document.body.style.backgroundColor = 'pink';
  } else {
    /* the viewport is more than than 600 pixels wide */
    document.body.style.backgroundColor = 'aquamarine';
  }
}

// CHOREOGRAPHIC CODING


function stretching () {
  document.querySelector("").style.transform="skew(60deg)"
}

// transform: matrix3d(1, 1, 0, 0, 10, 1, 0, 10, 10, 0, 1, 0, 200, 10, 0, 1);
// filter: grayscale(100%)
// opacity: 0.25;

var currentZoom = 100;

function Breathe (paramvar) {
    currentZoom += paramvar;
    document.body.style.zoom =  currentZoom + "%" 
  }

// Breathe (+100);


function Breathing() {
  var zooming = document.querySelector("body");
  currentScale = 1;
  currenttime = setInterval(function() {
      zooming.style.transform="scale(" + currentScale + ")";
      currentScale = Math.random() * 5
      }, 800); 
} 

function No_Breathing() { 
  clearInterval(currenttime); 
} 


var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
  Texts[0]="choreographies suspend certainty,";
  Texts[1]="choreographies model uncertain outcomes,";
  Texts[2]="choreographies may also refuse to act,";
  Texts[3]="choreographies  valorize failure,";
  Texts[4]="choreographies traject ideas into the action of perception"

// quotes by William Forsythe; 

function New_Sequence_or_Phrasing() {
  document.querySelector('').innerHTML=Texts[count];
  count++;
  if(count==Texts.length){count='0';}
  setTimeout("New_Sequence_or_Phrasing()",delay*100);
}

New_Sequence_or_Phrasing()


function offstage () {
    document.body.innerHTML = '';
    document.head.innerHTML = '';      
}

