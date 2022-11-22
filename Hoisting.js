//console.log(a); //Undefined 
//var a = 10;

// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a = 10;


// console.log(a);
// fun();
// var a = 10;
// function fun()
// {
//     console.log("Hello");
// }
// console.log(a);
// Output -> 
// undefined
// Hello
// 10

// var a = 10;
// var b = "10";
// console.log(a==b);
// console.log(a===b);

// console.log(greet); 
// var greet = function () {
//     console.log("hello"); 
// }
// greet();


// Temporal Dead Zone
// console.log(a);
// let a = 10;
// console.log(b);
// var b = 100;
// console.log(x);


// let a = 10; //Lexical enviroment = local memeory + Lexical enviroment of parent
// function fun()
// {
//     console.log("44 -> " + a);
// }
// fun();


// Output Questions
// Q1
// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;

//     console.log("56-> " + a); 
//     console.log("57-> + b); 
//     console.log("57-> " + c); 
// }
// console.log(a); 
// console.log(b); 
// console.log(c); 

// Q2
// function fun()
// {
//     if(true)
//     {
//         let a = 10;
//         var f = 20;
//     }
//     console.log("72-> " + f); 
//     console.log("73-> "+a);
// }
// fun();

// Q3
// var a = 20;
// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;
    
//     console.log("84-> "+ a);
//     console.log("85-> "+ b); 
//     console.log("86-> " + c); 
// }
// console.log("88-> "+ a); 
// console.log("89-> "+ b);
// console.log("90-> "+ c); 

// Q4
// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;
    
//     console.log("98-> "+ a); 
//     console.log("99-> " + b); 
//     console.log("100-> " + c); 
// }
// var a = 20;
// console.log("103-> " + a); 
// console.log("104-> " + b); 
// console.log("105-> " + c); 

//  Q5
// var a = 20;
// function fun()
// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;
   
//     console.log("115-> " + a); 
//     console.log("116-> " + b); 
//     console.log("117-> " + c); 
// }
// fun();
// console.log("120-> " + a); 
// console.log("121-> " + b); 
// console.log("122-> " + c); 

// Q6
// let b = 45;
// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;
   
//     console.log("131-> " + a); 
//     console.log("132-> " + b); 
//     console.log("133-> " + c); 
// }
// console.log("135-> " + a); 
// console.log("136-> " + b); 
// console.log("137-> " + c); 
 