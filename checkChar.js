// var strings = 'this iS a TeSt 523 Now!';
// var i=0;
// var character='';
// while (i <= strings.length){
//     character = strings.charAt(i);
//     if (!isNaN(character * 1)){
//         console.log('character is numeric');
//     }else{
//         if (character == character.toUpperCase()) {
//             console.log ('upper case true');
//         }
//         if (character == character.toLowerCase()){
//             console.log ('lower case true');
//         }
//     }
//     i++;
// }

function solution(s) {
  var c = s[0];
  // var c = s.charAt(0);
  if (c >= '0' && c <= '9'){
    return 'digit'
  } else if (c == c.toUpperCase()) {
    return 'upper';
  } else if (c == c.toLowerCase()){
    return 'lower';
  } else {
    return 'other' 
  }
}

var str = solution('9')
console.log(str)