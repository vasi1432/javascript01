function Days(date1, date2) {
  if (date2 > date1) {
    return (new Date(date2) - new Date(date1)) / 86400000;
  } else {
    return (new Date(date1) - new Date(date2)) / 86400000;
  }
}
console.log(Days("2022-03-30", "2022-04-04"));
