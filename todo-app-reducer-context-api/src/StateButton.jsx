import React, { useState } from 'react';

const StateButton = () => {
    const [counter, setCounter] = useState(0);

    return (
        <button onClick={() => setCounter(counter + 1)}>
        Count: {counter}
        </button>
    );
};

export default StateButton;