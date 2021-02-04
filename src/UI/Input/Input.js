import React from 'react';
import classes from './Input.module.css'
import { FormControl, Form } from 'react-bootstrap';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <Form.Group>
                <Form.Label>{props.lab}</Form.Label>
                <FormControl
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                ></FormControl>
                {/* <Form.Text className=""></Form.Text> */}
            </Form.Group>
            break;
        case ('textarea'):
            inputElement = <Form.Group>
                <Form.Label>{props.lab}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            </Form.Group>
            break;
        case ('select'):
            inputElement = <Form.Group>
                <Form.Label>{props.lab}</Form.Label>
                <Form.Control
                    as="select"
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            break;
        default:
            inputElement = <Form.Group>
                <Form.Label>{props.lab}</Form.Label>
                <FormControl
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                ></FormControl>
                {/* <Form.Text className=""></Form.Text> */}
            </Form.Group>
    }

    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    )
};

export default Input;