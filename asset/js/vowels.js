
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

    
    // vowelsCount count = str.match(/[aeiou]/gi).length;
    
        const Vowels = 'aAeEiIoOuU';
        let vowelsCount = 0;
        for(let i = 0; i < str.length ; i++) {
           if (Vowels.indexOf(str[i]) !== -1) {
              vowelsCount += 1;
          }
        }
    
     

    
    alert("The total Number of Vowels in the entered string is :"+vowelsCount);
    
    
}
