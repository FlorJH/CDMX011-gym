const printStar = (num) => {
    const array = [];
    const caracter = '*';

    for (let i = 1; i <= num; i++) {
        array.push(caracter.repeat(i));
    }

    return array
};