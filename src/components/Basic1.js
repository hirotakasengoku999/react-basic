import React, {useState} from 'react';

const Basic1 = (props) => {

    const [product, setProduct] = useState({name:"", price:""});

    return (
        <div>
            <form>
                <input type="text" value={product.name}
                onChange={evt=>setProduct({...product, name:evt.target.value})} />
                <input type="text" value={product.price}
                onChange={evt=>setProduct({...product, price:evt.target.value})} />
            </form>
            <h3>Product</h3>
            <h5>name: {product.name}</h5>
            <h5>name: {product.price}</h5>
        </div>
    )
}

export default Basic1
