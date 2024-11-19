function ConvertHandler() {
  
  this.getNum = function(input) {

    let result2 = input.split('').filter(el => !/[a-zA-Z]/.test(el));
    let temp,r;
   if(result2.filter(el => el === '/').length > 1) {
     r = 'invalid number';
   } else {
     if(result2.includes('/')) {
     temp = result2.join('').split('/')
     r = temp[0]/temp[1];
     } else {
     r = Number(result2.join(''));
       if(Number.isNaN(r)) {
         r = 1;
       }
     }
   }    
    return r;
  };
  
  this.getUnit = function(input) {
    let result = input.split('').filter(el => /[a-zA-Z]/.test(el)).join('');
    switch(result.toLowerCase()) {
      case 'l': result = 'L';
      break;
      case 'gal': result = 'gal';
      break;
      case 'km': result = 'km';
      break;
      case 'mi': result = 'mi';
      break;
      case 'lbs': result = 'lbs';
      break;
      case 'kg': result = 'kg';
      break;
      default: result = 'invalid unit';
   }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    let result;
    switch(initUnit.toLowerCase()) {
       case 'l': result = 'gal';
       break;
       case 'gal': result = 'L';
       break;
       case 'km': result = 'mi';
       break;
       case 'mi': result = 'km';
       break;
       case 'lbs': result = 'kg';
       break;
       case 'kg': result = 'lbs';
       break;
       default: result = 'invalid unit';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    switch(unit.toLowerCase()) {
      case 'l': result = 'litres';
      break;
      case 'gal': result = 'galons';
      break;
      case 'km': result = 'kilometers';
      break;
      case 'mi': result = 'miles';
      break;
      case 'lbs': result = 'pounds';
      break;
      case 'kg': result = 'kilograms';
      break;
      default: console.log('invalid unit')
   }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()) {
       case 'l': result = initNum / galToL;
       break;
       case 'gal': result = initNum * galToL;
       break;
       case 'km': result = initNum / miToKm;
       break;
       case 'mi': result = initNum * miToKm;
       break;
       case 'lbs': result = initNum * lbsToKg;
       break;
       case 'kg': result = initNum / lbsToKg;
       break;
       default: console.log("not possible to do the conversion")
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
