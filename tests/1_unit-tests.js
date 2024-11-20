const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
suite('Unit Tests', function(){
  test("read a whole number input", function() {
    assert.equal(convertHandler.getNum("52L"),52,"read a whole number");
  });
  test("read a decimal number", function() {
    assert.equal(convertHandler.getNum("5.6L"),5.6,"read a decimal number");
  });
  test("read a fractional input", function() {
    assert.isOk(convertHandler.getNum("5/4kg"),5/4,"read a fractional number");
  });
  test("read a fractional input with a decimal", function() {
    assert.isOk(convertHandler.getNum('5.3/4gal'),5/4.6,"read a fractional number with decimal")
  });
  test("return an error on a double-fraction", function() {
    assert.equal(convertHandler.getNum('5/4/6lbs'),undefined,"this is an error");
  });
  test("default to a numerical input of 1 when no numerical input is provided", function() {
    assert.equal(convertHandler.getNum("kg"),1,"default to 1");
  });

  test("read each valid input unit", function() {
    let input = ['l','gal','km','mi','lbs','kg'];
    let output = ['L','gal','km','mi','lbs','kg'];

    input.forEach((e,i) => {
      assert.equal(convertHandler.getUnit(e),output[i],"valid unit");
    });
  });
  test("correctly return an error for an invalid input unit", function() {
    assert.equal(convertHandler.getUnit('4kilomegagram'),undefined,"return an error for an invalid input unit");
  });
  test("should return the correct return unit for each valid input unit", function() {
    let input = ['l','gal','km','mi','lbs','kg'];
    let output = ['gal','L','mi','km','kg','lbs'];

    input.forEach((e,i) => {
      assert.equal(convertHandler.getReturnUnit(e),output[i],"correct return unit");
    });
  });
  test("return the spelled-out string unit for each valid input unit", function() {
    let input = ['l','gal','km','mi','lbs','kg'];
    let output = ['liters','gallons','kilometers','miles','pounds','kilograms'];

    input.forEach((e,i) => {
      assert.equal(convertHandler.spellOutUnit(e),output[i],"spelled-out string unit is correct");
    });
  });

  test("correctly convert gal to L", function() {
    assert.approximately(convertHandler.convert(1,'gal'),3.78541,0.1,"correctly convert gal to L");
  });
  test("correctly convert L to gal", function() {
    assert.approximately(convertHandler.convert(1,'L'),1/3.78541,0.1,"correctly convert L to gal");
  });
  test("correctly convert mi to km", function() {
    assert.approximately(convertHandler.convert(1,'mi'),1.60934,0.1,"correctly convert mi to km");
  });
  test("correctly convert km to mi", function() {
    assert.approximately(convertHandler.convert(1,'km'),1/1.60934,0.1,"correctly convert km to mi");
  });
  test("correctly convert lbs to kg", function() {
    assert.approximately(convertHandler.convert(1,'lbs'),0.453592,0.1,"correctly convert lbs to kg");
  });
  test("correctly convert kg to lbs", function() {
    assert.approximately(convertHandler.convert(1,'kg'),1/0.453592,0.1,"correctly convert kg to lbs");
  });

});