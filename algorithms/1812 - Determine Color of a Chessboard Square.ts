function squareIsWhite(coordinates: string): boolean {
    return ((coordinates.charCodeAt(0) - 96) + +coordinates[1]) % 2 !== 0;
};
