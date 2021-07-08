function reformatNumber(number: string): string {
    number = number.replace(/\s|-/g, '');
    let ret = '';
    let i = 0;
    for (; i < number.length - 4; i += 3) {
        ret += number.substr(i, 3) + '-';
    }
    if (i === number.length - 4) {
        ret += number.substr(i, 2) + '-' + number.substr(i + 2, 2);
    } else {
        ret += number.substr(i);
    }

    return ret;
};
