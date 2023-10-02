

// This works but codewars kata disallowed BigInt()
// function add(a, b) {
//     const x = BigInt(a) + BigInt(b);
//     return x.toString()
// }


//https://stackoverflow.com/questions/41952655/how-to-add-two-big-numbers-in-javascript
function add(a, b) {
    let sum = '';
    let long, short;
    let tens = 0;
    //finding max length between given strings
    if (a.length >= b.length) {
        long = a;
        short = b;
    }
    else {
        long = b;
        short = a;
    };
    //adding strings
    let j = short.length; //tracking index on short
    for (let i = long.length; i > 0; i--) { //tracking index on long
        let t = ((j > 0) ? parseInt(short.charAt(j - 1)) : 0) + parseInt(long.charAt(i - 1)) + tens; //adding the two indexes and ten's place from previous iteration. short is checked prevent tracking outside string
        sum = (t % 10) + sum;   //adding total into sum pt1(first part of "carrying" a number. if number is greater than 10, this line adds the one's place value to sum)
        tens = t < 10 ? 0 : Math.floor(t / 10); //find ten's place number from t sum to carry to next loop
        j = j - 1;  //decrement loop through short
    };
    if (tens > 0) { sum = tens + sum };
    return sum;
};
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "expected:", "91002328220491911630239667963")


function alphanumeric(string) {
    if (string == "" || string == " "){
        return false;
    }
    for (let i = 0; i < string.length; i++) {
        if(string[i] == '_'){
            return false
        }
        if(string[i] == ' '){
            return false
        }
        if(string[i] == '!'){
            return false
        }
        if(string[i] == '^'){
            return false
        }
        if(string[i] == '@'){
            return false
        }
        if(string[i] == '*'){
            return false
        }
        if(string[i] == '&'){
            return false
        }
        if(string[i] == '*'){
            return false
        }
        if(string[i] == '='){
            return false
        }
        if(string[i] == '?'){
            return false
        }
        if(string[i] == '/'){
            return false
        }
        if(string[i] == '|'){
            return false
        }
        if(string[i] == "("){
            return false
        }
        if(string[i] == ')'){
            return false
        }
        if(string[i] == '.'){
            return false
        }
        if(string[i] == '>'){
            return false
        }
        if(string[i] == '<'){
            return false
        }
        if(string[i] == ';'){
            return false
        }
        if(string[i] == ':'){
            return false
        }
        if(string[i] == '#'){
            return false
        }
        if(string[i] == '$'){
            return false
        }
        if(string[i] == '%'){
            return false
        }
    }
    return true
}

console.log(alphanumeric("Mazinkaiser"),"expected", true)
console.log(alphanumeric("hello world_"),"expected", false)
console.log(alphanumeric("PassW0rd"),"expected", true)
console.log(alphanumeric("     "),"expected", false)

