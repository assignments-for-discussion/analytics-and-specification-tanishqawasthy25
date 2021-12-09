function average(numbers) {
    
    let count=0;
    let sumTotal = numbers.reduce((p, c) => {
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
