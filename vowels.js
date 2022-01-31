
const string = document.getElementById('strInput');



function myVowCount() {
    if(string.value ===''){
        alert("Please input a String");
    }
    else{
        countVowel(string.value);        
    }
}

function countVowel(str) { 

    
    const count = str.match(/[aeiou]/gi).length;

    
    alert("The total Number of Vowels in the entered string is :"+count);
    
}