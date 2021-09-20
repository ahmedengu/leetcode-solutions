function finalValueAfterOperations(operations: string[]): number {
    return operations.reduce((acc, v) => v.includes('+') ? ++acc : --acc, 0);
};
