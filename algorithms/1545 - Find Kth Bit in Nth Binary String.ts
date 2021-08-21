function findKthBit(n: number, k: number): string {
    let prev = '0';
    let ret = prev;
    while (--n && ret.length < k) {
        ret += '1' + prev.split('').map(c => c === '0' ? '1' : '0').reverse().join('');
        prev = ret;
    }
    return ret[k - 1];
};
