function convertToTitle(n: number): string {
    let ret = '';

    while (n) {
        ret = String.fromCharCode(65 + (--n % 26)) + ret;
        n = Math.trunc(n / 26);
    }

    return ret;
};
