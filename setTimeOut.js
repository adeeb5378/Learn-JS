// function a()
// {
//     var b = 10; 
//     setTimeout(function (){
//         console.log(b);
//     },3000); //Callback the function after 3 seconds
//     console.log("Hello");
// };
// a();

// Interview Questions
// Q1
// Print number from 1 to 5 with a second gap in each number
// function a()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         },1000*i);
//     }
// }
// a();
// 1
// 2
// 3
// 4
// 5
//Same As Above Code
// function a()
// {
//     for(var i=1;i<=5;i++)
//     {
//         function wrapper(b)
//         {
//             setTimeout(function(){
//                 console.log(b);
//             },1000*b);
//         }
//         wrapper(i);
//     }
// }
// a();


// Output
// function a()
// {
//     for(var i=1;i<=5;i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         },1000*i);
//     }
// }
// a();
// 6
// 6
// 6
// 6
// 6

