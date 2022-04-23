import React, { useEffect, useState, createContext } from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Placeholder, Row, Spinner } from 'react-bootstrap';
import Navigation from './Components/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Registration from './Components/Login/Registration';

export const AppContext = createContext();

//jsx-functional-component
const App = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({});
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    if (search !== '') {
      setIsLoading(true);
      setData([]);
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.meals === null) {
            setIsLoading(false);
            setData([]);
          } else {
            setIsLoading(false);
            setData(data.meals);
          }
        })
    }
  }, [search])


  return (
    <div>
    <AppContext.Provider value = {{cart, setCart, userData, setUserData}}>
      <div>
        <BrowserRouter>
        <Navigation />
          <Routes>
          <Route path="/" element={<Home data={data} handleChange={handleChange} isLoading={isLoading}  search={search}  />} />
          <Route path="/home" element={<Home data={data} handleChange={handleChange} isLoading={isLoading}  search={search}  />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
            <Route path="*" element={<div className="text-danger">404! Not found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
    </div>
  )
}

export default App;
