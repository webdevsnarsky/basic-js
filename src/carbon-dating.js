const MODERN_ACTIVITY= 15;  // N0
const HALF_LIFE_PERIOD= 5730; // t 

module.exports = function dateSample(sampleActivity) {
  let reg=/^[А-яA-z]+$/;
  let k = 0.693 / 5730;
  let numb = parseFloat(sampleActivity);

  if (typeof(sampleActivity) !== 'string' || sampleActivity === null || reg.test(sampleActivity) === true || sampleActivity > 15 || sampleActivity <= 0 || isNaN(numb)) {
    return false;
  }

    return Math.ceil(Math.log(MODERN_ACTIVITY / numb) / k);
    
};
