const { validationResult, matchedData } = require ('express-validator');

const getHome = (req, res) => {
    const result = validationResult(req); // returns 'true' if no errors areound in the validation
    if (result.isEmpty()) {
        const data = matchedData(req); // this pulls in all the fields of the query as an obj
        return res.send(`Hello, ${data.person} from Index Controller!`);
    }
     res.send({errors : result.array() });
};

module.exports = { getHome };
