// re-assign,but can't re-declare

//Give Error -> a is not defined
// console.log("3",a);
// let a = 20;
// a = 30;
// console.log("5",a);


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

// let is Block scope
// Memory allocation for let variable is done when the block is encountered
// If no variable associated is not present in a block then it will see variable outside that block

// Error -> Cannot access 'a' before initialization, Similar to C++/Java -> Temporal Dead Zone
// console.log(a);
// let a = 10;


// let vs var
function a()
{
    for(let i = 1;i<=5;i++)
    {
        console.log(i);
    }
}
a();
