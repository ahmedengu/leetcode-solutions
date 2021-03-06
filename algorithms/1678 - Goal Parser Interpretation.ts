function interpret(command: string): string {
    let ret = [];

    for (let i = 0; i < command.length; i++) {
        if (command[i] === '(' && command[i + 1] === ')') {
            ret.push('o');
            i++;
        } else if (command[i] !== '(' && command[i] !== ')') {
            ret.push(command[i]);
        }
    }

    return ret.join('');
};
