type Fn = (...args: any[]) => any

function once(fn: Fn): Fn {
    let isCalled = false;
    
  return function (...args) {
      if (!isCalled) {
          isCalled = true;
          return fn(...args);
      }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
