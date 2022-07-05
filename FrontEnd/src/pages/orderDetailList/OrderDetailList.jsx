
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './orderDetailList.css';
export default function OrderList() {

    const accessToken = JSON.parse(localStorage.getItem('accessToken'))
    const listOrder = [];
    const [listAllOrder, setListAllOrder] = useState([]);
    const [listOrderDetail, setListOrderDetail] = useState([]);
    const { orderDetailId } = useParams();
    const newList = listOrderDetail.map((item) => {
        return {
            "id": item.id,
            "quantity": item.quantity,
            "product": item.product.name,
            "price": item.product.price
        }
    })
    useEffect(() => {

        axios.get(`http://localhost:8080/orderdetails/${orderDetailId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                setListOrderDetail(res.data)


            });

    }, [])
    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "product",
            headerName: "Product",
            width: 200,

        },

        {
            field: "quantity",
            headerName: "Quantity",
            width: 150,
        },
        {
            field: "price",
            headerName: "Price",
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>

                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <div className="productTitleContainer">
                <h1 className="productTitle">OrderDetail</h1>

            </div>
            <DataGrid
                rows={newList}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
