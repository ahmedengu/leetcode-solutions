const map = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}

function intToRoman(num: number): string {
    let ret = '';

    while (num)
        for (const [key, val] of Object.entries(map))
            if (num - val >= 0) {
                num -= val;
                ret += key;
                break;
            }

    return ret;
};
