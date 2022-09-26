//console.log(a); //Undefined 
//var a = 10;


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


// Output Questions
// Q1
// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;

//     console.log(a); // 10
//     console.log(b); // 100
//     console.log(c); // 1000
// }
// console.log(a); // 10
// console.log(b); // Error
// console.log(c); // Error

// Q2
// function fun()
// {
//     if(true)
//     {
//         let a = 10;
//         var f = 20;
//     }
//     console.log(f); // 20
//     console.log(a); // Error
// }
// fun();

// Q3
// var a = 20;
// {
//      var a = 10;
//     let b = 100;
//     const c = 1000;
    
//     console.log(a); // 10
//     console.log(b); // 100
//     console.log(c); // 1000
// }
//     console.log(a); // 10
//     console.log(b); // Error
//     console.log(c); // Error

// Q4
// {
//      var a = 10;
//     let b = 100;
//     const c = 1000;
    
//     console.log(a); // 10
//     console.log(b); // 100
//     console.log(c); // 1000
// }
// var a = 20;
// console.log(a); // 20
// console.log(b); // Error
// console.log(c); // Error

//  Q5
// var a = 20;
// function fun()
// {
//     var a = 10;
//    let b = 100;
//    const c = 1000;
   
//    console.log(a); // 10
//    console.log(b); // 100
//    console.log(c); // 1000
// }
// fun();
// console.log(a); // 20
// console.log(b); // Error
// console.log(c); // Error

// Q6
// let b = 45;
// {
//     var a = 10;
//    let b = 100;
//    const c = 1000;
   
//    console.log(a); // 10
//    console.log(b); // 100
//    console.log(c); // 1000
// }
// console.log(a); // 20
// console.log(b); // 45
// console.log(c); // Error

 