// <-----Rule------>
// 1. The value of this is evaluated during the run-Time
// 2. value of this depends from where it is called
// 3. See Note Book

// Type1
// function type1()
// {
//     console.log(this.name);
// }
// var name = "Javascript";
// type1(); //When function is called globally,'this' always point to window object

// Type2
// function type2()
// {
//     console.log(this);
//     console.log(this.lName);
//     console.log(lName);
// }
// var lName = "Tiwari";
// var obj ={
//     lName :"Singh", // We remove lName from obj then console.log(this.lName) -> undefined
//     type2
// }    
// obj.type2(); 

// // Type3
// var food = "Pizza";
// var nObj = {
//     food : "Pasta",
//     eat() {
//         console.log("I like to eat " + this.food);
//     }
// }
// var foo = nObj.eat;
// foo();

// Type4
// var length = 1;
// function square()
// {
//     // console.log(this);
//     let cb = function()
//     {
//         // console.log(this);
//        console.log(this.length * this.length);
//     };
//     setTimeout(cb,2000);
// }
// var obj ={
//     length : 3,
//     square
// };  
// obj.square();


// 5
function Name (fName,lName)
{
    this.firstName = fName;
    this.lastName = lName;
}
var obj = new Name("Sunil","Gavaskar");
console.log(obj);
// JS creates a new object {}
// Js passes the object's reference to the function
// this-> {}
// Obj becomes
// obj = {
//     firstName : "Sunil",
//     lastName : "Gavaskar"
// };

