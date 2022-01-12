import React, {useState} from 'react';
import Counter from './Counter.js';
import NumberTemplate from './NumberTemplate.js';

function App() {
    const[inputs, setInputs] = useState({
        number: 0,
        count: 0,
    });

    const {number, count} = inputs;

    return (
        <>
            <NumberTemplate number={number} count={count}/>
            <Counter inputs={inputs} setInputs={setInputs}/>

        </>
    );
}

export default App;