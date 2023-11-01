import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import './AddProduct.css'
import { useState } from 'react'


const AddProduct = () => {
  //First Approach
// const [productImage ,setProductImage] = useState("")
// const [productName, setProductName] = useState("")
// const [productDescription, setProductDescription] = useState("")
// const [productMaterial, setProductMaterial] = useState("")

// const addProduct= async (e)=>{
//   e.preventDefault()
//   const response = await axios.post("https://652fbaf06c756603295d8f7f.mockapi.io/products", {
//     productImage : productImage,
//     productName : productName,
//     productDescription : productDescription,
//     productMaterial : productMaterial
//   })
//   console.log(response)
// }

//Second Approach

// const addProduct = async (e) =>{
//   e.preventDefault()
//   const formData = new FormData(e.currentTarget);

//   const data = Object.fromEntries(formData)
//   console.log(data)
//   const response = await axios.post("https://652fbaf06c756603295d8f7f.mockapi.io/products", data)
//   console.log(response)
// }

//Third Approach..

const [data, setData] = useState({

   productName : "",
   productDescription : "",
   productMaterial : "",
   productImage : ""

})

const handleChange = (e)=>{
  const {name, value} = e.target
  setData({
    ...data,
    [name] : value
  })

  console.log(data)
    
}

const addProduct = async (e) => {
  e.preventDefault()
  const response = await axios.post("https://652fbaf06c756603295d8f7f.mockapi.io/products", data)

  console.log(response)
}



  return (
    <>
    <Navbar />

    <div id="product-form">
    <h2>Product Information</h2>
    <form onSubmit={addProduct}>


      <label htmlFor="productImage">Product Image:</label>
      <input type="text" id="productImage" name="productImage" onChange={handleChange} />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" onChange={handleChange}/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={handleChange} /> *
      
      {/* <input type="text" id="productImage" name="productImage"/>
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4"></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" /> */}
      
      <button type="submit">Submit</button>
    
    </form>
  </div>
    </>
  )
  }

export default AddProduct