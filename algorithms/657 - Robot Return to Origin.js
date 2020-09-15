var judgeCircle = function(moves) {
    const len = moves.length;
    let y = 0, x = 0;

    for (let i = 0; i < len; i++) {
        switch (moves[i]) {
            case 'U':
                y--;
                break;
            case 'D':
                y++;
                break;
            case 'R':
                x++;
                break;
            case 'L':
                x--;
                break;
        }
    }

    return x === 0 && y === 0;
};
