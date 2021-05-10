
function max_value(num) {
let max = num[0]
for (let i = 0; i < num.length; i++) {
    if (num[i] > max ) {
        max = num[i]

        
    }
    
}
return max
      
    }
     console.log(max_value([1,3,4,55,6,8,99]))

