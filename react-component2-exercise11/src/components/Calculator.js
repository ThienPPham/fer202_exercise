import React from "react";
import { useState } from "react";

function Caculator() {
    const [result, setResult] = useState(0);
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');

    const handleOperandChange = (e, operand) => {
        const value = e.target.value;
        if (operand === 1) {
            setOperand1(value);
        }
        else {
            setOperand2(value);
        }
    };

    const handleOperatorChange = (e) => {
        setOperator(e.target.value);
    };

    const caculatorResult = () => {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);


        switch (operator) {
            case '+':
                setResult(num1 + num2);
                break;
            case '-':
                setResult(num1 - num2);
                break;
            case '*':
                setResult(num1 * num2);
                break;
            case '/':
                if (num2 !== 0) {
                    setResult(num1 / num2);
                }
                else {
                    setResult('Error: Division by zero');
                }
                break;
            default:
                setResult(0);
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input
                type="text"
                value={operand1}
                onChange={(e) => handleOperandChange(e, 1)}
                placeholder="Enter first number"
            />
            <select onChange={handleOperatorChange}>
                <option value="">Select operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="text"
                value={operand2}
                onChange={(e) => handleOperandChange(e, 2)}
                placeholder="Enter second number"
            />
            <button onClick={caculatorResult}>=</button>
            <div>Result: {result}</div>
        </div>
    );

}

export default Caculator;