import React, {useState} from 'react';

function Counter() {
    const[inputs, setInputs] = useState({
        number: 0,
        count: 0,
    });

    const {number, count} = inputs;

    const onIncrease = (e) => {
        const {name} = e.target;
        if(!isNaN(count)) {
            setInputs({
                ...inputs,
                [name]: Number(number) + Number(count),
            });
        }
    }
    const onDecrease = (e) => {
        const {name} = e.target;
        if(!isNaN(count)) {
            setInputs({
                ...inputs,
                [name]: Number(number) - Number(count),
            });
        }
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    return (
        <div>
            <h1>{isNaN(count) && '존재하지 않는 숫자입니다'}</h1>
            <h1>{number}</h1>
            <button name="number" onClick={onIncrease}>+</button>
            <button name="number" onClick={onDecrease}>-</button>
            <br />
            <input name="count" onChange={onChange} placeholder="숫자" value={count} />
            <br />
        </div>
    );
}

export default Counter;