function average(numbers) {
    let sumTotal;
    let count;
    numbers.reducer((p, c) => {
        if(isNaN(c)){
            return Number(p);
        }else{
            return Number(p) + Number(c);
            count++;
        }
        return sumTotal/count;
    });
};
module.exports = {average};
