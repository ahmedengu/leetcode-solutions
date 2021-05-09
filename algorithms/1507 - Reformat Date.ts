function reformatDate(date: string): string {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let [day, month, year] = date.split(' ');
    day = String(parseInt(day)).padStart(2, '0');
    month = String(months.indexOf(month) + 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
