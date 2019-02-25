const sum = (x,y) => {
    return x + y;
}

const multiple = (x,y) => {
    return x * y;
}

const firstItem = array =>{
    if(array && array.length){
        return array[0];
    }
}

const delayedFilterwithCallback = function(array , filter , callback){
    setTimeout(() => {
        callback(array.filter(filter));
    }, 1000);
}

const delayedFilterwithPromise = function(array , filter , callback){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(array.filter(filter));
        }, 1000);
    });
}

module.exports = {
    sum,
    multiple,
    firstItem,
    delayedFilterwithCallback,
    delayedFilterwithPromise
}