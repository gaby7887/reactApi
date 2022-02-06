import * as React from 'react';
import './ItemDetail.css';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
 
const ItemDetail = ({data}) => {
  return (
    <Card className="card" style={{margin: 60}} sx={{ maxWidth: 345 }}>
      <CardContent className="cardInd">
        <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt="Fjallraven - Foldsack No. 1 Backpack"
        />
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
