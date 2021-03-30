import React from 'react';

const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>(Header.js) This is header: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
};

export default Header;