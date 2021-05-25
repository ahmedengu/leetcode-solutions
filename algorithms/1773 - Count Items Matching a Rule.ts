function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const map = {
        'type': 0,
        'color': 1,
        'name': 2
    };
    return items.filter(item => item[map[ruleKey]] === ruleValue).length;
};
