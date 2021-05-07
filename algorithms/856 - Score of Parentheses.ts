function scoreOfParentheses(S: string): number {
    let ret = 0;
    let balance = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') balance++;
        else {
            balance--;
            if (S[i - 1] === '(') ret += 1 << balance;
        }
    }

    return ret;
};
