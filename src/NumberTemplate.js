import React, {useState} from 'react';

function NumberTemplate({number, count}) {
    return (
        <div>
            <h1>{isNaN(count) && '존재하지 않는 숫자입니다'}</h1>
            <h1>{number}</h1>
        </div>
    );
}

export default NumberTemplate;