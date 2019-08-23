class Calculator{

  // static calculateCompoundInterest({ baseAmount, annualInterest, calculationPeriod }){
  //   annualInterest /= 100;
  //   const months = calculationPeriod * 12;

  //   const totalInterest = baseAmount * (Math.pow(1 + annualInterest/12, months) - 1);
  //   const futureValue = totalInterest + baseAmount;
  //   return Number(futureValue.toFixed(2));
  // }

  static calculateCompoundInterest({ baseAmount, annualInterest, calculationPeriod, monthlyContribution }){
    const monthlyRate = annualInterest / 12;
    const monthsToGrow = calculationPeriod * 12;

    for(var i = 0; i < monthsToGrow; i++) {
      baseAmount = baseAmount * (1 + monthlyRate) + monthlyContribution;
    }
    return Math.round(baseAmount * 100) / 100;
  }

}

module.exports = Calculator;

// https://hassett.blog/2017/01/11/a-javascript-compound-interest-calculator/
