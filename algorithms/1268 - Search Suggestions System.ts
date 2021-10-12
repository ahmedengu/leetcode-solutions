function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();
    const ret = _.times(searchWord.length, () => []);

    for (const product of products)
        for (let i = 0; i < searchWord.length && product.startsWith(searchWord.slice(0, i + 1)); i++)
            if (ret[i].length < 3)
                ret[i].push(product);

    return ret;
};
