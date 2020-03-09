function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(str) {
    let arr;
    if(typeof str === 'string'){
     arr = tostring(str);
    } else arr = str
      let n = 0;
      let m = 0;
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === '('){
        n += 1;
      }
      if(arr[i] === ')'){
        m += 1;
      }
    }
    
}

module.exports = {
    expressionCalculator
}
