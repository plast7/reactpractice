import React, {useState} from 'react';

function Counter({inputs, setInputs}) {
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
            <button name="number" onClick={onIncrease}>+</button>
            <button name="number" onClick={onDecrease}>-</button>
            <br />
            <input name="count" onChange={onChange} placeholder="숫자" value={count} />
            <br />
        </div>
    );
}

export default Counter;