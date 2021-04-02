import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    // const {count, setCount} = props;
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>(Header.js) This is header: {category}</h1>
            <button onClick={() => setCategory('LAPTOP')}>Laptop</button>
            <button onClick={() => setCategory('MOBILE')}>Mobile</button>
            <button onClick={() => setCategory('CAMERA')}>Camera</button>
        </div>
    );
};

export default Header;