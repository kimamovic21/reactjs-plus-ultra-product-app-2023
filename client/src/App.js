import React from 'react';
import './App.css';
import { routes } from './routes';
import { RouterProvider } from 'react-router-dom';
 
const App = () => {
  return (
    <>
      <RouterProvider router={routes}/>
    </>  
  );
};

export default App;




// cd client -> npm install -> npm start -> localhost:3001
// cd server -> json-server --watch db.json -> localhost:3000
