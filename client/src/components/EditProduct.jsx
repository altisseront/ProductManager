import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const EditOne = () => {
    let {id} = useParams()
    let [currentProduct, setCurrentProduct] = useState({});
    let history = useHistory()
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


    const changeHandler = (e)=> {
        setCurrentProduct({
            ...currentProduct,
            [e.target.name]:e.target.value
        })}

    const editProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, currentProduct)
            .then(response=>{
                console.log("response---->", response)            
            })
            .catch(err=>{
                console.log(err);
                }
            )
        history.push('/')
    }
    return (
    <div>
        <form onSubmit={editProduct}>
            <div className="d-flex form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' onChange={changeHandler} value={currentProduct.title}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="price">Price</label>
                <input type="number" min={0} name='price' onChange={changeHandler} value={currentProduct.price}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name='description' onChange={changeHandler} value={currentProduct.description}/>
            </div>
            <input type="submit" className='btn btn-primary'/>
        </form>
        </div>
    )
}
export default EditOne;