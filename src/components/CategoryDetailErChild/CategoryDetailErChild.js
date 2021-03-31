import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetailErChild = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <p>Category detail er child: {category}</p>
        </div>
    );
};

export default CategoryDetailErChild;