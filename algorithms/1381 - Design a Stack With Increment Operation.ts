class CustomStack {
    maxSize: number;
    stack: number[];
    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(x: number): void {
        if (this.stack.length < this.maxSize)
            this.stack.push(x);
    }

    pop(): number {
        return this.stack.pop() ?? -1;
    }

    increment(k: number, val: number): void {
        const len = Math.min(k, this.stack.length);
        for (let i = 0; i < len; i++)
            this.stack[i] += val;
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
