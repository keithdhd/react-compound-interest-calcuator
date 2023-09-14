const calculateCompoundInterest = (
  baseAmount,
  annualInterest,
  calculationPeriod,
  monthlyContribution = 0
) => {
  annualInterest /= 100;
  const monthlyRate = annualInterest / 12;
  const monthsToGrow = calculationPeriod * 12;
  baseAmount += monthlyContribution;

  for (var i = 0; i < monthsToGrow; i++) {
    baseAmount = baseAmount * (1 + monthlyRate) + monthlyContribution;
  }

  baseAmount -= monthlyContribution;

  return Number(baseAmount.toFixed(2));
};

module.exports = calculateCompoundInterest;
