import { useState, useEffect } from 'react' 
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'

const Home = () => {

  const [products, setProducts] = useState([])

  const fetchProducts =  async ()=>{
   const response = await axios.get("https://652fbaf06c756603295d8f7f.mockapi.io/products")
    setProducts(response.data)
  }

useEffect(() => {
  fetchProducts()
},[])

  return (
    <>
    <Navbar />
    <div className="card-container">
    {
      products.map((product)=>{
    return (
    <div key={product.id} className='card'>
    <img src={product.productImage} alt="Product Image" />
    <h2 className="product-name">{product.productName}</h2>
    <p className="product-description">{product.productDescription}</p>
    </div>
    )
    })
    }
    </div>
    </>
  )
}

export default Home