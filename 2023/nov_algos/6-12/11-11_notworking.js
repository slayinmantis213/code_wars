// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words,
// in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.
const testWords = "In a village of La Mancha, the name of which I have no desire to call to \
mind, there lived not long since one of those gentlemen that keep a lance \
in the lance-rack, an old buckler, a lean hack, and a greyhound for \
coursing. An olla of rather more beef than mutton, a salad on most \
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra \
on Sundays, made away with three-quarters of his income."


function topThreeWords(text) {
    let words = text.toLowerCase().split(/[ .,]+/);
    // console.log(words);
    let wordMap = {};
    for(let i = 0; i < words.length; i++){
        console.log(wordMap);
        if(words[i] == ''){
            continue;
        }
        else if(wordMap.hasOwnProperty(words[i])){
            wordMap[words[i]] += 1;
        }
        else{
            wordMap[words[i]] = 1;
        }
    }

    let values = Object.values(wordMap).sort((a, b) => b - a)
    values = values.slice(0,3);
    // console.log(values, "sliced")
    let min = values[2];
    wordMap = Object.entries(wordMap).reduce((o, [k, v]) => v >= min ? { ...o, [k]: v } : o, {});
    const result = [];
    for(let j = 0; j < values.length; j++){
        let newVal = Object.keys(wordMap).find(key => wordMap[key] === values[j])
        if(newVal == undefined){
            return [];
        }
        result.push(newVal)
    }

    return result;
}   

console.log(topThreeWords("              "));