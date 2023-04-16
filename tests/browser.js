"use strict";
/**
 * Inject this into browser to test vanilla components.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertThrows = exports.assert = exports.it = void 0;
function it(desc, fn) {
    try {
        fn();
        console.log('%c\u2714 ' + desc, 'color: green');
    }
    catch (error) {
        console.log('\n');
        console.log('%c\u2718 ' + desc, 'color: red');
        console.error(error);
    }
}
exports.it = it;
function assert(isTrue) {
    if (!isTrue)
        throw new Error();
}
exports.assert = assert;
function assertThrows(fn, reg = null) {
    let result = false;
    try {
        fn();
    }
    catch (err) {
        if (!reg)
            console.error(err);
        else {
            let message = '';
            if (typeof err === 'string')
                message = err;
            if (err instanceof Error)
                message = err.message;
            result = reg.test(message);
        }
    }
    if (!result)
        throw new Error();
}
exports.assertThrows = assertThrows;
