function minEatingSpeed(piles: number[], h: number): number {
    let l = 1;
    let r = 10 ** 9;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (canEat(piles, h, mid)) r = mid;
        else l = mid + 1;
    }

    return l;
};

const canEat = (piles: number[], h: number, mid: number): boolean => {
    let time = 0;
    for (const p of piles)
        time += Math.ceil(p / mid);
    return time <= h;
}
