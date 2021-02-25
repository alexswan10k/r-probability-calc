import * as wasm from './probability_calc_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* @param {number} probabilityOfA
* @param {number} probabilityOfB
* @returns {number}
*/
export function intersect(probabilityOfA, probabilityOfB) {
    var ret = wasm.intersect(probabilityOfA, probabilityOfB);
    return ret;
}

/**
* @param {number} probabilityOfA
* @param {number} probabilityOfB
* @returns {number}
*/
export function union(probabilityOfA, probabilityOfB) {
    var ret = wasm.union(probabilityOfA, probabilityOfB);
    return ret;
}

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

