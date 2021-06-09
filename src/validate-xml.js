const XML_DATA_PATH = './resources/data.xml'
const XML_DATA_SCHEMA_PATH = './resources/data.schema.xsd'

const validator = require('xsd-schema-validator');

// TODO: validate xml file
validator.validateXML({file: XML_DATA_PATH}, XML_DATA_SCHEMA_PATH,
    function (err, result) {
        console.log(result.valid)
    });
