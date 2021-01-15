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
  if (c == c.toUpperCase() && !(c >= '0' && c <= '9') &&(c >='A' && c <= 'Z')) {
    return 'upper';
  } else if (c == c.toLowerCase() && !(c >= '0' && c <= '9') &&(c >='a' && c <= 'z')){
    return 'lower';
  } else if (c >= '0' && c <= '9'){
    return 'digit'
  } else {
    return 'other' 
  }
}
var str1= (solution('A')) // upper
var str2 = solution('b') // lower
var str3 = solution('1') // digit
var str4 = solution('_') // other
console.log(`${str1} ${str2} ${str3} ${str4}`)

