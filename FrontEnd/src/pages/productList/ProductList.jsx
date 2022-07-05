import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const accessToken = JSON.parse(localStorage.getItem('accessToken'))
  const [listProduct, setListProduct] = useState([])
  useEffect(() => {

    axios.get('http://localhost:8080/product', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setListProduct(res.data);


      });
  }, [])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,

    },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "weight",
      headerName: "Weight",
      width: 120,
    },
    {
      field: "image",
      headerName: "Image",
      width: 160,
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
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/admin/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={listProduct}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
