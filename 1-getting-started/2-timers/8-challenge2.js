// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
var count=0;
var b = setInterval(
    () => {
        console.log('Hello World');
        count++;
        if (count >= 5) {
            clearInterval(b)
            console.log("Done")
        }
        },
    1000
);
