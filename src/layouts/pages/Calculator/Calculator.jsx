import './Calculator.css'
import { useEffect, useState } from 'react'

function Calculator() {
    const [a, setA] = useState("");
    let b = "";
    const [operator, setOperator] = useState('');
    const [value, setValue] = useState(0);
    const [displayValue, setdisplayValue] = useState(0);

    useEffect(() => {
        setdisplayValue(value);
    }, [value])

   function numClick() {
        return (e) => {
            if (displayValue == 0) {
                setdisplayValue(e.target.innerHTML);
            }
            else {
            setdisplayValue(displayValue + e.target.innerHTML);
            }
        }
    }

    function operatorClick() {
        return (e) => {
            setOperator(e.target.innerHTML);
            setA(displayValue);
            if (displayValue != '') {
                setdisplayValue('0')
                b = "";
            }
        }
    }

    function equalClick() {
        return () => {
            if (operator === '') {
                console.log('no operator');
            }
            else if (b == '') {
                b = displayValue;
                if (operator === '+') {
                    setValue(Number(a) + Number(b));
                }
                else if (operator === '-') {
                    setValue(Number(a) - Number(b));
                }
                setdisplayValue(String(value));
            }
            else if (b != '') {
                if (operator === '+') {
                    setValue(Number(a) + Number(b));
                }
                else if (operator === '-') {
                    setValue(Number(a) - Number(b));
                }
                setdisplayValue(String(value));
            }
            setA(displayValue);
        }
    }

    function clearClick() {
        return () => {
            setdisplayValue(0);
            setValue(0);
            setA(0);
            setOperator('');
            b = '';
        }
    }

    return (
        <div className="calculator">
        <div className='container'>
            <div className='result'>{displayValue}</div>
            <div className='bottons'>
            <div>
                <span>
                    <button disabled>MC</button>
                    <button disabled>MR</button>
                    <button disabled>M+</button>
                    <button disabled>M-</button>
                    <button onClick={clearClick()}>CE</button>
                </span>
            </div>
            <div>
                <span>
                    <button onClick={numClick()}>7</button>
                    <button onClick={numClick()}>8</button>
                    <button onClick={numClick()}>9</button>
                    <button disabled>÷</button>
                    <button disabled>√</button>
                </span>
            </div>
            <div>
                <span>
                    <button onClick={numClick()}>4</button>
                    <button onClick={numClick()}>5</button>
                    <button onClick={numClick()}>6</button>
                    <button disabled>×</button>
                    <button disabled>%</button>
                </span>
            </div>
            <div>
                <span>
                    <button onClick={numClick()}>1</button>
                    <button onClick={numClick()}>2</button>
                    <button onClick={numClick()}>3</button>
                    <button onClick={operatorClick()}>-</button>
                    <button disabled>1/x</button>
                </span>
            </div>
            <div>
                <span>
                    <button onClick={numClick()}>0</button>
                    <button disabled>.</button>
                    <button disabled>+/-</button>
                    <button onClick={operatorClick()}>+</button>
                    <button onClick={equalClick()}>=</button>
                </span>
            </div>
            </div>
        </div>
    </div>
    )
}


export default Calculator