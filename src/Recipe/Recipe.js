import React from 'react';
import { Card, Table, ListGroup, Badge, Col, Row, Container } from 'react-bootstrap';


const Recipe = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='m-md-2 '>
                        <Card.Img variant="top" src={props.recipe.imgSrc.value} />
                        <Card.Body>
                            <h2>{props.recipe.title.value}</h2>
                            <Card.Text className='mb-4'>
                                {props.recipe.shortDescription.value}
                            </Card.Text>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>prep time</th>
                                        <th>cook time</th>
                                        <th>serves</th>
                                        <th>level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{props.recipe.prepTime.value}</td>
                                        <td>{props.recipe.cookTime.value}</td>
                                        <td>{props.recipe.serves.value}</td>
                                        <td>{props.recipe.level.value}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <h3 className='mt-4' >Ingredients:</h3>
                            <Row>
                                <Col md={6}>
                                    <ListGroup>

                                        {props.recipe.ingredients.value.map((item, i) => (
                                            <ListGroup.Item key={i}>
                                                <span className="mr-2 font-weight-bold">{item.amount.value}</span>
                                                <span className="mr-2 font-weight-bold">{item.unit.value}</span>
                                                <span>{item.name.value}</span>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Col>
                            </Row>
                            <h3 className='mt-4'>Directions:</h3>
                            <ListGroup>
                                {props.recipe.description.value.map((item, i) => (
                                    <ListGroup.Item key={i}>
                                        <Row>
                                            <Col xs={1}><Badge className='p-2' variant="secondary">{item.stepNo.value}</Badge></Col>
                                            <Col>
                                                <span className="">{item.description.value}</span>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};
export default Recipe;