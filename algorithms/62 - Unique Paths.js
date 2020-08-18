/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m===1||n===1) return 1;
    m-=1;
    n-=1;
    
    const map = {};
    const fact = (x)=> {
        if(x===1 || x===0) return 1;
        
        if(!map[x]) {
            map[x] = x * fact(x-1);
        };

        return map[x];
    }

    return fact(m+n)/ (fact(m)*fact(n))
};
