function magicalString(n: number): number {
    let s = '122';
    while (s.length < n) {
        let tmp = '';
        for (let i = 0; i < s.length; i++) {
            if (i % 2 === 0) {
                if (s[i] === '1') {
                    tmp += '1';
                } else {
                    tmp += '11';
                }
            } else {
                if (s[i] === '1') {
                    tmp += '2';
                } else {
                    tmp += '22';
                }

            }
        }
        s = tmp;
    }
    return _.countBy(s.slice(0, n))['1'];
};
