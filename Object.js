// Empty Object
// var obj = {};
// console.log(obj);

var person = {
    name : "Adeeb",
    age : 24,
    phone : 999999999,
    isMale : true,
    height : "172cm",
    "school name" : "St. John",
    friends : [ "Hozaifa", "Asif","Asad"],
    address :{
        State : "Jharkhand",
        city : "Ranchi",
        country : "India"
    },
    sayHi : function() {
        console.log(`Hello, My name is ${person.name}`);
    }
};

//console.log(person);

// Access using dot notation
//console.log(person.name);

//Access using square bracket notation
//console.log(person["phone"]);
//console.log(person["school name"]);

// console.log(person.friends);
// console.log(person.friends[2]);
// console.log(person.address.city);

// person.sayHi();

// for in loop -> gives key
// for(let key in person)
// {
//     console.log(key);
//     console.log(person[key]);
// }


// Adding a key in Object
person.Fname = "Ejaz";
//console.log(person);
 
// deleting a key from Object
// delete person.height;
// console.log(person);

// Property value shorthand
// var computerBrand = "apple";
// var processor = "M2 Silicon";
// var ram = "16GB";
// var specification = {
//     computerBrand : computerBrand,
//     processor : processor,
//     ram : ram
// }
// Above similar as
// var specification1 = {
//     computerBrand,
//     processor,
//     ram : ram
// }

// console.log(specification1);


// let a = 10;
// let b = a; // Not copy by reference
// // console.log(a);
// b = 15 // value of a not changed
// // console.log(b);
// let user = {
//     name : "John",
//     age : 32
// };


// let admin = user; //Copy by referce
// admin.age = 21; // Value of age changed both in user as well as admin object
// console.log(admin);
// console.log(user);


//Mergeing of object into one
// let x = {name : "John"};
// let permission1 = {canView : true};
// let permission2 = {canEdit : true};
//Object.assign(x,permission1,permission2); // Object are merge in X
// console.log(x);
// console.log(permission1);
// console.log(permission2);

// If the copied property name already exists, it gets overwritten
// Object.assign(x,{name : "Pete"});
// console.log(x);

// Important
// const obj = {
//     name : "John"
// };
// obj.name = "Pete"; // Object decleared as Const can be modified
//console.log(obj);

// Important  
// let user = {
//     name : "Adeeb",
//     age : 24,
//     size : {
//         height : 178,
//         width : 100
//     }
// }
// let clone = {};
// Object.assign(clone,user);
// clone.name = "Rahul"; // Does not change name on user object
// clone.size.width = 200; //change the value of width also in user object 
// // because both nested object shares same address
// console.log(user)
// console.log(clone);


let user = {
    name : "Adeeb",
    age : 24,
    size : {
        height : 178,
        width : 100
    }
}
// Deep Copy
let clone = structuredClone(user);
clone.size.width = 200; //Does not effect the user width 
console.log(user);
console.log(clone);


