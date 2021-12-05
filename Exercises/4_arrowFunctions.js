// Syntax

// variableName = (parameter) => {
//     code_block
// }

const calcArea = (radius) => {
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log(area);

const greet = () => {
    return 'Hello, world';
}

const result = greet();
console.log(result);

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] + tax;
    }
    return total;
}