import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './ProductInfo.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductInfo = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [product, setProduct] = useState({})

  const deleteProduct = async() =>{
    //api delete
    const response = await axios.delete("https://652fbaf06c756603295d8f7f.mockapi.io/products/" + id)
    if(response.status == 200){
      navigate("/")
    }else{
      alert("Something went wrong while deleting this item")
    }
  }

  const fetchProductInfo = async () =>{
    const response = await axios.get("https://652fbaf06c756603295d8f7f.mockapi.io/products/" + id)
    setProduct(response.data)
  }

  useEffect(()=>{

    fetchProductInfo()

  },[])
  console.log(product)

  return (
    <>
        <Navbar />
        <div className='card'>
    <img src={product.productImage} alt="Product Image" />
    <h2 className="product-name">{product.productName}</h2>
    <p className="product-description">{product.productDescription}</p>
    <p className="product-material">{product.productMaterial}</p>
    <button onClick={deleteProduct}>Delete</button>
    <button onClick={()=>navigate(`/editProduct/${id}`)}>Edit</button>
    </div>

    </>
  )
}

export default ProductInfo