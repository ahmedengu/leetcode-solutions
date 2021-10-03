function countPairs(deliciousness: number[]): number {
    const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152];
    const freq = {};
    const mod = 1e9 + 7;
    let count = 0;
    for (const num of deliciousness) {
        for (const pow of powers) {
            if (freq[pow - num]) {
                count += freq[pow - num];
                count = count % mod;
            }
        }
        freq[num] = (freq[num] || 0) + 1;
    }
    return count;
};
