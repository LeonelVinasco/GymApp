const { body, validationResult }  = require('express-validator')

exports.valRulesSignUp = [
    body('username').exists().isString().isLength({min:5,max:30}),
    body('password').exists().isString().isLength({min:5,max:30}),
    body('email').exists().normalizeEmail().isEmail().isLength({min:12,max:50}),
    body('gym').exists().isString().isLength({min:1,max:7}),
    body('admin').isBoolean(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array)
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];

exports.valRulesSignIn = [
    body('username').exists().isString().isLength({min:5,max:30}),
    body('password').exists().isString().isLength({min:5,max:30}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array)
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];

exports.valRulesListUsers = [
    body('id').exists().isNumeric().isLength({min:1,max:7}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array)
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];

exports.valRulesInsertCity = [
    body('city').exists().isString().isLength({min:3,max:30}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array)
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];

exports.valRulesInsertGym = [
    body('city').exists().isNumeric().isLength({min:1,max:7}),
    body('gym').exists().isString().isLength({min:3,max:30}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array)
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];