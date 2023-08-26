var word1 = ["hello", "world", "this", "is", "great"]
var word2 = [];
var word3 = ["make", "my", "day"]

// mine 
function smash(words) {
    var str = "";
    for (var i = 0; i < words.length; i++) {
        if (i == words.length - 1) {
            str += words[i];
        }
        else {
            str += words[i] + " ";
        }
    }
    return str
};

console.log(smash(word3));

// best 
function smash(words) {
    return words.join(' ')
}


// mine 
function repeatStr(n, s) {
    var str = '';
    for (var i = 0; i < n; i++) {
        str += s;
    }
    return '';
}

// best 
function repeatStr(n, s) {
    return s.repeat(n);
}


var name1 = "Sam Harris";
var name2 = "Patrick Feenan";
var name3 = "Evan Cole"
var name4 = "P Favuzzi";
var name5 ="David Mendieta";
var name6 = 'sdfSsdfgSDF sdflsdfFSDF'

// mine
function abbrevName(name){
    var arr = name.toUpperCase();
    arr = arr.split(' ')
    
    return arr[0][0] + '.' + arr [1][0];
}
console.log(abbrevName(name6))

// best 
function abbrevName(name){
    var arr = name.split(' ');
    return (arr[0][0] + '.' + arr [1][0]).toUpperCase();
}
console.log(abbrevName(name6))