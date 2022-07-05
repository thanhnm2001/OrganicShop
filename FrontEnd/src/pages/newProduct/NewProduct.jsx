import { Category } from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./newProduct.css";

export default function NewProduct() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const [listCategory, setListCategory] = useState([]);
  const [category, setCategory] = useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const handleChangeSelect = (e) => {
    setCategory(listCategory[e.target.value])
  }
  const handleSelectFile = (e) => {
    setImage(e.target.files[0].name)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/product", {
      "name": name,
      "price": price,
      "weight": weight,
      "image": image,
      "description": description,
      "status": true,
      "createddate": new Date().toISOString(),
      "category": category
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        navigate('/admin/products')
      }

      )

  }




  useEffect(() => {
    axios.get('http://localhost:8080/category', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setListCategory(res.data)
        setCategory(res.data[0])





      });




  }, [])

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input onChange={handleSelectFile} type="file" id="file" />
        </div>

        <div className="addProductItem">
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        </div>
        <div className="addProductItem">
          <label>Weight</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select onChange={handleChangeSelect}>
            {listCategory.map((option, index) => (
              <option key={index} value={index}>{option.name}</option>
            ))}
          </select>

        </div>
        <button onClick={handleSubmit} className="addProductButton">Create</button>
      </form>
    </div >
  );
}
