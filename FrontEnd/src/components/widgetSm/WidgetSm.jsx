import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { gridColumnsTotalWidthSelector } from "@material-ui/data-grid";

export default function WidgetSm() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'))
  const [topProduct, setTopProduct] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  // const [product1, setProduct1] = useState({ 'name': '' })
  // const [count1, setCount1] = useState();
  // const [count2, setCount2] = useState();
  // const [count3, setCount3] = useState();
  // const top1 = listProduct.filter((item) => {
  //   return item.id === topProduct[0][0];
  // })
  // const top2 = listProduct.filter((item) => {
  //   return item.id === topProduct[1][0];
  // })
  // const top3 = listProduct.filter((item) => {
  //   return item.id === topProduct[2][0];
  // })

  useEffect(() => {
    axios.get('http://localhost:8080/orderdetails/top-product', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        // setTopProduct(res.data)
        // setCount1(res.data[0][1])
        // setCount2(res.data[1][1])
        // setCount3(res.data[2][1])
        setTopProduct(res.data)
        console.log(res.data)
      })
    axios.get('http://localhost:8080/product', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setListProduct(res.data);
        console.log(listProduct)


      });


  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Product</span>
      <ul className="widgetSmList">
        {
          topProduct.map((item) => {
            return (
              <li className="widgetSmListItem">

                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{listProduct.filter((item2) => {
                    return item2.id === item.productID;
                  }).map((item) => {
                    return item.name
                  })}</span>
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
