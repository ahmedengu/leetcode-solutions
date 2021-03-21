function dayOfYear(date: string): number {
    const d = date.split('-');
    return Math.floor((new Date(+d[0], +d[1] - 1, +d[2]).getTime() - new Date(+d[0], 0, 0).getTime()) / 1000 / 60 / 60 / 24);
};
