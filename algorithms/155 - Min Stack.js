/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push({
        min: this.min,
        val: x
    });
    this.min = Math.min(this.min, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const {
        val,
        min
    } = this.stack.pop() || {};
    this.min = min;
    return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const {
        val
    } = this.stack[this.stack.length - 1] || {};
    return val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
