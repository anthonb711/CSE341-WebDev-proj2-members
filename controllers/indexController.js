const { validationResult, matchedData } = require('express-validator');

const getHome = (req, res) => {
  const result = validationResult(req); // returns 'true' if no errors are found in the validation
  if (result.isEmpty()) {
    const data = matchedData(req); // this pulls in all the fields of the query as an obj
    if (data.person === undefined) {
      return res.send(`Hello, from Index Controller!`);
    }
    return res.send(`Hello, ${data.person} from Index Controller!`);
  }
  res.send({ errors: result.array() });
};

module.exports = { getHome };
