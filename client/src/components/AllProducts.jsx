import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProducts = () => {

    let [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            setProductList(response.data.products);
            console.log(productList)
        })
        .catch(err => {
            console.log(err)
        })   
    },[]



    )
    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, idx)=> {
                    return(
                    <div key={idx} className="d-flex">
                        <h3><Link to={`/show/${product._id}`}>{product.title}</Link></h3>
                    </div>
                    )

                })

            }



        </div>
    )
}
export default AllProducts