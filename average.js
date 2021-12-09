function average(numbers) {
    let sumTotal;
    let count=0;
    numbers.reducer((p, c) => {
        if(isNaN(c)){
            return Number(p);
        }else{
             count++;
            return Number(p) + Number(c);
           
        }
        
    });
    return sumTotal/count;
};
module.exports = {average};
