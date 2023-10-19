function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
    
        default:
            throw new Error('Invalid operator');
    }

    return result;
}

module.exports = calculator;
