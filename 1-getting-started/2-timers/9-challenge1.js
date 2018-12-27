_=1
const theOneFunc = delay => {
    console.log('Hello World. ' + delay);
    _++;
    setTimeout(theOneFunc, _*1000, _);
};
setTimeout(theOneFunc, _*1000, _);