import joi from 'joi-oid'

const schema = joi.object({
    email: joi.string().required().email().message({
            'string.base' : 'Use a valid email',
            'string.email' : 'This is not an email'
       }),
       password: joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).min(8).messages({
        'string.base' : "The password must be a string",
        'string.pattern.base' : 'Must include an uppercase letter, a lowercase letter, and a number',
        'string.min' : 'Must have 8 characters at least'
       })
})

export default schema