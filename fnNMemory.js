// IIFE-> immediately invoke function expression
// can't invoke IIFE function outside
(function IIFEE() {
    console.log("I am IFEE");
})();

function fn()
{
    console.log("I am a fn");
}
fn();