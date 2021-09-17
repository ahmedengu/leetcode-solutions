function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    const ret = [];
    while (firstList.length && secondList.length) {
        const left = Math.max(firstList[0][0], secondList[0][0]);
        const right = Math.min(firstList[0][1], secondList[0][1]);
        if (left <= right)
            ret.push([left, right]);

        if (firstList[0][1] < secondList[0][1])
            firstList.shift();
        else
            secondList.shift();
    }
    return ret;
};
