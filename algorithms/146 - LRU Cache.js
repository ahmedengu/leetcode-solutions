/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const {
        map
    } = this;
    const value = map.get(key)
    if (!value) {
        return -1;
    }

    map.delete(key);
    map.set(key, value);

    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const {
        map
    } = this;
    if (map.has(key)) {
        map.delete(key);
    }

    map.set(key, value);

    if (map.size > this.capacity) {
        map.delete(map.keys().next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
