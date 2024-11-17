'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', function(req, res) {
        let unitString = req.query.input;
        const initNum = convertHandler.getNum(unitString);
        const initUnit = convertHandler.getUnit(unitString);
        const returnNum = convertHandler.convert(unitString);
        const returnUnit = convertHandler.getUnit(unitString);
        let unitWord = convertHandler.spellOutUnit(unitString)
        res.json({ 
           initNum: initNum,
           initUnit: initUnit,
           returnNum: returnNum,
           returnUnit: returnUnit, 
           string: convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
           });
      })
};
