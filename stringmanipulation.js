//const stringInput = document.getElementById('strInput');
const string = document.getElementById('strInput');



function myStrManip() {
    if(string.value ===''){
        alert("Please input a String");
    }
    else{
        srtmani(string.value);        
    }
}

function srtmani(str) { 

    
    const lastFour = str.slice(-4);
    const remaining = str.substring(0, str.length - 4);
    const result = lastFour.concat(remaining);
    
    alert("The last 4 characters affed to the front of the string is :"+result);
    
}