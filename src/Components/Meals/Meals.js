import React from 'react';
import { Card,Col } from 'react-bootstrap';

const Meals = (props) => {
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
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meals;