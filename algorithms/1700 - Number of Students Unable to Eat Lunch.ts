function countStudents(students: number[], sandwiches: number[]): number {
    const count = _.countBy(students);
    for (let i = 0; i < sandwiches.length; i++)
        if (count[sandwiches[i]]) count[sandwiches[i]]--;
        else return count[1 - sandwiches[i]];
    return 0;
};
