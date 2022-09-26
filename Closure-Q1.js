function printArrFN() {
    let arr = [];
    
    //Let gives Output
    // i 0
    // i 1
    // i 2

    // var gives Output
    // i 3
    // i 3
    // i 3
    for (let i = 0; i < 3; i++) {
        
        function printI() {
            console.log("i", i);
        }
        // adding reference to the array
        arr.push(printI);
    }
    return arr;
}

let arrFn = printArrFN();
arrFn[0]();
arrFn[1]();
arrFn[2]();