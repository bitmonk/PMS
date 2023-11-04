import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './ProductInfo.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductInfo = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})

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
    <p>{product.productMaterial}</p>
    </div>

    </>
  )
}

export default ProductInfo