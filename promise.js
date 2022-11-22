console.log("Before");
setTimeout(function cb()
{
    console.log("timer");
},5000);
//promise
fetch("https://api.netflix.com")
.then(function cb()
    {
        console.log("yolo");
    });
console.log("after"); 
