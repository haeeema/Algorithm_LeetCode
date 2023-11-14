/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        if (functions.length == 0) {
            return x;
        }
        let val;
        for (var i = 0; i < functions.length; i++) {
            if (i == 0) {
                val = functions[functions.length - i - 1](x);
            } else {
                val = functions[functions.length - i - 1](val);
            }
        }
        return val;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */