import React, {useEffect, useState} from 'react';
import ItemDetail from '../Component/ItemDetail/ItemDetail';
import axios from 'axios';

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    console.log('Data:', data);

    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products/1')
        .then((res) => setData(res.data));
    }, []);


    
  return (
    <>
      <ItemDetail data={data} />;
    </>
  )
};

export default ItemDetailContainer;
