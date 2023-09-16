
// mine 
function solution(number) {
    var str = '';
    while (number > 0) {
        if (number >= 1000) {
            str += 'M';
            number -= 1000;
        }
        else if (number >= 900) {
            str += 'CM';
            number -= 900;
        }
        else if (number >= 500) {
            str += 'D';
            number -= 500;
        }
        else if (number >= 400) {
            str += 'CD';
            number -= 400;
        }
        else if (number >= 100) {
            str += 'C';
            number -= 100;
        }
        else if (number >= 90) {
            str += 'XC';
            number -= 90;
        }
        else if (number >= 50) {
            str += 'L';
            number -= 50;
        }
        else if (number >= 40) {
            str += 'XL';
            number -= 40;
        }
        else if (number >= 10) {
            str += 'X';
            number -= 10;
        }
        else if (number >= 9) {
            str += 'IX';
            number -= 9;
        }
        else if (number >= 5) {
            str += 'V';
            number -= 5;
        }
        else if (number >= 4) {
            str += 'IV';
            number -= 4;
        }
        else if (number >= 1) {
            str += 'I';
            number -= 1;
        }
    }
    return str
}

console.log(solution(3))

// solution

function solution(number) {
    // convert the number to a roman numeral
    var roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

    var ans = '';
    while (number > 0) {
        for (a in roman) {
            if (roman[a] <= number) { ans += a; number -= roman[a]; break; }

        }
    }
    return ans;
}