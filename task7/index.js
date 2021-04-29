function git(m,result) {
    

 result = [];


for (let i = 0; i <= m; i++) {
result.push(i);
} 
if (m < 0 ) {
    for (let i = m; i <= 0; i++) 
     result.push(i);
}
console.log(result.join());
}
git(5);
git(0);
git(-2);
