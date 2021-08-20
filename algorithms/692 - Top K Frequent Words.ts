function topKFrequent(words: string[], k: number): string[] {
    return (Object.entries(_.countBy(words)) as [string, number][])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, k)
        .map(([w]) => w);
};
