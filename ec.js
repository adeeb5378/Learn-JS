//Whenever a code is executed, you will get a 'global' object and a 'this' object
//console.log(global);
//console.log(this);

//Every code in javascript is executed in a bubble known as 'Execution Context'.
//It Contains three portions ->
//1. Global Object
//2. This Object
//3. Own Code

//When Execution Context created?
//When a function is called,then execution context made.

//When the code is not inside any function, is in global area
//for that global execution context is created is called Default Execution Context.

//First memory is allocated then run
// console.log("a",a);
// var a;
// fn();
// function fn()
// {
//     console.log("I am a Function");
// }


//If function is re-defined then its overwritten
// fn();
// function fn()
// {
//     console.log("I am real");
// }
// function fn()
// {
//     console.log("No I am Real");
// }
// function fn()
// {
//     console.log("No I am Real also");
// }
// fn();


//Execusion context is always created when a function is invoked.
// console.log("45",a);
var a = 10;
console.log("47",a);
function fn()
{
    console.log("50",a);
    var a = 20;
    console.log("52",a);
} 
console.log("54",a);
fn();
console.log("56",a);


// var a = 10;
// function b()
// {
//     //When a function doesn't have a variable then it will look outside the function defination.
//     //Known as Lexical Scope
//     console.log("62",a);
// }
// function c()
// {
//     var a = 20;
//     console.log("68",a);
//     b();
//     console.log("70",a);
// }
// console.log("72",a);
// c();
// console.log("74",a);