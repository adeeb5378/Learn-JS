let cricketer = {
    firstName : "Kapil",
    lastName : "Dev",
    // welcome : function(){
    //     console.log(`Welcome ${this.firstName} ${this.lastName}`);
    // }
};

let cricketer2 = {
    firstName : "Ravi",
    lastName : "Shastri",
};
// function Borrowing -> 
// cricketer.welcome.call(cricketer2);

let welcome =  function(email,mNumber,location){
console.log(`Welcome ${this.firstName} ${this.lastName},
    thank you for signing up! Your email Id is ${email},
    Your registered number is ${mNumber} 
    and Your Location is ${location}`);
}

// Call method 
// Syntax -> function_name.call(obj_to_which_'this'_will_point,arguments)
// welcome.call(cricketer,"kpdev@gmail.com","9999999999","Delhi");
// welcome.call(cricketer2,"raviss@gmail.com","99999994999","Chandigarh");
 
// Apply Method -> Same As Call method 
// but it only take argument as Array
//welcome.apply(cricketer2,["raviS@gmail.com","99999994999","Chandigarh"]);

// Bind Method
//let bindFn = welcome.bind(cricketer,"kpdev@gmail.com","9999999999","Delhi");
//bindFn();

// let user = {
//     firstName : "John"
// };
// function func()
// {
//     console.log(this);
//     console.log(this.firstName);
// }
// let funcUser = func.bind(user);
// user ={
//     a : 10
// };
// funcUser();

// Polyfill for Bind
let car = {
    name : "Thar",
    brand : "Mahindra"
};
let carDescription = function(date,price){
    console.log(`I bought a new ${this.brand} ${this.name} on ${date} for INR ${price}`);
};
//let bindFn = carDescription.bind(car,"22 July","20Lacs");
//bindFn();

// Our Own Polyfill for Bind
Function.prototype.myBind = function(...args){
    let fnObj = this;
    //  console.log(fnObj);
    // console.log(arg);
    let params = args.slice(1);
    return function()
    {
        // fnObj.call(args[0],...params);
        fnObj.apply(args[0],params);
    } 
}
let myBindFn = carDescription.myBind(car,"22 July","20Lacs");
//myBindFn();



