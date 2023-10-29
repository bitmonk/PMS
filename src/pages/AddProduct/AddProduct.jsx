import Navbar from '../../components/Navbar/Navbar'
import './AddProduct.css'


const AddProduct = () => {
  return (
    <>
    <Navbar />

    <div id="product-form">
    <h2>Product Information</h2>
    <form onSubmit={AddProduct}>
      <label htmlFor="productImage">Product Image:</label>
      <input type="file" id="productImage" name="productImage" accept="image/*" />
      
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" />
      
      <label for="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4"></textarea>
      
      <label for="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" />
      
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
  }

export default AddProduct