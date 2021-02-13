import React, { useRef, useState, Fragment } from 'react';
import './FormSteps.css';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import _ from 'lodash';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { recipeDefinition } from './definitions';
import Input from '../UI/Input/Input';
import { FaTrashAlt } from 'react-icons/fa';

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
        fieldToOperate.valid = checkValidity(e.target.value, fieldToOperate.validation);
        fieldToOperate.touched = true;
        setRecipeControls(updatedRecipeControls);
    };

    const handleAddFields = (fieldName) => {
        const updatedRecipeControls = _.cloneDeep(recipeControls);
        let fieldToOperate = _.get(updatedRecipeControls, fieldName);
        fieldToOperate.value.push(Object.assign({}, recipeDefinition[fieldName].value[0]));
        setRecipeControls(updatedRecipeControls);
    };

    const handleRemoveFields = (fieldName, i) => {
        if (recipeControls[fieldName].value.length === 1) { return };
        const updatedRecipeControls = _.cloneDeep(recipeControls);
        let fieldToOperate = _.get(updatedRecipeControls, fieldName);
        fieldToOperate.value.splice(i, 1);
        setRecipeControls(updatedRecipeControls);
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
                            valid={el.config.valid}
                            touched={el.config.touched}
                        />
                    );
                });

                return (


                    <div key={index} className='section-group'>

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
                        ><FaTrashAlt style={{ color: '#ffffff' }} /></Button >
                    </div >
                );
            });

            return (<><p>{element.id}</p>{sectionOfFields}</>);

        } else {

            return (
                <>
                    <div className={'mb-3'}>{element.config.fieldDescr}</div>
                    <Input
                        key={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        lab={element.id}
                        whoIs={element.whoIs}
                        changed={(e) => handleInputChange(e, element.whoIs)}
                        valid={element.config.valid}
                        touched={element.config.touched}
                    />
                </>
            )
        };

    });

    const checkValidity = (value, rules) => {
        if (!rules) {
            return true
        }
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.numberType) {
            isValid = !isNaN(value.trim()) && isValid;
        }
        return isValid;
    };

    //form validation
    let validationStatus;
    if (Array.isArray(formViewArray[currentPage].config)) {
        let validSection = false;
        formViewArray[currentPage].config.map((item) => {
            for (let i = 0; i < item.length; i++) {
                if (!item[i].config.valid) {
                    validSection = false;
                    break;
                } else {
                    validSection = true;
                }
            }
        });
        validationStatus = validSection;
    } else {
        validationStatus = formViewArray[currentPage].config.valid;
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
                            <Col>
                                <h1 className="mt-3 mb-5">Create Recipe</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>{currFormView}</Col>
                        </Row>
                    </div>
                </CSSTransition>
            </SwitchTransition>

            <Row className='mb-3 mt-3 justify-content-around'>
                <Button variant="light" onClick={() => { switchPages(-1) }} disabled={formStatus.start}>prev</Button>
                <Button variant="light" onClick={() => { switchPages(1) }} disabled={formStatus.finished || !validationStatus}>next</Button>
            </Row>
            <Row >
                <Col>{(formStatus.finished && validationStatus) ? <Button onClick={handleSubmit}>zakoncz</Button> : ''}</Col>
            </Row>

        </Container>
    )
}
export default FormSteps;