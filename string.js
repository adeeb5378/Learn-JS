// 1. Double Quotes
// var s = "Hello,\nto batch FJP-9"; // \n for next line
//console.log(s);

// 2. Single Quotes
// var str ='Hello World';
// console.log(str);

// var name = "Adeeb";
// 3. Backtick
// console.log(`Hello  ${name}`);
//console.log(`Bring me ${1+2} glass of water`);

// alert("6" / "2"); // String is converted to number

// let s = "Interface";
// alert(s.toLowerCase());
// alert(s.toUpperCase());
// alert(s[3].toUpperCase());

// let s = `Hello\n I am John`;
// console.log(s);

// indexOf
// let s = "Hello 123 World 123";
// alert(s.indexOf("123"));
// alert(s.indexOf("123",7));
// alert(s.indexOf("5"));

// To find all occurence
// let pos = 0;
// let target = "123";
// while(true)
// {
//     let foundPos = s.indexOf(target,pos);
//     if(foundPos == -1)
//     {
//         break;
//     }
//     console.log(foundPos);
//     pos = foundPos + 1;
// }

// lastIndexOf 
// let s = "Hello 123 World 123";
// console.log(s.lastIndexOf("123"));
// console.log(s.lastIndexOf("123",15));


// includes ->return true/false depending on whether string contains substring within
// let s = "Hello 123 World 123";
// alert(s.includes("123"));

// starsWith
// let s = "Hello 123 World 123";
// alert(s.startsWith("h")); //false
// alert(s.startsWith("H")); //true

// endsWith
// let s = "Hello 123 World 123";
// alert(s.endsWith("123")); //true
// alert(s.endsWith("12")); //false

// Repeat the string
// let s = " Hello 123 World 123 ";
// let repeatedStr = s.repeat(3);
// console.log(s);
// console.log(repeatedStr);

// let s = "HelloWorld";
// alert(s.slice(3,6)); //start including and end excluding
// alert(s.slice(6)); //end till last character
// let str = "stringify";
// alert(str.slice(-1)); //y
// alert(str.slice(-4,-1)); //gify
// alert(str.slice(-4)); //gify


// alert(s.substring(3,6)); //start including and end excluding
// alert(s.substring(6));   //end till last character

// slice vs substring
// let str = "stringify";
// alert(str.substring(2,6)); // ring
// alert(str.substring(6,2)); // ring
// alert(str.slice(2,6)); // ring
// alert(str.slice(6,2)); // ""

// substr
// let str = "stringify";
// alert(str.substr(0,3)); //start,length
// alert(str.substr(-4,2)); //gi

// alert('A'.codePointAt(0)); //65
// alert(String.fromCodePoint(66)); //B


// Trim
// let s = "     Hello      World    ";
// let str = s.trim(); 
// console.log(s);
// console.log(s.length);
// console.log(str);
// console.log(str.length);

// Split
// let s = "Hello, I , am , Adeeb";
// let x = s.split(",");
// console.log(s);
// console.log(x);







