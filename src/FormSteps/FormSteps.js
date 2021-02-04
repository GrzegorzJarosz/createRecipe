import React, { useRef, useState, Fragment } from 'react';
import './FormSteps.css';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import _ from 'lodash';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { recipeDefinition } from './definitions';
import Input from '../UI/Input/Input';

const FormSteps = () => {
    const monitor = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [formStatus, setFormStatus] = useState({
        start: true,
        finished: false
    });
    const [recipeControls, setRecipeControls] = useState(Object.assign({}, recipeDefinition));

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

    const handleInputChange = (e, fieldName) => {
        const updatedRecipeControls = _.cloneDeep(recipeControls);
        let fieldToOperate = _.get(updatedRecipeControls, fieldName);
        fieldToOperate.value = e.target.value;
        setRecipeControls(updatedRecipeControls);
    };

    const handleAddFields = (fieldName) => {
        console.log('add');
    };

    const handleRemoveFields = (fieldName, i) => {
        console.log('remove');
    };


    const handleSubmit = e => {
        e.preventDefault();
        console.log('done!');
    };


    const formViewArray = [];
    for (let key in recipeControls) {

        if (Array.isArray(recipeControls[key].value)) {

            let subFields = recipeControls[key].value.map((item, i) => {
                let helperArr = [];
                for (let key2 in item) {
                    helperArr.push({
                        id: key2,
                        whoIs: `${key}.value[${i}].${key2}`,
                        config: item[key2]
                    });
                };
                return helperArr;
            });

            formViewArray.push({
                id: key,
                config: subFields
            });

        } else {

            formViewArray.push({
                id: key,
                whoIs: `${key}`,
                config: recipeControls[key]
            });
        };
    };


    let formView = formViewArray.map((element) => {

        if (Array.isArray(element.config)) {

            let sectionOfFields = element.config.map((subSection, index) => {

                let subElToDispl = subSection.map((el, i) => {

                    if (el.id === 'stepNo') {
                        el.config.value = parseInt(el.whoIs.split(/\[|\]/)[1]) + 1;
                        return (<p key={`${el.id}-stepNo`}>Step {el.config.value}</p>);
                    };

                    return (
                        <Input
                            key={el.id}
                            whoIs={el.whoIs}
                            elementType={el.config.elementType}
                            elementConfig={el.config.elementConfig}
                            value={el.config.value}
                            lab={el.id}
                            changed={(e) => handleInputChange(e, el.whoIs)}
                        />
                    );
                });

                return (
                    <Fragment key={index}>
                        {subElToDispl}
                        <Button
                            className={'mr-2'}
                            type="button"
                            onClick={() => handleAddFields(element.id)}
                        > + </Button>
                        < Button
                            variant="danger"
                            className=""
                            type="button"
                            onClick={() => handleRemoveFields(element.id, index)}
                        > - </Button >
                    </Fragment >
                );
            });

            return (
                <>
                    <p>{element.id}</p>
                    {sectionOfFields}
                </>
            );

        } else {

            return (
                <Input
                    key={element.id}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    lab={element.id}
                    whoIs={element.whoIs}
                    changed={(e) => handleInputChange(e, element.whoIs)}
                />
            )
        };

    });

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

            <Row className='mb-3 mt-3 justify-content-around'>
                <Button variant="light" onClick={() => { switchPages(-1) }} disabled={formStatus.start}>prev</Button>
                <Button variant="light" onClick={() => { switchPages(1) }} disabled={formStatus.finished}>next</Button>
            </Row>
            <Row >
                <Col>{formStatus.finished ? <Button onClick={handleSubmit}>zakoncz</Button> : ''}</Col>
            </Row>

        </Container>
    )
}
export default FormSteps;