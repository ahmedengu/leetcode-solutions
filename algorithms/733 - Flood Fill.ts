function floodFill(image: number[][], sr: number, sc: number, newColor: number, oldColor = image[sr][sc]): number[][] {
    if (newColor !== oldColor && image[sr]?.[sc] === oldColor) {
        image[sr][sc] = newColor;
        floodFill(image, sr + 1, sc, newColor, oldColor);
        floodFill(image, sr - 1, sc, newColor, oldColor);

        floodFill(image, sr, sc + 1, newColor, oldColor);
        floodFill(image, sr, sc - 1, newColor, oldColor);
    }
    return image;
};
