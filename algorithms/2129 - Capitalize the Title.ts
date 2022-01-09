function capitalizeTitle(title: string): string {
    return title.toLowerCase().split(' ').map(word => word.length >= 3 ? word[0].toUpperCase() + word.slice(1) : word).join(' ');
};
