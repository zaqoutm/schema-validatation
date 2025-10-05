const fs = require('fs');
const xml2js = require('xml2js');
const validator = require('is-my-json-valid');
const XML_DATA_PATH = './resources/data.xml';
const SCHEMA = require('./resources/data.schema.json');

fs.readFile(XML_DATA_PATH, function (err, data) {
  // parse xml
  xml2js.parseString(data, (e, res) => {
    let user = {};

    try {
      user = {
        firstName: res.user?.firstName[0],
        lastName: res.user?.lastName[0],
        age: parseInt(res.user?.age[0], 10),
      };
    } catch (err) {
      console.error('mapping error!');
      return;
    }

    const Validate = validator(SCHEMA);
    console.log('is it valid?', Validate(user));
  });
});
