import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})

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
    <form>

      <label htmlFor="productImage">Product Image:</label>
      <input value={product.productImage} type="text" id="productImage" name="productImage"/>
      
      <label htmlFor="productName">Product Name:</label>
      <input value={product.productName} type="text" id="productName" name="productName"/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea value={product.productDescription}id="productDescription" name="productDescription" rows="4" ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input value={product.productMaterial} id="productMaterial" name="productMaterial" />
      
      <button type="submit">Update</button>
    
    </form>
  </div>
    </>
  )
  }
 
export default EditProduct