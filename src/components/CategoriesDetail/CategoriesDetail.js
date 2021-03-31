import React from 'react';
import CategoryDetailErChild from '../CategoryDetailErChild/CategoryDetailErChild';

const CategoriesDetail = (props) => {
    const {count} = props;
    return (
        <div>
            <p>This is category detail: {count}</p>
            <CategoryDetailErChild />
        </div>
    );
};

export default CategoriesDetail;