function destCity(paths: string[][]): string {
    return paths.reduce((acc, [a, b]) =>
        (typeof acc === 'string' || acc[b]) ? acc : b,
        _.countBy(paths, ([a, b]) => a));
};
