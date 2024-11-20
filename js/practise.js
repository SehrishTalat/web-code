//show something on browser
//Document Commands 
document.write("Hello World");

//Add HTML Tag in JS
document.write("Hello World<br>");
document.write("<i>Hello World</i>");
document.write("<b>Hello World</b>");


//allert box
alert("Hello WORLD");





/*----------------Tuesday, November 19, 2024--------------*/


//JavaScript Display Possibilities
//Using innerHTML
document.getElementById('para5').innerHTML= 11;

//Using document.write()
document.write(11);

//window alert
window.alert(11);


//js statements
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

//multiple statements on one line are allowed, separated by semicolons
a = 5; b = 6; c = a + b; 

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;


//JavaScript Literals - fixed value
document.getElementById('para_literal').innerHTML = 10;
document.getElementById('para_literal').innerHTML = 'Sehrish';



//keyword use - var
var a, y;
x = 5 + 6;
y = x * 10;
document.getElementById("demo").innerHTML = y;


//declaring and assign value to a variable
let carName = "Volvo";
document.getElementById("para").innerHTML = carName;

//declaring and assigning value
let x;
x = 6;
document.getElementById("demo").innerHTML = x;


//declaring, intializing and use of arithmetic operators
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = "The value of z is: " + z;


//arithemtic operator use
let x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;


//variable overwrite with newest value
var X = "Hello World";				
X = "new value"					

document.write(X);

//expressions
document.getElementById("demo").innerHTML = 5 * 10;

//Expressions can also contain variable values:   x * 10
document.getElementById("demo").innerHTML = x * 10;

document.getElementById("demo").innerHTML = "John" + " "  + "Doe";




/*----------------Wednesday, November 20, 2024--------------*/

//var
var firstname = 'Sehrish'; 
firstname = "Sehrish2";                   // assign again
var firstname = 'sehrish3';               //declare again

document.write(firstname);



//let
let lastname = "Talat";
lastname = "Talat2";                   //assign again
//let lastname = "Talat3"              //not decalre again         

document.write(lastname);



//const
const middlename = "None";
//middlename = 'None';                //not assign again
//const middlename = 'None';          //not declare again

document.write(middlename);



//comparison operatos
var num1 = 10;
let num2 = 20;

console.log(num1 == num2);  
console.log(num1 != num2);   
console.log(num1 === num2);
console.log(num1 !== num2);         
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);



//if - else if - else statement
var class_time = 12;

if(class_time == 11)
{
    document.write("Class Start !");
}
else if(class_time >= 11 || class_time <=1 )
{
    document.write('Class Continue... ');
}
else
{
    document.write('class end!');
}



//prompt
prompt("Hello world");

var demo = prompt("Hello world");
alert(demo);
document.write(demo);


//prompt use in statement
var class_time = prompt("Enter time when you entered in class");
alert(class_time);


if(class_time == 11)
{
    document.write("Class Start !");
}
else if(class_time >= 11 || class_time <=1 )
{
    document.write('Class Continue... ');
}
else
{
    document.write('class end!');
}



