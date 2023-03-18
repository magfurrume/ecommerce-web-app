import { useEffect, useState } from 'react'
import './newArrival.css'
import axios from 'axios';

export default function NewArrival() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProducts(response.data);
        });
    }, [])
    const textCapital = (text) => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const capitalized = arr.join(" ");
        return capitalized
    }
    return (

        <div className='row nomargen'>
            {products && products.slice(0, 10).map((product) => {
                return (
                    <div className="product col-md-2 col-sm-6 mb-3 ">
                        <div className=" productCard h-100 text-left" key={product.id}>
                            <h5 className="productCategory mb-0">{textCapital(product.category)}</h5>
                            <p className="productName">{product.title.substring(0, 16)}...</p>
                            <img className="card-img-top productImg" src={product.image} alt="Card image cap" />
                            <div className="productPrice">
                                <p className="productPrevPrice">RS 60.000</p>
                                <p className="productCurrPrice">RS {product.price}</p>
                            </div>
                            <a href="#" className="addCartbtn btn">Add to Cart</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
