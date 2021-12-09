const average = (numbers) => {
    const sumTotal =  numbers.reduce((acc, curr) => {
        return Number(acc) + Number(curr);
    }, 0);
    return sumTotal/numbers?.length;
}

module.exports={average}
