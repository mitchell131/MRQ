interface IFormatMoneyOptions {
  noDecimal?: boolean;
  showDash?: boolean;
  roundToIntegerWhenNoDecimals?: boolean;
  isCurrencyVisible?: boolean;
  isAbbreviated?: boolean;
}

/**
 * Formats money to a fixed number
 * @method formatAmount
 * @category utils
 * @returns {number} Formatted money
 */
export const formatAmount = (
  amount: number,
  options?: Pick<IFormatMoneyOptions, "noDecimal" | "showDash">,
  currency: string = "$"
) => {
  const { noDecimal, showDash = true } = options || {};

  let formatMoney = noDecimal
    ? Math.trunc(amount)
    : parseFloat((amount / 100).toFixed(2));

  if (!showDash && formatMoney < 0) {
    formatMoney = Math.abs(formatMoney);
  }
  const moneyWithCurrency = `${currency}${formatMoney}`;
  return moneyWithCurrency || "0";
};

/**
 * Formats money to a fixed number
 * @method getPriceDrop
 * @category utils
 * @returns {number} Formatted money
 */
export const getPriceDropInPerc = (
  currentPrice: number,
  previousPrice: number
): number => {
  const currentPercent = (currentPrice * 100) / previousPrice;
  return 100 - currentPercent;
};
