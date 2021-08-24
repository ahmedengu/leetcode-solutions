function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack = [];
    while (pushed.length || popped.length) {
        if (popped[0] === stack[stack.length - 1]) {
            stack.pop();
            popped.shift();
        } else {
            if (pushed.length === 0) return false;
            stack.push(pushed.shift());
        }
    }
    return pushed.length === 0 && popped.length === 0;
};
