class FrontMiddleBackQueue {
    q: number[];

    constructor() {
        this.q = [];
    }

    pushFront(val: number): void {
        this.q.unshift(val);
    }

    pushMiddle(val: number): void {
        this.q.splice((this.q.length) / 2, 0, val);

    }

    pushBack(val: number): void {
        this.q.push(val);
    }

    popFront(): number {
        return this.q.shift() || -1;
    }

    popMiddle(): number {
        return this.q.splice((this.q.length - 1) / 2, 1)[0] || -1;
    }

    popBack(): number {
        return this.q.pop() || -1;
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
