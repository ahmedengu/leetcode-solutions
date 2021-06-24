function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    const ret = new Uint32Array(k);
    const ids = {};
    for (const [id, time] of logs)
        (ids[id] || (ids[id] = new Set())).add(time);
    for (const times of Object.values<Set<number>>(ids))
        ret[times.size - 1]++;
    return [...ret];
};
