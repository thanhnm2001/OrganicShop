
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryService from "../../services/category.service";

export default function DataTable() {
    const columns = [
        { field: "id", headerName: "ID", width: 95 },
        {
            field: "name",
            headerName: "Name",
            width: 200,

        },
        {
            field: 'description',
            headerName: 'Description',
            type: 'number', width: 200
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/category/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>

                    </>
                );
            },
        },



    ];



    const [data, setData] = useState([])
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));


    const handleDelete = (param) => {
        axios.delete(`http://localhost:8080/category/${param}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(


            );
    }

    useEffect(() => {
        // fetch("http://localhost:8080/category", {
        //     headers: { Authentication: `Bearer ${accessToken}` }
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //     })
        axios.get('http://localhost:8080/category', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                setData(res.data);


            });
    }, [])
    return (
        <div style={{ height: 400, width: '100%', flex: 4 }}>
            <div className="productTitleContainer">
                <h1 className="productTitle">Category</h1>
                <Link to="/admin/newCategory">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[6]}
                checkboxSelection
            />
        </div>
    );
}