function maxDepth(s: string): number {
    const stack = [];
    let max = 0;
    for (const c of s) {
        if (c === '(') {
            stack.push('(');
            max = Math.max(max, stack.length);
        } else if (c === ')') stack.pop();
    }
    return max;
};
