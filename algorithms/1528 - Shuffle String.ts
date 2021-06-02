function restoreString(s: string, indices: number[]): string {
    return indices.reduce((acc, v, i) => {
        acc[v] = s[i];
        return acc;
    }, []).join('');
};
