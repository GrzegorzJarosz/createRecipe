import React, { useRef, useState } from 'react';
import './FormSteps.css';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import _ from 'lodash';
import { Button, Container, Row, Col, FormControl, FormGroup, Form } from 'react-bootstrap';
import { recipeDefinition } from './definitions';

const FormSteps = () => {
    const monitor = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [formStatus, setFormStatus] = useState({
        start: true,
        finished: false
    });
    const [recipeControls, setRecipeControls] = useState(Object.assign({}, recipeDefinition));

    const formView = ['a', 'b', 'c', 'd'];

    const switchPages = (param) => {
        const controlsLengt = Object.keys(formView).length - 1;
        let finished = false;
        let start = true;
        ((currentPage + param) === controlsLengt) ? finished = true : finished = false;
        (currentPage + param === 0) ? start = true : start = false;

        if ((param < 0 && currentPage !== 0) || (param > 0 && currentPage !== controlsLengt)) {
            setCurrentPage(currentPage + param);
        }

        const updatedFormStatus = { ...formStatus, start: start, finished: finished }
        setFormStatus(updatedFormStatus);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('done!');
    };

    let currFormView = formView[currentPage];

    return (
        <Container>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    nodeRef={monitor}
                    key={currentPage}
                    timeout={500}
                    classNames="fade">
                    <div ref={monitor}>
                        <Row>
                            <Col>Form</Col>
                        </Row>
                        <Row>
                            <Col>{currFormView}</Col>
                        </Row>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Row>
                <Col>
                    <Button variant="light" onClick={() => { switchPages(-1) }} disabled={formStatus.start}>prev</Button>
                </Col>
                <Col>
                    <Button variant="light" onClick={() => { switchPages(1) }} disabled={formStatus.finished}>next</Button>
                </Col>
            </Row>
            <Row>
                <Col>{formStatus.finished ? <Button onClick={handleSubmit}>zakoncz</Button> : ''}</Col>
            </Row>


        </Container>
    )
}
export default FormSteps;