import React, { useContext } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Searchbar from '../../Components/Searchbar/Searchbar';
import Meals from '../../Components/Meals/Meals';
import { AppContext } from '../../App';

const Home = (props) => {
    const {handleChange, search, data, isLoading} = props;
    const {user} = useContext(AppContext);
    const Loader = () => {
        return (
          <Spinner animation="grow" />
        )
      }
    return (
        <>
        {user.length > 0 && <h1>Welcome {user.name}</h1>}
        <Searchbar handleChange={handleChange} />
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
            
        </>
    );
};

export default Home;