import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from './productSlice';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const fetchProducts = async () => {
    const result = await axios.get('http://localhost:3000/products');
    console.log(result);
    dispatch(setProducts(result.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='products'>
        <h3 className='products-title'>Products Page</h3>
        <div className='products-wrapper'>
        {products.map((product) => (
            <Card key={product.id} sx={{maxWidth: '345px', marginTop: '20px'}}>
              <CardMedia 
                sx={{height: '150px', width:'100px', margin: 'auto'}}
                image={product.thumbnail}
              />
              <CardContent>
                <Typography>{product.title}</Typography>
                <Typography>{product.description}</Typography>
              </CardContent>

              <CardActions>
                <Button onClick={() => navigate(`/products/${product.id}`)}>Show details</Button>
              </CardActions>
            </Card>
        ))}
        </div>
    </div>
  );
};

export default Products;
