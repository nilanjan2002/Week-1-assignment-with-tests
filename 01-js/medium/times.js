/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/


function calculateTime(n) {
    let sum = 0;
    const timeInit = performance.now();
    for(let  i=1; i<=n; i++){
	sum += i;
    }
    const timeFinal = performance.now();
    return (timeFinal-timeInit);
}


function print(){
    
    console.log('Milliseconds:',calculateTime(100));
    console.log(calculateTime('Milliseconds',100000));
    console.log(calculateTime('Milliseconds',1000000000))
}

print();
