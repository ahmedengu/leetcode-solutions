function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const y = stones.pop();
        const x = stones.pop();
        if (x !== y) {
            stones.push(y - x);
        }
    }

    return stones[0] || 0;
};
