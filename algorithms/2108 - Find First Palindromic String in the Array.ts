function firstPalindrome(words: string[]): string {
    for (const word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return '';
};

const isPalindrome = s => s === s.split('').reverse().join('');
