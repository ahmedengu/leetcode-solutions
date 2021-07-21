function canBeTypedWords(text: string, brokenLetters: string): number {
    const regex = new RegExp(`[${brokenLetters}]`);
    return text.split(' ').filter(word => !regex.test(word)).length;
};
