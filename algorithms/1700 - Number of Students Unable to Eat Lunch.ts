function countStudents(students: number[], sandwiches: number[]): number {
    const count = _.countBy(students);
    for (const s of sandwiches)
        if (!count[s]--) return count[1 - s];
    return 0;
};
