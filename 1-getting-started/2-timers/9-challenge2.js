 const theOneFunc = delay => {
    b=0;
    f = setInterval(
        () => {
            console.log('Hello World ' + delay*100);
            b++;
            if (b >= 5) {
                clearInterval(f)
                theOneFunc(delay+1);
            }
        },delay*100
    )
};
theOneFunc(1);