function modifyString(s: string): string {
    let prev;
    let next;
    let ret = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            next = getNext(s, i);
            prev = getRand(prev, next);
        } else {
            prev = s[i];
        }
        ret += prev;
    }

    return ret;
};

function getNext(s: string, i: number): string {
    while (s[i] === '?') i++;
    return s[i];
}

function getRand(prev: string, next: string): string {
    let c;
    do {
        c = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } while (c === prev || c === next);
    return c;
}
