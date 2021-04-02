import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const allProducts = 
[
    {name: 'Lenevo', category: 'laptop'}, {name: 'Asus', category: 'laptop'}, {name: 'Dell', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'}, {name: 'Nokia', category: 'mobile'}, {name: 'Apple', category: 'mobile'},
    {name: 'Canon', category: 'camera'}, {name: 'Nikkon', category: 'camera'}, {name: 'Sony', category: 'camera'},
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    },[category])
    
    return (
        <div>
            <h4>Select your Category: {category} </h4>
            <h5>Availbale Products - </h5>
            {
                products.map(pd => <CategoriesDetail product={pd}></CategoriesDetail>)
            }
            
        </div>
    );
};

export default Categories;