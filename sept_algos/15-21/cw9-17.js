// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    var str = '(';
    for(var i = 0; i < 10; i++){
        var num = numbers[i];
        if(i == 2){
            str += num + ') ';
        }
        else if(i == 5){
            str += num + '-';
        }
        else{
            str += num;
        }
    }
    return str;
}

