function average(numbers) {
   let sum =0;
   let i=0;
   while(i<numbers.length)
   {
      if(numbers[i]!==NaN)
      {
         sum=sum+numbers[i++];
      }
   }
   return sum/numbers.length;
}

module.exports={average}
