function modifyString(s: string): string {
    return s.split('').reduce((acc, c, i, arr) => {
        if (c === '?') {
            let j = i;
            while (arr[++j] === '?');
            const prev = acc[acc.length - 1]?.charCodeAt(0);
            const next = arr[j]?.charCodeAt(0);
            c = String.fromCharCode(getRand(prev, next));
        }
        return acc + c;
    }, '');
};

function getRand(prev = 96, next: number): number {
    if (prev === 122) prev = 96;
    return ++prev === next ? getRand(prev, next) : prev;
}
