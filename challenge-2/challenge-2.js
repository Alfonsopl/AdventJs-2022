function countHours(year, holidays) {
    let holidaysNotOnWeekends = 0;
    const hoursPerDay = 2;
    holidays.forEach (day => {
        const whichDay = new Date(year + '/' + day).getDay();
        if (!(whichDay === 0 || whichDay === 6)){
            holidaysNotOnWeekends ++;
        }
    })
  return holidaysNotOnWeekends * hoursPerDay;
}