function average(numbers) {
   if (numbers?.length)
   {
    const sumTotal =  numbers.reduce((acc, curr) => {
        return Number(acc) + Number(curr);
    }, 0);
    return sumTotal/numbers.length;
   }
   else
   {
       return 0;
   }
}

module.exports={average}
