import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProducts = (props) => {

    let [productList, setProductList] = useState([]);
    let [deleteToggle, setDeleteToggle] = useState(false)
    let history = useHistory()
    let deleteProd =(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log("response---->", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=>{
            console.log(err);
            }
            )
            
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            setProductList(response.data.products);
            console.log(productList)
        })
        .catch(err => {
            console.log(err)
        })   
    },[deleteToggle, props.newProdToggle])



    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, idx)=> {
                    return(
                    <div key={idx} className="d-flex">
                        <h3><Link to={`/show/${product._id}`}>{product.title}</Link></h3>
                        <button className='btn btn-danger' onClick={(e)=>{deleteProd(product._id)}}>Delete</button>
                    </div>
                    )

                })

            }



        </div>
    )
}
export default AllProducts