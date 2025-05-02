import joi from 'joi-oid'

const schema = joi.object({
    firstName: joi.string().required().pattern(/^[A-Za-z]+$/).messages({
        'string.base' : 'Numbers are not allowed',
        'string.pattern.base' : 'Do not include special characters or numbers'
    }),
    lastName: joi.string().required().pattern(/^[A-Za-z]+$/).messages({
        'string.base' : 'Numbers are not allowed',
        'string.pattern' : 'Do not include special characters or numbers'
    }),
    email: joi.string().required().email().message({
        'string.base' : 'Use a valid email',
        'string.email' : 'This is not an email'
   }),
   password: joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).min(8).messages({
    'string.base' : "The password must be a string",
    'string.pattern.base' : 'Must include an uppercase letter, a lowercase letter, and a number',
    'string.min' : 'Must have 8 characters at least'
   }),
   photo: joi.string().required().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).messages({
        'string.uri': 'You must provide a valid link',
        'string.pattern.base': 'The link must be an image (.jpg, .jpeg, .png, .webp)'
    }),
    country: joi.string().required()
})

export default schema