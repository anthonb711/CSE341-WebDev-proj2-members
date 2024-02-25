const { validationResult } = require ('express-validator');

const getHome = (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person} from Index Controller!`);
    }
     res.send({errors : result.array() });
};

module.exports = { getHome };
