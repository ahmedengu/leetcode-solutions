function isLongPressedName(name: string, typed: string): boolean {
    let i = 0;
    let j = 0;

    while (i < name.length || j < typed.length) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else if (typed[j] === typed[j - 1] && typed[j - 1] === name[i - 1]) {
            j++;
        } else {
            return false;
        }
    }

    return true;
};
