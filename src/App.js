import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Products, NavBar} from "./components/";

const App = () => {
  return(
      <div>
        <NavBar />
        <Products />
      </div>
  )
};

export default App;