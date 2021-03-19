class MyStack {
    q: number[];
    constructor() {
        this.q = [];
    }

    push(x: number): void {
        this.q.unshift(x);
    }

    pop(): number {
        const tmp = [];
        while (this.q.length > 1) {
            tmp.unshift(this.q.pop());
        }
        const ret = this.q.pop();
        this.q = tmp;
        return ret;
    }

    top(): number {
        const ret = this.pop();
        this.push(ret);
        return ret;
    }

    empty(): boolean {
        return this.q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
