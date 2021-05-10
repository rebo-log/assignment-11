function isEven(num) {
  return num % 2 ===0 ;
}

  function nme(b) {
  let odd = [];
   for (let i = 0; i < b.length; i++) {
if (!isEven(b[i])  ){
  odd.push(b[i]);

}
     }

     return odd    
 }
 
 console.log(nme([1,2,3,4,5,6,7,8,9]));
   