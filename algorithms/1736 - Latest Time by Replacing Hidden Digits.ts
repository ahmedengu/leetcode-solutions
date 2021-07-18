function maximumTime(time: string): string {
    const fn = (s, i) => {
        switch (i) {
            case 0:
                return time[1] !== '?' && time[1] > '3' ? 1 : 2;
            case 1:
                return time[0] === '2' || time[0] === '?' ? 3 : 9;
            case 3:
                return 5;
            case 4:
                return 9;
            default:
                return s;
        }
    };
    return time.replace(/\?/g, fn);
};
