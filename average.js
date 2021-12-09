function average(numbers) {
    if(!numbers?.length)
    {
        return NaN;
    }
    
    let count=1;
    let sumTotal = numbers.reduce((p, c) => {
        if(isNaN(c)){
            return p;
        }else{
             count++;
            return p + c;
           
        }
        
    });
    return sumTotal/count;
};
module.exports = {average};
