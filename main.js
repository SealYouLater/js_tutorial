let Phrase = require("mseal-palindrome");

let string = prompt("please enter a string for palindrome testing");

let phrase= new Phrase(string);

if (phrase.palindrome()){
    alert(`"${phrase.content}" is a palindrome`);
    }    else {
        alert(`"${phrase.content}" is not a palindrome`);
        
    }

ok