const JSON_DATA_PATH = './resources/data.json'
const JSON_DATA_SCHEMA = './resources/data.schema.json'

// TODO: JSON, loading data
// 1 Using require function
const jsonData = require(JSON_DATA_PATH);
const jsonSchema = require(JSON_DATA_SCHEMA);

// 1.1 Using the fs module
const fs = require("fs");
fs.readFile(JSON_DATA_PATH, function (err, data) {
    if (err) throw err;
    // console.log(JSON.parse(data));
});

// TODO: JSON, validate data
// 2.1 using ajv
const Ajv = require("ajv")
const ajv = new Ajv.default({ allErrors: true });
const validate = ajv.compile(jsonSchema)
console.log(validate(jsonData))

// 2.2 using is-my-json-valid
const validator = require('is-my-json-valid')
const validate1 = validator(jsonSchema)
console.log(validate1(jsonData))
