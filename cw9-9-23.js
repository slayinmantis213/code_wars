// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid
// decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
    var arr = [r, g, b]
    for(var i = 0; i < 3; i++){
        if(arr[i] > 255){
            arr[i] = 255;
        }
        if(arr[i] < 0){
            arr[i] = 0;
        }
        arr[i] = arr[i].toString(16);
        if(arr[i].length == 1){
            arr[i] = '0' + arr[i]
        }
    }
    return (arr[0] + arr[1] + arr[2]).toUpperCase()
    
}

console.log(rgb(-5,20,1000))


/*
A string is considered to be in title case if each word in the string is capitalized, unless
the word is an exception such as 'an', 'of', 'the', etc.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. Your function should ignore the 
case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
*/

function title(str, exc){
    newStr = [];
    exc = exc.toLowerCase().split(' ');
    str = str.toLowerCase().split(' ');
    for(var i = 0; i < str.length; i++){
        if (exc.includes(str[i]) && i != 0){
            newStr.push(str[i])
        }
        else{
            var temp = '';
            for(var j = 0; j < str[i].length; j++){
                if(j == 0){
                    temp += str[i][j].toUpperCase();
                }else{
                    temp += str[i][j];
                }
            }
            newStr.push(temp)
        }
        
    }
    return newStr.join(' ')
}
console.log(title('the night of the ninjas', 'A tO tHE of'))