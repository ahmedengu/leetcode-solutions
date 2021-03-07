function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let last = 0;
    let max = 0;
    let maxChar = keysPressed[0];

    for (let i = 0; i < releaseTimes.length; i++) {
        let diff = releaseTimes[i] - last;
        if (diff > max || (diff === max && maxChar.localeCompare(keysPressed[i]) <= 0)) {
            maxChar = keysPressed[i];
            max = diff;
        }
        last = releaseTimes[i];
    }

    return maxChar;
};
