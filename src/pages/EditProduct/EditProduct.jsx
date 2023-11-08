import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {

    const navigate = useNavigate()

    const {id} = useParams()
    const [product, setProduct] = useState({})

    const handleChange = (e)=>{
const {name, value} = e.target
      setProduct({
        ...product,
        [name] : value
      })
      console.log(product)
    }


//edit product
    const editProduct = async (e) => {
    e.preventDefault()
    const response = await axios.put("https://652fbaf06c756603295d8f7f.mockapi.io/products/" + id, product)
      console.log(response)
      if(response.status == 200){
        e.preventDefault()
        navigate("/productInfo/"+id)
      }else{
        alert("Something went wrong while updating data")
      }
    }

    const fetchProduct = async () =>{
        const response = await axios.get("https://652fbaf06c756603295d8f7f.mockapi.io/products/" + id)
        setProduct(response.data)
        console.log(response)
    console.log(product.productName)  
    }

      useEffect(()=>{
            fetchProduct()
      } ,[])


  return (
    <>
    <Navbar />

    <div id="product-form">
    <h2>Edit Product</h2>
    <form onSubmit={editProduct}>

      <label htmlFor="productImage">Product Image:</label>
      <input value={product.productImage} type="text" id="productImage" name="productImage" onChange={handleChange} />
      
      <label htmlFor="productName">Product Name:</label>
      <input value={product.productName} type="text" id="productName" name="productName" onChange={handleChange} />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea value={product.productDescription}id="productDescription" name="productDescription" rows="4"  onChange={handleChange}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input value={product.productMaterial} id="productMaterial" name="productMaterial" onChange={handleChange} />
      
      <button type="submit">Update</button>
    
    </form>
  </div>
    </>
  )
  }
 
export default EditProduct