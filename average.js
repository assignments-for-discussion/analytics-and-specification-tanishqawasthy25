function average(numbers) {
    const sumTotal =  numbers.reduce((acc, curr) => {
        return Number(acc) + Number(curr);
    }, 0);
    return numbers.length?sumTotal/numbers?.length:0;
}

module.exports={average}
