import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowOne = () => {
    let {id} = useParams()
    let [currentProduct, setCurrentProduct] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log("response---->", response.data.product)
            setCurrentProduct(response.data.product)
            
        })
        .catch(err=>{
            console.log(err);
            }
        )
    }, [id])
    return (
    <div>
        <h1>Title: {currentProduct.title}</h1>
        <h1>Price: {currentProduct.price}</h1>
        <h1>Description: {currentProduct.description}</h1>

        <h3><Link to={`/`}>Home</Link></h3>
    </div>

    )
}
export default ShowOne;