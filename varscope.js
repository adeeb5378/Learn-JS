//Scope of var variable

//Var variable -> re-assignable and re-declearable
//In var for var variable memory allocation is only done once per execution context or when a function is called, var is function scope

//Also works fine
// console.log("6",a);
// var a = 20;
// a = 30;
// console.log("8",a);

var a = 10;
function fn(){
    var a = 20;
    console.log("15 -> ",a);
    a++;
    if(true)
    {
        var a = 30;
        a++;
        console.log("21 -> ",a);
    }
    a++;
    console.log("24 -> ",a);
}
console.log("26 -> ",a);
fn();
console.log("28 -> ",a);
