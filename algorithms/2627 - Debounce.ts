type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let id: ReturnType<typeof setTimeout>;
    return function(...args) {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
