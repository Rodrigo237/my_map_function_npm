function myMap(cbFn){
    return function(array){
        array.forEach((element,index)=> {
            result.push(cbFn(element,index))
        })
        return result
    }
}

module.exports = myMap