/**
 * @param {string} homepage
 */
var BrowserHistory = function(url) {
    this.history = { url };
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.next = { url, prev: this.history };
    this.history = this.history.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if (!steps || !this.history.prev) return this.history.url;
    this.history = this.history.prev;
    return this.back(steps - 1);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (!steps || !this.history.next) return this.history.url;
    this.history = this.history.next;
    return this.forward(steps - 1);
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
