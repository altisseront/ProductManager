import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const CreateForm = () => {
    let [formInfo, setFormInfo] = useState({title:"",price:0,description:""});
    const changeHandler = (e)=> {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })}
    const addProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(response => {
                console.log(response);
                setFormInfo({title:"",price:0,description:""})
            })
            .catch(err => {
                console.log(err)
                
            })

    }
    
    return (
        <div className="">
        <h1 className='text-center'>Product Manager</h1>
        <form onSubmit={addProduct}>
            <div className="d-flex form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' onChange={changeHandler} value={formInfo.title}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="price">Price</label>
                <input type="number" min={0} name='price' onChange={changeHandler} value={formInfo.price}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name='description' onChange={changeHandler} value={formInfo.description}/>
            </div>
            <input type="submit" className='btn btn-primary'/>
        </form>
        </div>

    )
}
export default CreateForm