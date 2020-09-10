const map = {};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let ret;
    
    do{
        ret = Math.random().toString(32).slice(5);
    }while(map[ret]);
    
    map[ret] = longUrl;
    
    return 'http://tinyurl.com/'+ret;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map[shortUrl.split('com/')[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
