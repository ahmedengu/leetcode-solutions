function decode(encoded: number[], first: number): number[] {
    const arr = [first];
    for (const code of encoded)
        arr.push(code ^ arr[arr.length - 1]);
    return arr;
};
