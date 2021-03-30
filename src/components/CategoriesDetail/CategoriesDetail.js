import React from 'react';

const CategoriesDetail = (props) => {
    const {count} = props;
    return (
        <div>
            <p>This is category detail: {count}</p>
        </div>
    );
};

export default CategoriesDetail;