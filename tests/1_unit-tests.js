const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
suite('Unit Tests', function(){
  test("read a whole number input", function() {
    assert.isOk(convertHandler.getNum(52),"read a whole number");
  });
  test("read a decimal number", function() {
    assert.isOk(convertHandler.getNum(5.6),"read a decimal number");
  });
  test("read a fractional input", function() {
    assert.isOk(convertHandler.getNum(5/4),"read a fractional number");
  });
  test("read a fractional input with a decimal", function() {
    assert.isOk(convertHandler.getNum(5.3/4),"read a fractional number with decimal")
  });
  test("return an error on a double-fraction", function() {
    assert.isNotTrue(convertHandler.getNum(5/4/6),"this is an error");
  });
  test("default to a numerical input of 1 when no numerical input is provided", function() {
    assert.equal(convertHandler.getNum(),1,"default to 1");
  });

  function readUnit(arr) {
    return arr.every(el => convertHandler.getUnit(el) !== 'invalid unit');
  }
  function readReturnUnit(arr) {
    return arr.map(el => convertHandler.getReturnUnit(el)).filter(e => convertHandler.getReturnUnit(e) !== 'invalid unit');
  }
  function readReturnSpellUnit(arr) {
    return arr.map(el => convertHandler.spellOutUnit(el)).filter(e => e !== 'invalid unit');
  }
  test("read each valid input unit", function() {
    assert.isTrue(readUnit(['l','gal','km','mi','lbs','kg']),"default to 1");
  });
  test("return the correct return unit for each valid input unit", function() {
    assert.sameMembers(readReturnUnit(['l','gal','km','mi','lbs','kg']),['L','gal','km','mi','lbs','kg'],"correct return unit");
  });
  test("correctly return an error for an invalid input unit", function() {
    assert.equal(convertHandler.getReturnUnit('dsdw'),'invalid unit',"return an error for an invalid input unit");
  });
  test("return the spelled-out string unit for each valid input unit", function() {
    assert.sameMembers(readReturnSpellUnit(['l','gal','km','mi','lbs','kg']),['litres','galons','kilometers','miles','pounds','kilograms'],"spelled-out string unit correct");
  });
  test("correctly convert gal to L", function() {
    assert.equal(convertHandler.convert(1,'gal'),3.78541,"correctly convert gal to L");
  });
  test("correctly convert L to gal", function() {
    assert.equal(convertHandler.convert(1,'L'),1/3.78541,"correctly convert L to gal");
  });
  test("correctly convert mi to km", function() {
    assert.equal(convertHandler.convert(1,'mi'),1.60934,"correctly convert mi to km");
  });
  test("correctly convert km to mi", function() {
    assert.equal(convertHandler.convert(1,'km'),1/1.60934,"correctly convert km to mi");
  });
  test("correctly convert lbs to kg", function() {
    assert.equal(convertHandler.convert(1,'lbs'),0.453592,"correctly convert lbs to kg");
  });
  test("correctly convert kg to lbs", function() {
    assert.equal(convertHandler.convert(1,'kg'),1/0.453592,"correctly convert kg to lbs");
  });
});