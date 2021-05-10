  
function stringContains(string1 , string2){
    
   
      for (let i = 0; i < string1.length; i++) {
        console.log('i: ', i);
        console.log('string1[i]', string1[i]);
        let counter = 0;
        console.log('counter: ', counter);
        for (let j = 0; j < string2.length; j++) {
          console.log('counter', counter);
          console.log('j: ', j);
          console.log('string2[j]: ', string2[j]);
          console.log('string1[i + j]', string1[i + j]);
          if (string2[j] !== string1[i + j]) {
            break;
          }
          
          counter++;
        }
    console.log('counter', counter);
        if (counter === string2.length) {
          return true;
        }
      }
      
      return false;
    
   
     }
     
    console.log(stringContains(`saher`,`sa`));
    