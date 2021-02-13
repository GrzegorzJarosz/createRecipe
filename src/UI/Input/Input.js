import React from 'react';
import classes from './Input.module.css'
import { FormControl, Form } from 'react-bootstrap';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <Form.Group>
                <FormControl
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    isInvalid={!props.valid && props.touched}
                    isValid={props.valid}
                ></FormControl>
            </Form.Group>
            break;
        case ('textarea'):
            inputElement = <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    isInvalid={!props.valid && props.touched}
                    isValid={props.valid}
                />
            </Form.Group>
            break;
        case ('select'):
            inputElement = <Form.Group>
                <Form.Control
                    as="select"
                    value={props.value}
                    onChange={props.changed}
                    isInvalid={!props.valid && props.touched}
                    isValid={props.valid}
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
                <FormControl
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    isInvalid={!props.valid && props.touched}
                    isValid={props.valid}
                ></FormControl>
            </Form.Group>
    }

    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    )
};

export default Input;