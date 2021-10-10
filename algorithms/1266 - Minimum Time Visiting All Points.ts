function minTimeToVisitAllPoints(points: number[][]): number {
    let ret = 0,
        i = 1,
        len = points.length;

    for (; i < len; i += 1) {
        ret += Math.max(Math.abs(points[i - 1][0] - points[i][0]),
            Math.abs(points[i - 1][1] - points[i][1]));
    }

    return ret;
};
