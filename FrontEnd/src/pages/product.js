import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, stepButtonClasses } from '@mui/material';
import { AddCart } from '../actions/product';
import axios from 'axios';
import Pagination from '../components/pagination/pagination';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import PostFiltersForm from '../components/PostFiltersForm/index';
const Product = () => {
  const dispatch = useDispatch();
  const [listProduct, setListProduct] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 6,
    totalRows: 3
  })
  const [filters, setFilters] = useState({
    page: 0,
    size: 6
  })
  const handerFilterChange = function (newFilter) {

    if (!newFilter.searchItem == "") {
      const urlSearch = `http://localhost:8080/product/search/${newFilter.searchItem}`;
      axios.get(urlSearch)
        .then(res => {
          setListProduct([res.data])


        })
        .catch(err => {
          console.log('ko thanh cong');
        })
    } else {
      axios.get('http://localhost:8080/product')
        .then((response) => {
          const { data } = response;

          setListProduct(data);
          setPagination(filters);

        })
        .catch()
    }
  }
  const paramString = queryString.stringify(filters);
  useEffect(() => {
    axios.get(`http://localhost:8080/product?${paramString}`)
      .then(res => {
        setListProduct(res.data)
        setPagination(filters)

      })
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage

    })
  }
  const handleAddToCart = (item) => {

    dispatch(AddCart(item))

  }
  return (
    <div >
      <div>
        <div className="timkiemsp">
          <form class="d-flex">
            {/* <input class="form-control me-2" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit"> Tìm kiếm </button> */}
            <PostFiltersForm onSubmit={handerFilterChange} />
          </form>
        </div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {listProduct.map((item, index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card className="sp1" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={`/img/${item.image}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography style={{ fontWeight: 600, fontSize: 20 }} variant="body2" color="text.secondary">
                        {`${item.price}$`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button onClick={() => {
                      handleAddToCart(item)
                    }} size="small" color="success">
                      Add To Cart
                    </Button>
                    <Button size="small" color="success">
                      Detail
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Grid
          m={2} pt={3}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid item xs={3}>
            <Pagination pagination={pagination}
              onPageChange={handlePageChange}
            />
          </Grid>

        </Grid>







      </div>

      <br />
      <br />

      {/* 
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav> */}


    </div >
  );
};

export default Product;
