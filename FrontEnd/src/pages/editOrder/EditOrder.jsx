import { Category } from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditOrder() {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const { orderId } = useParams();
    const [id, setId] = useState('');
    const [ammount, setAmmount] = useState();
    const [orderAddress, setOrderAddress] = useState('');
    const [orderedDate, setOrderedDate] = useState('');
    const [status, setStatus] = useState();
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const handleChangeSelect = (e) => {

        setStatus(e.target.value)
    }
    useEffect(() => {
        axios.get(`http://localhost:8080/order/${orderId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                console.log(res.data)
                setId(res.data.id)
                setOrderAddress(res.data.orderAddress)
                setAmmount(res.data.ammount)
                setUser(res.data.users)
                setOrderedDate(res.data.orderedDate)
                setStatus(res.data.orderStatus)
            })

    }, [])
    const handleOnClick = (e) => {
        delete user.authories
        e.preventDefault();
        axios.put(`http://localhost:8080/order/${orderId}`, {
            "id": id,
            "orderAddress": orderAddress,
            "ammount": ammount,
            "orderedDate": orderedDate,
            "orderStatus": status,
            "users": user
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                navigate('/admin/orders')
            })
    }







    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Edit Order</h1>
            <form className="addProductForm">

                <div className="addProductItem">
                    <label>Address</label>
                    <input type="text" value={orderAddress} placeholder="Address" />
                </div>
                <div className="addProductItem">
                    <label>Ammount</label>
                    <input type="text" value={ammount} placeholder="Ammount" />
                </div>
                <div className="addProductItem">
                    <label>Date</label>
                    <input type="text" value={orderedDate} placeholder="Date" />
                </div>
                <div className="addProductItem">
                    <label>Status</label>
                    <select onChange={handleChangeSelect} value={status}>
                        <option value={false}>Done</option>
                        <option value={true}>Shipping</option>

                    </select>
                </div>

                <button onClick={handleOnClick} className="addProductButton">Update</button>
            </form>
        </div >
    );
}
