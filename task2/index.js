function getOdd() {
  

  const array1 = ['1', '2', '3',`4`,`5`,`6`,`7`,`8`,`9`];
  
  // still working on it
  for (let element of array1) {
    element -= 1;
  }
  
  array1.forEach(function(item, index, array) {
  
    
    
    function isEven() {
      if (index  %2 !== 0) 
        return  item + `:` +` even` ;
      else
        return  item + `:` +` odd`;
    }
    console.log(isEven(index));
  });
  }
  getOdd();
  

//   function nme(b) {
//     b = [];
//     s = b;
//      for (let i = 1; i <= 20; i+=2) {
//          b.push(i);
//      }
//          if (s / 2 === 0)
//              return b ;
//          else
//              return s + ` odd` ;
//  }
 
//  console.log(nme());
   