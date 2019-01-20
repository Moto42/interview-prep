function doesRepeat(str){
  const arr = str.split('');
  let   doesRepeat = false;
  arr.forEach((value, index) => {
    if(value === arr[index+1]) doesRepeat = true;
  });
  return doesRepeat
}
//swap position of any two  character in a string, and return the result
function swapCharacters(str, c1, c2){
  const arr = str.split('');
  const arrSwapped = swapElements(arr, c1, c2);
  const newString = arrSwapped.join('');
  return newString;
}

function swapElements(arr, e1, e2){
  let  workArr = [...arr];
  workArr[e1] = arr[e2];
  workArr[e2] = arr[e1];
  return workArr;
}

function swapAllFolowing(str, char){
  let output = [];
  for(let i = char; i < str.length; i++){
    output.push( swapCharacters(str, char, i) );
  }
  return output;
}

function swapInSequence(str){
  let output = [];
  for(let c = 0; c < str.length; c++){
    output = output.concat( swapAllFolowing(str,c) );
  }
  return output;
}

function permAlone(str) {
  const permutations = swapInSequence(str);
  return permutations.filter(e=>!doesRepeat(e)).length;
}

function permuteAllFolowing(str,c1){
  
}

const str = 'aab';
console.log('permutations',swapInSequence(str))
console.log('nonRepeaters', permAlone(str) );



/*

per

*/