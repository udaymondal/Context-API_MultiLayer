import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} =props;
    return (
        <div style={{border: '2px solid blue'}}>
            <h2>This is Home: {count}</h2>
            <Categories count={count}/>
        </div>
    );
};

export default Home;