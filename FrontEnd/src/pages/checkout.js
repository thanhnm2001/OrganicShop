import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { DeleteSharp } from '@material-ui/icons';
import { ClearCart } from '../actions/product';
export function CheckOut() {
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const [users, setUsers] = useState();
    const [ordered, setOrdered] = useState(false)
    const Carts = useSelector(state => state.productAll.Carts);
    let total = Carts.reduce((item1, item2) => {
        return item1 + item2.quantity * item2.product.price;
    }, 0)
    const user = JSON.parse(localStorage.getItem('username'));
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    useEffect(() => {
        axios.get(`http://localhost:8080/user/${user}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => {
            setUsers(res.data)


        })
    }, [])
    const handleSubmit = () => {
        delete users.authories


        axios.post('http://localhost:8080/order', {
            "orderAddress": address,
            "ammount": total,
            "orderedDate": new Date().toISOString(),
            "orderStatus": true,
            "users": users,
            "orderDetails": Carts

        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(

                dispatch(ClearCart())
            )
        setOrdered(true)



    }
    return (
        <div>
            {
                ordered === true && <Alert
                    iconMapping={{
                        success: <CheckCircleOutlineIcon fontSize="inherit" />,
                    }}
                >
                    Order Success
                </Alert>
            }
            <Typography gutterBottom variant="h3" align="center">
                Shipping Address
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form>
                            <Grid container spacing={1}>

                                <Grid item xs={12}>
                                    <TextField type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} label="Address" variant="outlined" fullWidth required />
                                </Grid>


                                <Grid item xs={12}>
                                    <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}