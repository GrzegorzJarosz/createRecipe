export const units = [{
    value: '',
    displayValue: ''
},
{
    value: 'l',
    displayValue: 'l'
},
{
    value: 'ml',
    displayValue: 'ml'
},
{
    value: 'łyż',
    displayValue: 'łyż'
},
{
    value: 'Łyż',
    displayValue: 'Łyż'
},
{
    value: 'g',
    displayValue: 'g'
},
{
    value: 'kg',
    displayValue: 'kg'
},
{
    value: 'szkl',
    displayValue: 'szkl'
},
{
    value: 'szt',
    displayValue: 'szt'
}
];

export const levels = [{
    value: '',
    displayValue: ''
}, {
    value: 'easy',
    displayValue: 'easy'
},
{
    value: 'medium',
    displayValue: 'medium'
},
{
    value: 'hard',
    displayValue: 'hard'
}
];

export const recipeDefinition = {
    title: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'new recipe\'s title'
        },
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        fieldDescr: 'Recipe\'s title'
    },
    shortDescription: {
        value: '',
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            placeholder: 'short recipe\'s description'
        },
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        fieldDescr: 'Recipe\'s short description'
    },
    prepTime: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'time in minutes'
        },
        validation: {
            required: true,
            numberType: true
        },
        valid: false,
        touched: false,
        fieldDescr: 'preparation time'
    },
    cookTime: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'time in minutes'
        },
        validation: {
            required: true,
            numberType: true
        },
        valid: false,
        touched: false,
        fieldDescr: 'cooking time'
    },
    serves: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'number'
        },
        validation: {
            required: true,
            numberType: true
        },
        valid: false,
        touched: false,
        fieldDescr: 'serves'
    },
    level: {
        value: '',
        elementType: 'select',
        elementConfig: {
            options: levels
        },
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        fieldDescr: 'level of difficulty'
    },
    ingredients: {
        value: [{
            ingredientId: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ingredient\'s Id'
                },
                validation: {
                    required: true,
                    numberType: true
                },
                valid: false,
                touched: false
            },
            amount: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'amount of ingredient'
                },
                validation: {
                    required: true,
                    numberType: true
                },
                valid: false,
                touched: false
            },
            unit: {
                value: '',
                elementType: 'select',
                elementConfig: {
                    options: units
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            name: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ingredient\'s name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }]
    },
    description: {
        value: [{
            stepNo: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'number'
                },
                validation: {
                    required: true
                },
                valid: true,
                touched: false
            },
            description: {
                value: '',
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'step\'s content'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }]
    },
    imgSrc: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'url of image'
        },
        validation: {
            required: true,
            minLength: 3
        },
        valid: false,
        touched: false,
        fieldDescr: 'image url'
    }
};