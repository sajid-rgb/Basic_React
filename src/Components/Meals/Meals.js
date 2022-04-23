import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { AppContext } from '../../App';

const Meals = (props) => {
    const { cart, setCart } = useContext(AppContext);
    const handleSetToCart = (product) => {
        setCart([...cart, product]);

    }
    return (
        <Col lg='4' sm='6'>
            <Card>
                <Card.Img variant="top" src={props.meal.strMealThumb} className="w-100" />
                <Card.Body>
                    <Card.Title>{props.meal.strMeal}</Card.Title>
                    <Card.Text>
                        {props.meal.strInstructions}
                    </Card.Text>
                    <Card.Link href={props.meal.strSource}>Source</Card.Link>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Button variant="primary" onClick={() => handleSetToCart(props.meal)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meals;