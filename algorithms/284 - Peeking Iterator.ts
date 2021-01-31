/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    iterator: Iterator;
    nextVal: number | null;

    constructor(iterator: Iterator) {
        this.iterator = iterator;
        this.nextVal = null;
    }

    peek(): number {
        if (this.nextVal !== null) return this.nextVal;
        this.nextVal = this.iterator.next();
        return this.nextVal;
    }

    next(): number {
        if (this.nextVal !== null) {
            const next = this.nextVal;
            this.nextVal = null;
            return next;
        }

        return this.iterator.next();
    }

    hasNext(): boolean {
        return this.nextVal !== null || this.iterator.hasNext();
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
