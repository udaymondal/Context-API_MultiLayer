import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    // const {count, setCount} = props;
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>(Header.js) This is header: {category}</h1>
            <button onClick={() => setCategory(category+1)}>Increment</button>
            <button onClick={() => setCategory(category-1)}>Decrement</button>
        </div>
    );
};

export default Header;