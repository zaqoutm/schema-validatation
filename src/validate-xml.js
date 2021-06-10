const fs = require('fs');
const xml2js = require('xml2js');
const validator = require('is-my-json-valid')
const XML_DATA_PATH = './resources/customer.xml'
const CUSTOMER_SCHEMA_PATH = require('./resources/customer.schema.json')

// TODO: convert xml data to json
fs.readFile(XML_DATA_PATH, function (err, data) {
    xml2js
        .parseStringPromise(data, {valueProcessors: [xml2js.processors.parseNumbers]})
        .then(function (result) {
            // console.log(JSON.stringify(result, null, 2))
            // TODO validate result against customer schema
            const validate1 = validator(CUSTOMER_SCHEMA_PATH)
            console.log(validate1(result))

        })
        .catch(function (err) {
            console.error(err)
        });
});


// map to customer object
