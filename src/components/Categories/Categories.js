import React from 'react';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>Select your Category</h4>
            <CategoriesDetail count={count}/>
        </div>
    );
};

export default Categories;