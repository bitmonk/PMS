import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="/">Home</Link>
    {/* <a href="/AddProduct">Add Product</a> */}
    <Link to="/AddProduct">Add Product</Link>

</div>

  )
}

export default Navbar