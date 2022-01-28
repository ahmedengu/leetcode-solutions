function isPalindrome(x: number): boolean {
    return `${x}` === `${x}`.split('').reverse().join('');
};
