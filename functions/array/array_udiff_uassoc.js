function array_udiff_uassoc () {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: array_udiff_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {0: 'red', c: 'blue'}

    var arr1 = arguments[0], retArr = {}, cb = arguments[arguments.length-1], cb0 = arguments[arguments.length-2];
    var k1 = '', i = 1, k = '', arr = {};

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;
    cb0 = (typeof cb0 === 'string') ? this.window[cb0] : (cb0 instanceof Array) ? this.window[cb0[0]][cb0[1]] : cb0;

    arr1keys:
    for (k1 in arr1) {
        for (i=1; i < arguments.length-2; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (cb0(arr[k], arr1[k1]) === 0 && cb(k, k1) === 0) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys; 
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
}