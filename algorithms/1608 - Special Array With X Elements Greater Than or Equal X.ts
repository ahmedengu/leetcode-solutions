function specialArray(nums: number[]): number {
    const count = _.countBy(nums);
    const max = _.max(nums);
    let acc = 0;
    
    for (let i = max; i >= 0; i--){
        if (count[i]) acc += count[i];
        if (i === acc) return i;
    }
    
    return -1;
};
