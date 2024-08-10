// import { set } from 'mongoose'
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {

    let [flipkartData,setflipkartData] = useState({
        name: "",
        description: "",
        image: "",
        price: ""
    })

    const handleImageChange =(e) => {
        console.log(e.target.files,"hii kanha")
        const files = e.target.files[0];
        console.log(files);
        // setflipkartData({...flipkartData, image: file});

    }

    const handleChange = (e) =>{
        const{name,value}=e.target;
        setflipkartData({...flipkartData,[name]: value})
    }


    return (
        <div>
            <input type="text" placeholder='Product name' name='name' onChange={handleChange} value={flipkartData.name}  /> <br/><br/>
            <input type="text" placeholder='description' name='description' onChange={handleChange} value={flipkartData.description} /><br/><br/>
            <input type="file" placeholder='Image' name='image' onChange={handleImageChange} value={flipkartData.image} /> <br/><br/>
            <input type="number" placeholder='price' name='price' onChange={handleChange} value={flipkartData.price}/> <br/><br/>
            <button>Add Product</button>
        </div>
    )
}
export default AddProduct