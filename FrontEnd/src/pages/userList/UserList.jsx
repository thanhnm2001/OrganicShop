import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const [listUser, setListUser] = useState([]);
  console.log(listUser)
  useEffect(() => {
    axios.get("http://localhost:8080/user", {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setListUser(res.data)
      })
  }, [])


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullname",
      headerName: "FullName",
      width: 200,

    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 160,
    },

  ];

  return (
    <div className="userList">
      <DataGrid
        rows={listUser}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
