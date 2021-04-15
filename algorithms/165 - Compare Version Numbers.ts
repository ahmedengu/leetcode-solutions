function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.').reverse();
    const v2 = version2.split('.').reverse();

    while (v1.length || v2.length) {
        const t1 = Number(v1.pop());
        const t2 = Number(v2.pop());
        if (t1 && (t1 > t2 || isNaN(t2))) return 1;
        if (t2 && (t1 < t2 || isNaN(t1))) return -1;
    }

    return 0;
};
