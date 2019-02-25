'use strict'

function generate(lengthArray){
  var array = [];
  array[i] = obj;
  for(var i = 0; i < lengthArray.length; i++){
    if(i == 1){
      var a = lengthArray[i];
      var array_1 = [];
      for(var j = 0; j < a; j++){
        array_1[j] = j;
      }
      var obj = { input: array_1, target: n + 1, output: -1}
      array[i] = obj;
    }
    else{
      var a = lengthArray[i];
      var array_1 = [];
      for(var j = 0; j < a; j++){
        array_1[j] = j;
      }

      var obj = {input: array_1, target: n - 1, output: n - 1}
      array[i] = obj;
    }
  }
  return array;
}


module.exports = generate
