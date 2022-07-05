import * as React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { Button, Grid } from '@mui/material';
import { useSelector } from "react-redux";
import { PermDeviceInformation } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


export default function Cart() {
    const Carts = useSelector(state => state.productAll.Carts)
    const display = useSelector(state => state.changeView.display)
    const nagigate = useNavigate();
    const handleOnclick = () => {
        display === 'home' ? nagigate('/login') : nagigate('/checkout')
    }
    let total = Carts.reduce((item1, item2) => {
        return item1 + item2.quantity * item2.product.price;
    }, 0)
    const newCarts = Carts.map((item) => {
        return {
            id: item.product.id,
            quantity: item.quantity,
            price: item.product.price,
            name: item.product.name,
            weight: item.product.weight,
            image: item.product.image,
            description: item.product.description,
            status: item.product.status,
            createddate: item.product.createddate,
            category: item.product.category
        }
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'image',
            headerName: 'Image',
            width: 200,
            editable: true,
            renderCell: (params) => <img src={`/img/${params.value}`} width={100} />, // renderCell will render the component
        },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 209 },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 190,
        },

    ];

    const rows = newCarts;
    return (
        <div style={{ height: 450, width: '100%' }}>
            <div style={{ paddingLeft: "100px" }}>
                <h1>Cart Item</h1>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={Carts.length}
                rowsPerPageOptions={[Carts.length]}
                checkboxSelection
                rowHeight={100}
            />
            <Grid container spacing={2}>

                <Grid item xs={8}>
                    <Button onClick={handleOnclick} sx={{ justifyContent: 'flex-end' }} variant="contained">CheckOut</Button>
                </Grid>
                <Grid item xs={4}>

                    <h2>Total:{`${total}$`}</h2>
                </Grid>

            </Grid>







        </div>
    );
}