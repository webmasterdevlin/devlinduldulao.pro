const getMonthsFromNow = (howManyMonths: number): string => {
  const months = new Date();
  months.setMonth(months.getMonth() + 7);
  const month = months.toLocaleString("en-US", {
    month: "long",
  });
  return month;
};
