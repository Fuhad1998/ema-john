import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css';


const Shope = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

  
  
    return (
        <div className="shope-container">
            <div className="product-container">
                
                {
                    product.map(product => <Product
                         key={product.key}
                          product={product}
                          handleAddToCart={handleAddToCart}
                          ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
               
            </div>
            
        </div>
    );
};

export default Shope;