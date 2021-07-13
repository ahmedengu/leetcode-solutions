function numTilePossibilities(tiles: string): number {
    let ret = 0;
    const permute = (path, str) => {
        ret++;
        for (let i = 0; i < str.length; i++)
            if (str[i] !== str[i - 1])
                permute(path + str[i], str.slice(0, i) + str.slice(i + 1));
    }
    permute('', [...tiles].sort().join(''));
    return ret - 1;
};
