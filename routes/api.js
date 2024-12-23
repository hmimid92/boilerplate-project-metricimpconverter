'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', function(req, res) {
        const input = req.query.input;
        const initNum = convertHandler.getNum(input);
        const initUnit = convertHandler.getUnit(input);
    if(initUnit === undefined && initNum === undefined) {
      res.json("invalid number and unit");
     } else if(initUnit === undefined) {
      res.json("invalid unit");
     } else if(initNum === undefined) {
      res.json("invalid number");
     } else {
      const returnNum = Number(convertHandler.convert(initNum,initUnit).toFixed(5));
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const unitWordInit = convertHandler.spellOutUnit(initUnit);
      const unitWordReturn = convertHandler.spellOutUnit(returnUnit);

      res.json({ 
         initNum: initNum,
         initUnit: initUnit,
         returnNum: returnNum,
         returnUnit: returnUnit, 
         string: convertHandler.getString(initNum, unitWordInit, returnNum, unitWordReturn)
         });
     }
      });
};
