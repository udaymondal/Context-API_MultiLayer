import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
// import CategoryDetailErChild from '../CategoryDetailErChild/CategoryDetailErChild';

const CategoriesDetail = (props) => {
    const category = useContext(CategoryContext);
    const {name} = props.product;
    return (
        <div>
            {name}
        </div>
    );
};

export default CategoriesDetail;