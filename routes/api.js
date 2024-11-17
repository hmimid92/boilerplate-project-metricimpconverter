'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', function(req, res) {
        const input = req.query.input;
        const initNum = convertHandler.getNum(input);
        const initUnit = convertHandler.getUnit(input);
        const returnNum = convertHandler.convert(initNum,initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        let unitWordInit = convertHandler.spellOutUnit(initUnit);
        let unitWordReturn = convertHandler.spellOutUnit(returnUnit);

        res.json({ 
           initNum: initNum,
           initUnit: initUnit,
           returnNum: returnNum,
           returnUnit: returnUnit, 
           string: convertHandler.getString(initNum, unitWordInit, returnNum, unitWordReturn)
           });
      })
};
