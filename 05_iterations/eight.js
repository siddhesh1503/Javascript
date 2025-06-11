const myNumbers = [1, 2, 3, 4, 5];

const myTotal = myNumbers.reduce((accumulator, currentValue, index) => {
    console.log(`At index ${index}, adding ${currentValue} to accumulator ${accumulator}`);
    return accumulator + currentValue;
}
, 0);
console.log(`Total sum is ${myTotal}`);
