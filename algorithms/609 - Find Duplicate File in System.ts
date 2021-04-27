function findDuplicate(paths: string[]): string[][] {
    const map = {};

    for (let i = 0; i < paths.length; i++) {
        const parts = paths[i].split(' ');
        for (let j = 1; j < parts.length; j++) {
            const [name, content] = parts[j].split(/\(|\)/);
            (map[content] || (map[content] = [])).push([parts[0], name].join('/'));
        }
    }

    return _.values(_.pickBy(map, (v) => v.length > 1));
};
