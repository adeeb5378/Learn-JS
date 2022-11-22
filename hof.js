let arr = [2,5,7,12];
// 1.Calculate the area of square where side is arr element
// expexted o/p -> [4,25,49,144]
// function area(arr)
// {
//     let ans=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         ans[i] = arr[i]*arr[i];
//     }
//     return ans;
// }

// let ans = area(arr);
// console.log(ans);

// // 2.Calculate the perimeter of square where side is arr element
// // expected -> [8,20,28,48]
// function perimeter(arr)
// {
//     let ans=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         ans[i] = 4*arr[i];
//     }
//     return ans;
// }
// let ans2 = perimeter(arr);
// console.log(ans2);

// // 3.Calculate the diagonal of square where side is arr element
// // expected -> [2.8284271247461903,7.0710678118654755,9.899494936611665,16.9705627484771435]
// function daigonal(arr)
// {
//     let ans=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         ans[i] = Math.sqrt(2) * arr[i];
//     }
//     return ans;
// }
// let ans3 = daigonal(arr);
// console.log(ans3);
 
// Above code can be write as below 
// functional programming
// let area = function(side)
// {
//     return side*side;
// }
// let perimeter = function(side)
// {
//     return 4*side;
// }
// let diagonal = function(side)
// {
//     return Math.sqrt(2) * side;
// }
// let Calculate = function(arr,logic)
// {
//     let res = [];
//     for(let i=0;i<arr.length;i++)
//     {
//         res.push(logic(arr[i]));
//     }
//     return res;
// }
// console.log(Calculate(arr,area));
// console.log(Calculate(arr,perimeter));
// console.log(Calculate(arr,diagonal));

// map
// var areaOfSquare  = arr.map((num) =>{
//     return num * num;
// });  
// console.log(areaOfSquare);
// function findArea(num)
// {
//     return num * num;
// }
// var areaOfSquare = arr.map(findArea);
// console.log(areaOfSquare);


// implementation map
// var areaOfSquare = arr.map(area);
// Calculate(arr,logic);
// arr.map(logic);
// // this is what we required
// arr.Calculate(logic);
// console.log(areaOfSquare);

// Attach Calculate function to array
// Array.prototype.Calculate = function(logic){
//     let res=[];
//     for(let i=0;i<this.length;i++)
//     {
//          res.push(logic(this[i]));
//     }
//     return res;
// }

let nArr = [2,5,7,12];
// var ans = nArr.Calculate(area);
//console.log(ans);

// Build own push function to push the element int the array
// Polyfill - A polyfill is a piece of code used to provide
// modern functionality on older browsers that do not natively support it.
// Array.prototype.myPush = function(num)
// {
//     let len = this.length;
//     this[len] = num;
//     return this;
// }
// nArr.myPush(45);
// console.log(nArr);

// Filter
// function greaterThanFour(num)
// {
//     if(num > 4)
//     {
//         return num;
//     }
// } 
// let ans2 = nArr.filter(greaterThanFour);
// console.log(ans2);

// // Reduce
// let arr1 = [1,2,3,4,5];
// function sumOfArr(accumulator,current)
// {
//     accumulator = accumulator + current;
//     return accumulator;
// }
// let ans3 = arr1.reduce(sumOfArr);
// // We can also pass accumulator initial value
// ans3 = arr1.reduce(sumOfArr,0);
// console.log(ans3);

// // Return largest value
// let arr2 = [10,-5,6,28];
// function findLargest(largest,current)
// {
//     largest = (largest > current) ? largest : current;
//     return largest;
// }
// let ans4 = arr2.reduce(findLargest);
// // We can also pass accumulator initial value
// let ans5 = arr2.reduce(findLargest,-Infinity);
// console.log(ans5);
// console.log(ans4);

// // Interview Question
const worldCapitals = [
    {
        country : "India",
        capital : "Delhi",
        population : "2cr"
    },
    {
        country : "America",
        capital : "Washington DC",
        population : "6cr"
    },
    {
        country : "France",
        capital : "Paris",
        population : "2cr"
    },
    {
        country : "England",
        capital : "London",
        population : "2cr"
    },
    {
        country : "Germany",
        capital : "Berlin",
        population : "4cr"
    }
];
// // Q1. Print Countryname and capital -> 
// // [India->Delhi,France->Paris,England->London....]
// function countryAndCapital(current)
// {
//     return current.country + " -> " + current.capital;
// }
// let q1Ans = worldCapitals.map(countryAndCapital);
// console.log(q1Ans);

// // Q2. Return the number of country with particular population ->{2cr:3,4cr:1,6cr:1}
// function getCountryPopulation(acc,cur)
// {
//     if(acc[cur.population])
//     {
//         acc[cur.population] = acc[cur.population] + 1;
//     }
//     else
//     {
//         acc[cur.population] = 1;
//     }
//     return acc;
// }
// let q2Ans = worldCapitals.reduce(getCountryPopulation,{});
// // console.log(q2Ans);

// // Q3. get countryname with population less than 5cr -> [India,france,England,Germany]
// function populationLessThan5cr(cur)
// {
//     if(cur.population < "5cr")
//     {
//         return cur.country;
//     }
// }
// let q3Ans = worldCapitals.filter(populationLessThan5cr);
// let q3Answer = q3Ans.map((obj)=>{
//     return obj.country;
// })
// //console.log(q3Answer);
// // Using Reduce
// function populationLessThanFive(acc,cur)
// {
//     if(cur.population <= "5cr")
//     {
//         acc.push(cur.country);
//     }
//     return acc;
// }
// let q3NewAns = worldCapitals.reduce(populationLessThanFive,[]);
// console.log(q3NewAns);



