  
function stringContains(my_string,his_string){
 
 if(my_string.length != his_string.length) {
 return false;
 }
else  {
   for(let i = 0; i <  my_string.length; i++)
   if(my_string === his_string)
   return  true;
    return false;
}  



  }
  
 console.log(stringContains(`sad`,`not sad`));
 