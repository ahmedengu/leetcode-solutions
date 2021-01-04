/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let ret = 0;
    
    while(num>0){
        ret++;
        num = num % 2 === 0 ? num/2 : num-1;
    }
    
    return ret;
};
