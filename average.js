function average(numbers) {
   if(!numbers.length)
   {
      return 0;
   }
   else
   {
   let sum =0;
   let i=0;
   while(i<numbers.length)
   {
      
      if(isNaN(numbers[i]))
      {
         sum=sum+numbers[i++];
      }
   }
   
   return sum/numbers.length;
   }
  
}

module.exports={average}
