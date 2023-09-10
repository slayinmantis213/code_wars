// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that
// should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//mine
function likes(names) {
    var str = "";
    var count = 0;
    len = names.length;
    if (len < 1){
        return "no one likes this";
    }
    if (len === 1){
        return names[0] + " likes this"
    }
    if (len === 2){
        return names[0] + " and " + names[1] + " like this"
    }
    if (len === 3){
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    }
    for(var i = 0; i < len; i ++){
        if(i == 0){
            str += names[i] + ", ";
        }
        else if(i == 1){
            str += names[i];
        }
        else{
            count ++;
        }
    }
    return str + " and " + count + " others like this"
}


console.log(likes([]))


//cw solution

function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}