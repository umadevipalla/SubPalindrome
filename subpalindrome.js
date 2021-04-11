function combinator (s) {
   list_of_strings = new Array();
   for(i=0;i<s.length;i++) {
       for(j=i+1;j<s.length+1;j++) {
           list_of_strings.push(s.slice(i, j));
       }
   }
   return list_of_strings;
}
function palindrome(s) {
    // Write your code here
  var getAllCombinations = combinator(s);
  console.log(getAllCombinations);
  var duplicateArray = [];
  for (i=0;i< getAllCombinations.length; i++) {
  	if (!duplicateArray.includes(getAllCombinations[i])) {
    	duplicateArray.push(getAllCombinations[i]);
    }
  }
  console.log(duplicateArray);
  var count = 0;
  for (c = 0 ; c< duplicateArray.length; c++) {
  	var pal = isPalindrome(duplicateArray[c]);
    if(pal) {
    	count ++;
    }
  }
  return count;
}
function isPalindrome(x) {
  return x == x.split('').reverse().join('') ? true : false;
}
palindrome('aabaa');
document.write('number of sub palindromes ',palindrome('aabaa'));