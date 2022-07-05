import { Link, useNavigate, useParams } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { Button, FormControl, FormHelperText, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "material-ui";

export default function Category() {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const data = { id: categoryId, name, description };
    const JsonData = JSON.stringify(data);
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));



    useEffect(() => {

        axios.get(`http://localhost:8080/category/${categoryId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {

                // setName(res.data.name)
                // setDescription(res.data.description)


            });
    })
    const handleClick = (e) => {
        e.preventDefault();
        const test = { "id": categoryId, "name": name, "description": description }
        axios.put(`http://localhost:8080/category/${categoryId}`, test, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                navigate('/admin/category')
            })
            .catch(error => {
                console.log(error.response.data)
            })

    }
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Category</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productBottom">
                <form>
                    <FormControl >
                        <InputLabel htmlFor="">Name</InputLabel>
                        <Input id="name" autoFocus onChange={(e) => setName(e.target.value)} />


                    </FormControl>
                    <FormControl   >
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <Input onChange={(e) => setDescription(e.target.value)} name="description" type="description" id="description" autoComplete="current-description" />
                    </FormControl>
                    <Button type="submit" variant="contained" color="success" onClick={handleClick}>
                        Success
                    </Button>
                </form>
            </div>
        </div>
    );
}
