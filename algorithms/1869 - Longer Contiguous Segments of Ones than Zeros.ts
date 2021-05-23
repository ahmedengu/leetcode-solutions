function checkZeroOnes(s: string): boolean {
    let onesMax = 0, zerosMax = 0, ones = 0, zeros = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i - 1]) zeros = 0, ones = 0;
        if (s[i] === '1') ones++;
        else zeros++;

        onesMax = Math.max(onesMax, ones);
        zerosMax = Math.max(zerosMax, zeros);
    }

    return onesMax > zerosMax;
};
