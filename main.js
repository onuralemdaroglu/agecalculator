function ageCalculator() {
    let myBoY = document.getElementById('age').value;
    let myAge = 2022 - myBoY;

    if ( myAge < 35 ) { 
        document.write(myAge);
    } else 
       if  ( myAge > 35 && myAge < 70 ) {
           document.write(myAge + ' years old. You will have good times if you are lucky!');
       } else {
           document.write(myAge + ' years old?? Wohoa!! You are already dead! Don`t worry I am gonna pray for you!');
       }
        
    }

