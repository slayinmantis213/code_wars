/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/




var str1 = "Y(3(p)p(3)r)s";
var expected1 = true;

var str2 = "N(0(p)3";
var expected2 = false;
// Explanation: not every parenthesis is closed.

var str3 = "N(0)t ) 0(k";
var expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

var str4 = "a(b))(c";
var expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    var stack = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] == '('){
            stack.push(str[i]);
        }
        if(str[i] == ')' && stack.length > 0){
            stack.pop()
        }
        else if(str[i] == ')' && stack.length == 0){
            return false;
        }
    }
    if(stack.length > 0){
        return false;
    }else{
        return true;
    }
}

    console.log(parensValid(str3))
/*****************************************************************************/


/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

var str4 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// var expected1 = true;

var str5 = "D(i{a}l[ t]o)n{e";
// var expected2 = false;

var str6 = "A(1)s[O (n]0{t) 0}k";
// var expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var stackP = []; //parenth
    var stackC = []; //brackets
    var stackD = []; //curlies
    for(var i = 0; i < str.length; i++){
        if(str[i] == '('){
            stackP.push(str[i]);
        }
        if(str[i] == '['){
            stackC.push(str[i]);
        }
        if(str[i] == '{'){
            stackD.push(str[i]);
        }
        if(str[i] == ')' && stackP.length > 0){
            stackP.pop()
        }
        else if(str[i] == ')' && stackP.length == 0){
            return false;
        }
        if(str[i] == ']' && stackC.length > 0){
            stackC.pop()
        }
        else if(str[i] == ']' && stackC.length == 0){
            return false;
        }
        if(str[i] == '}' && stackD.length > 0){
            stackD.pop()
        }
        else if(str[i] == '}' && stackD.length == 0){
            return false;
        }
    }
    if(stackP.length > 0 || stackC.length > 0 || stackD.length > 0){
        return false;
    }else{
        return true;
    }
}

    console.log(bracesValid(str5))
/*****************************************************************************/