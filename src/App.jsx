import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddProduct from './pages/AddProduct/AddProduct'
import ProductInfo from './pages/ProductInfo/ProductInfo'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
