function hasGroupsSizeX(deck: number[]): boolean {
    return _.values(_.countBy(deck)).reduce(gcd) >= 2;
};

const gcd = (a: number, b: number): number => {
    if (!b) return a;
    return gcd(b, a % b);
}
