const ftoc = function(fdeg) {
  celsiusDeg = (fdeg-32)*(5/9);
  celsiusDeg = Number(celsiusDeg.toFixed(1));
  return celsiusDeg
};

const ctof = function(cdeg) {
  fahrenDeg = cdeg*(9/5) + 32;
  fahrenDeg = Number(fahrenDeg.toFixed(1));
  return fahrenDeg
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
