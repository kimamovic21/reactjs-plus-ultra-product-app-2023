import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Typography, CardMedia, CardActions, Button } from "@mui/material";

const ProductOverview = () => {

  const {id} = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product.id === parseInt(id, 10));
  console.log(id, product, products);  

  return (
      <Box>
          <Card sx={{ maxWidth: 345, marginTop: '20px' }}>
                <CardMedia 
                    sx={{height: '150px', width:'100px', margin: 'auto'}}
                    image={product.thumbnail}
                />
                <CardContent>
                      <Typography>{product.title}</Typography>
                      <Typography>{product.description}</Typography>
                      <Typography>{product.price}</Typography>
                      <Typography>{product.brand}</Typography>
                </CardContent>

                <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                      <Button color="success">Edit</Button>
                      <Button color="error">Delete</Button>
                </CardActions>
            </Card>
      </Box>
  );
};

export default ProductOverview;
