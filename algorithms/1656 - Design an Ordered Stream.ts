class OrderedStream {
    arr: string[];
    ptr = 0;
    constructor(n: number) {
        this.arr = new Array(n);
    }

    insert(idKey: number, value: string): string[] {
        this.arr[idKey - 1] = value;
        const ret = [];
        if (this.ptr === idKey - 1) {
            for (; this.arr[this.ptr]; this.ptr++)
                ret.push(this.arr[this.ptr]);
        }
        return ret;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
