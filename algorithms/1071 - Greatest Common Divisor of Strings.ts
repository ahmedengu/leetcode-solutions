function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return '';

    const gcd = (a, b) => a === 0 ? b : gcd( b % a , a);
    return str1.substring(0, gcd(str1.length, str2.length));
};
