import React, { useEffect, useState } from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Meals from './Components/Meals/Meals';
import { Container, Placeholder, Row, Spinner } from 'react-bootstrap';
import Navigation from './Components/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';

//jsx-functional-component
const App = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
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

  const Loader = () => {
    return (
      <Spinner animation="grow" />
    )
  }

  return (
    <div>
      <div>
        <BrowserRouter>
        <Navigation />
          <Routes>
          <Route path="/" element={<Searchbar handleChange={handleChange}  />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Container className="d-flex align-items-center justify-content-center">
        {
          isLoading ? <Loader /> : ''
        }
      </Container>
      <Container className="d-flex align-items-center justify-content-center">
        {
          data.length === 0 && search !== '' && isLoading === false ? <div className="alert alert-danger w-100">No Data</div> : ''
        }
      </Container>
      <Container className="mx-auto">
        <Row>
          {
            data.length !== 0 ? data.map(meal => <Meals key={meal.idMeal} meal={meal} />) : ''
          }
        </Row>
      </Container>
    </div>
  )
}

export default App;
