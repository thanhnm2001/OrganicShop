
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './orderList.css';
export default function OrderList() {

    const accessToken = JSON.parse(localStorage.getItem('accessToken'))
    const listOrder = [];
    const [listAllOrder, setListAllOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/order', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                console.log(res.data)
                setListAllOrder(res.data)
            })
    }, [])
    const newListOrder = listAllOrder.map((item) => {
        return {
            "id": item.id,
            "orderAddress": item.orderAddress,
            "ammount": item.ammount,
            "orderStatus": item.orderStatus ? "Shipping" : "Done",
            "orderDated": item.orderedDate.substring(0, 10),
            "customer": item.users.fullname
        }
    })
    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "customer",
            headerName: "Customer",
            width: 160,

        },
        { field: "ammount", headerName: "Ammount", width: 150 },
        {
            field: "orderDated",
            headerName: "Date",
            width: 140,
        },
        {
            field: "orderStatus",
            headerName: "Status",
            width: 140,
        },
        {
            field: "action",
            headerName: "Action",
            width: 170,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/orderdetail/" + params.row.id}>
                            <button className="productListEdit">Detail</button>
                        </Link>
                        <Link to={"/admin/order/" + params.row.id}>
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
                <h1 className="productTitle">Orders</h1>

            </div>
            <DataGrid
                rows={newListOrder}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection

            />
        </div>
    );
}
