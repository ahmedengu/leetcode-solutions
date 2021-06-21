function replaceWords(dictionary: string[], sentence: string): string {
    dictionary.sort((a, b) => a.length - b.length);
    return sentence.split(' ').map(w => {
        for (const root of dictionary)
            if (w.startsWith(root)) return root;
        return w;
    }).join(' ');
};
