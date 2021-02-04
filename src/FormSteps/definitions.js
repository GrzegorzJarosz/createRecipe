export const units = [{
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
        }
    },
    shortDescription: {
        value: '',
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            placeholder: 'short recipe\'s description'
        }
    },
    prepTime: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'time in minutes'
        }
    },
    cookTime: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'time in minutes'
        }
    },
    serves: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'number'
        }
    },
    level: {
        value: '',
        elementType: 'select',
        elementConfig: {
            options: levels
        }
    },
    ingredients: {
        value: [{
            ingredientId: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ingredient\'s Id'
                }
            },
            amount: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'amount of ingredient'
                }
            },
            unit: {
                value: '',
                elementType: 'select',
                elementConfig: {
                    options: units
                }
            },
            name: {
                value: '',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ingredient\'s name'
                }
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
                }
            },
            description: {
                value: '',
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'step\'s content'
                }
            }
        }]
    },
    imgSrc: {
        value: '',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'url of image'
        }
    }
};