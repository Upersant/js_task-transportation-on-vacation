/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const prisePerDay = 40;
  const day = Number(days);
  let cost = day * prisePerDay;
  const discountTriday = 20;
  const discountWeek = 50;
  const week = 7;
  const triday = 3;

  if (day >= week) {
    cost -= discountWeek;

    return cost;
  }

  if (day >= triday) {
    cost -= discountTriday;

    return cost;
  }

  return cost;
}

module.exports = calculateRentalCost;
