// re-assign,but can't re-declare

//Give Error -> a is not defined ,because let and const are defined inside script scope,
// Script scope don't allow to use let const variable without initializing
// console.log("3",a);
// let a = 20;
// a = 30;
// console.log("5",a);

// console.log(a);
// var a = 10;

// alert("Hello There");
// let age = prompt("Enter your age",24); //Title,default value
// alert(`Age = ${age}`);


//Scope -> Block
// Between two curly braces
// let a = 10;
// function fn(){
//     let a = 20;
//     console.log("15 -> ",a);
//     a++;
//     if(true)
//     {
//         let a = 30;
//         a++;
//         console.log("21 -> ",a);
//     }
//     a++;
//     console.log("24 -> ",a);
// }
// console.log("26 -> ",a);
// fn();
// console.log("28 -> ",a);

// In Case of Var
// var a = 10;
// function fn(){
//     var a = 20;
//     console.log("15 -> ",a);
//     a++;
//     if(true)
//     {
//         var a = 30;
//         a++;
//         console.log("21 -> ",a);
//     }
//     a++;
//     console.log("24 -> ",a);
// }
// console.log("26 -> ",a);
// fn();
// console.log("28 -> ",a);


// Other example
// let fruit = "Orange";
// console.log("30",fruit);
// {
//     let fruit = "Apple";
//     console.log("33",fruit);
//     {
//         console.log("35",fruit);
//     }
// }
// console.log("38",fruit);

// In case of var
// var fruit = "Orange";
// console.log("30",fruit);
// {
//     var fruit = "Apple";
//     console.log("33",fruit);
//     {
//         console.log("35",fruit);
//     }
// }
// console.log("38",fruit);

// let is Block scope
// Memory allocation for let variable is done when the block is encountered
// If no variable associated is not present in a block then it will see variable outside that block

// Error -> Cannot access 'a' before initialization, Similar to C++/Java -> Temporal Dead Zone
// console.log(a);
// let a = 10;


// let vs var
// function a()
// {
//     for(var i = 1;i<=5;i++)
//     {
//         console.log(i);
//     }
// }
// a();
