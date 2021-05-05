function dominantIndex(nums: number[]): number {
    const numbersQueue = new MaxPriorityQueue({ priority: (o) => o.v });
    nums.forEach((v, i) => numbersQueue.enqueue({ i, v }));
    const max1 = numbersQueue.dequeue().element;
    const max2 = numbersQueue.dequeue()?.element;
    return !max2 || max2.v * 2 <= max1.v ? max1.i : -1;
};
