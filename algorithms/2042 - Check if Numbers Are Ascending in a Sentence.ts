function areNumbersAscending(s: string): boolean {
    let last = -Infinity;
    for (const num of s.split(/[^0-9]/).filter(s => s)) {
        if (+num <= last) return false;
        last = +num;
    }
    return true;
};
