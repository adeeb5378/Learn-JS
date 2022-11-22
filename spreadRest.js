// Spread Operator
let num = [1,2,3,4];
let newNum = [...num,5,6,7,8,...num];
// console.log(num);
// console.log(newNum);

const user = {
    name :"Hardik",
    age : 20,
    residence : {
        city : "New Delhi",
        state : "Delhi"
    }
};
const newUser = {...user,age : 23,hobby : "Music"}; //Copy user to newUser, and override if anything is already present
// console.log(user);
// console.log(newUser);
// user.residence.state = "Maharastra";
// console.log(user);
// console.log(newUser);


// Rest Operator
function fun(...args)
{
    // console.log(arr); 
    args.forEach(arg =>console.log(arg))  
}
fun("hello","how","are",1,2,3,4,5);