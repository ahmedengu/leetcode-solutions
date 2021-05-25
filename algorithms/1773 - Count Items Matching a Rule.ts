function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const key = {
        'type': 0,
        'color': 1,
        'name': 2
    } [ruleKey];
    return items.filter(item => item[key] === ruleValue).length;
};
