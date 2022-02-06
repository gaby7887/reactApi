import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import ItemDetailContainer from './Container/ItemDetailContainer';

const App = () => {
  return(
    <div className='App'>
       <Header />
       <ItemDetailContainer />
       
    </div>
  )
};

export default App;
