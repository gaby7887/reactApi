import React, {useEffect, useState} from 'react';
import ItemList from '../Component/ItemList/ItemList';
import axios from 'axios';

const ItemDetailContainer = () => {
    const [data, setData] = useState ([]);

    console.log('Data:', data);

    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then((res) => setData(res.data));
    }, []);


    
  return (
    <>
      <ItemList data={data} />;
    </>
  )
};

export default ItemDetailContainer;
