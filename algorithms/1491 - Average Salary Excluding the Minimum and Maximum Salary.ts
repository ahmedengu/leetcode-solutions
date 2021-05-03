function average(salary: number[]): number {
    return _.sum(salary.sort((a, b) => a - b).slice(1, -1)) / (salary.length - 2);
};
