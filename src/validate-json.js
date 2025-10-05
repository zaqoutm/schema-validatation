const jsonData = require('./resources/data.json');
const jsonSchema = require('./resources/data.schema.json');
const validator = require('is-my-json-valid');

const Validate = validator(jsonSchema);
console.log(Validate(jsonData));
