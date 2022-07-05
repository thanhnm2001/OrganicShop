import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { gridColumnsTotalWidthSelector } from "@material-ui/data-grid";

export default function WidgetSm2() {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'))
    const [sellSlowlyProduct, setSellSlowlyProduct] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    // const [product1, setProduct1] = useState({ 'name': '' })
    // const [count1, setCount1] = useState();
    // const [count2, setCount2] = useState();
    // const [count3, setCount3] = useState();

    // const top1 = listProduct.filter((item) => {
    //     return item.id === topProduct[topProduct.length - 1][0];
    // })
    // const top2 = listProduct.filter((item) => {
    //     return item.id === topProduct[topProduct.length - 2][0];
    // })
    // const top3 = listProduct.filter((item) => {
    //     return item.id === topProduct[topProduct.length - 3][0];
    // })

    useEffect(() => {
        axios.get('http://localhost:8080/orderdetails/sell-slowly-product', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                setSellSlowlyProduct(res.data)
                // setCount1(res.data[res.data.length - 1][1])
                // setCount2(res.data[res.data.length - 2][1])
                // setCount3(res.data[res.data.length - 3][1])
            })
        axios.get('http://localhost:8080/product', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => {
                setListProduct(res.data);


            });



    }, [])

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Sell Slowly</span>
            <ul className="widgetSmList">
                {
                    sellSlowlyProduct.map((item) => {
                        return (
                            <li className="widgetSmListItem">

                                <div className="widgetSmUser">
                                    <span className="widgetSmUsername">{
                                        listProduct.filter((item2) => {
                                            return item2.id == item.productID;
                                        }).map((item) => {
                                            return item.name
                                        })
                                    }</span>
                                    <span className="widgetSmUserTitle">Count:{item.count}</span>
                                </div>


                            </li>
                        )
                    })
                }
                {/* <li className="widgetSmListItem">

                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{
                            top2.map((item) => {
                                return item.name
                            })
                        }</span>
                        <span className="widgetSmUserTitle">Count:{count2}</span>
                    </div>


                </li>
                <li className="widgetSmListItem">

                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{
                            top3.map((item) => {
                                return item.name
                            })
                        }</span>
                        <span className="widgetSmUserTitle">Count:{count3}</span>
                    </div>


                </li> */}



            </ul>
        </div>
    );
}
