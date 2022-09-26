// function getFirstName(firstName) {
//     console.log("firstName", firstName);
//     return function getLastName(lastName) {
//         console.log("lastName", lastName);
//         return function printFullName() {
//             console.log("My Name is ", firstName, lastName);
//         }
//     }
// }
// let getLastName = getFirstName("Jasbir");
// console.log("get firstName stack hat gya hai")
// let printFullName = getLastName("Singh");
// console.log("getLastName stack hat gya hai")
// printFullName();


// What is a closure ?? -> closure is a feature of javascript 
// which enables the access of variable that are declared 
// outside the current function even if 
// the outer function is removed from the stack

// Closure is attached with inner function


// Abhishek
// Function along with its lexical 
// Scope forms a closure.
// Closure gives us access to an outer function's scope.

// In function we can also return a function
// function outer()
// {
//     var a = 7;
//     function inner()
//     {
//         console.log(a);
//     }
//     return inner; // Function along with its lexical scope is returned
// }
// var x = outer();
// console.log(x);
// console.log(x());

// function outer()
// {
//     var a = 7;
//     function inner()
//     {
//         console.log(a);
//     }
//     a = 100;
//     return inner;
// }
// var x = outer();
// x(); //100

function z()
{
    var b = 900;
    function x()
    {
        var a = 7;
        function y()
        {
            console.log(a,b);
        }
        y();
    }
    x();
}
z(); // 7 900