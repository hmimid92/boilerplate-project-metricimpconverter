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
  r = Number(result2[0]);
    if(Number.isNaN(r)) {
      r = 1;
    }
  }
}    
    return r;
  };
  
  this.getUnit = function(input) {
    let result = input.split('').filter(el => /[a-zA-Z]/.test(el));
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = initUnit.join('');
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    const units = ['l','gal','km','mi','lbs','kg'];

    let result;
    if(!units.includes(unit.split('').map(el => el.toLowerCase()).join(''))) {
      result = 'invalid unit';
    }  

    if(result === 'l') {
      result = 'L';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit) {
      case 'L': result = initNum / galToL;
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
    let result;
    if(returnNum === 'invalid number' && returnUnit === 'invalid unit') {
     result = 'invalid number and unit';
    } else {
     result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
