import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewCategory() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState();
    const [message, setMessage] = useState('')
    const category = { name, description };
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/category', category, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                if (res.ok) {
                    navigate('/admin/category')
                }
            })
            .catch(error => {
                // setMessage(error.response.data[0].defaultMessage)
                // console.log(error.response.data.name)
                if (error.response.status == 501) {
                    setMessage(error.response.data)
                }
                if (error.response.status == 400) {
                    var text = '';
                    for (const item in error.response.data) {
                        text += error.response.data[item] + ' '
                    }
                    setMessage(text)
                }

            })

    }
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Category</h1>
            <form className="addProductForm">

                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                </div>  <div className="addProductItem">{message}</div>

                <button className="addProductButton" onClick={handleClick}>Create</button>
            </form>
        </div>
    );
}