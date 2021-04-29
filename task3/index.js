
 function max () {
let max = [];
 let mymax = [0];

 for ( let i = 0; i <= 99; i++) {
     max.push(i);
 if (max[i] >= mymax) {
     mymax = max[i];
    
 }
 }
 console.log(mymax);

 }

max();

// function myFunction(max, mymax) {
//     if ( max > mymax){
//       return max ;
//       }else {
//       return mymax ;
//       }
      
//     }
//      let  x = myFunction(100, 12222);
//      alert(x);
     

