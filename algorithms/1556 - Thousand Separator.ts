function thousandSeparator(n: number): string {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
