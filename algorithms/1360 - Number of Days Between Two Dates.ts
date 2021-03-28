function daysBetweenDates(date1: string, date2: string): number {
    return Math.abs(Date.parse(date1) - Date.parse(date2)) / 1000 / 60 / 60 / 24;
};
