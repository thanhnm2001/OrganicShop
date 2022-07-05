import axios from "axios";
import { useEffect, useState } from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'))
  const [topUser, setTopUser] = useState([]);
  const [listUser, setListUser] = useState([]);
  // const [product1, setProduct1] = useState({ 'name': '' })
  // const [count1, setCount1] = useState();
  // const [count2, setCount2] = useState();
  // const [count3, setCount3] = useState();

  // const top1 = listUser.filter((item) => {
  //   return item.id === topUser[topUser.length - 1][0];
  // })
  // const top2 = listUser.filter((item) => {
  //   return item.id === topUser[topUser.length - 2][0];
  // })
  // const top3 = listUser.filter((item) => {
  //   return item.id === topUser[topUser.length - 3][0];
  // })

  useEffect(() => {
    axios.get('http://localhost:8080/order/topUser', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        // setTopUser(res.data)
        // setCount1(res.data[res.data.length - 1][1])
        // setCount2(res.data[res.data.length - 2][1])
        // setCount3(res.data[res.data.length - 3][1])
        setTopUser(res.data)
      })
    axios.get('http://localhost:8080/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setListUser(res.data);


      });



  }, [])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Top User</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Orders</th>
          <th className="widgetLgTh">Phone</th>
          <th className="widgetLgTh">Address</th>

        </tr>
        {
          topUser.map((item) => {
            return (
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{
                    listUser.filter((item2) => {
                      return item2.id == item.userID;
                    }).map((item) => {
                      return item.fullname
                    })
                  }</span>
                </td>
                <td className="widgetLgDate">{item.total}</td>
                <td className="widgetLgAmount">{
                  listUser.filter((item2) => {
                    return item2.id == item.userID;
                  }).map((item) => {
                    return item.phone
                  })
                }</td>
                <td className="widgetLgAmount">{
                  listUser.filter((item2) => {
                    return item2.id == item.userID;
                  }).map((item) => {
                    return item.address
                  })
                }</td>

              </tr>
            )
          })
        }


      </table>
    </div>
  );
}
