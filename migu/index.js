const fs = require("fs");
const { type } = require("os");
const crypto = require("crypto")
const { JSDOM } = require("jsdom");
const { default: axios } = require("axios");
const { real_url } = require("../migu/get_real_url");


let windowObj = new JSDOM(``, { url: "https://m.miguvideo.com/m/detail/651632648" });
windowObj["crypto"] = crypto
function myTypeof(t) {
    return typeof t
}
function myTypeof(t) {
    return typeof t
}
function A(t) {
    var e = E(t);
    return function (t) {
        t < 132 || (x[t] = w,
            w = t)
    }(t),
        e
}
function B() {
    var e = {
        wbg: {}
    };
    return e.wbg.__wbindgen_string_new = function (t, e) {
        return S(b(t, e))
    }
        ,
        e.wbg.__wbindgen_object_drop_ref = function (t) {
            A(t)
        }
        ,
        e.wbg.__wbg_crypto_1d1f22824a6a080c = function (t) {
            return S(E(t).crypto)
        }
        ,
        e.wbg.__wbindgen_is_object = function (t) {
            var e = E(t);

            return "object" === (0,
                myTypeof)(e) && null !== e
        }
        ,
        e.wbg.__wbg_process_4a72847cc503995b = function (t) {
            return S(E(t).process)
        }
        ,
        e.wbg.__wbg_versions_f686565e586dd935 = function (t) {
            return S(E(t).versions)
        }
        ,
        e.wbg.__wbg_node_104a2ff8d6ea03a2 = function (t) {
            return S(E(t).node)
        }
        ,
        e.wbg.__wbindgen_is_string = function (t) {
            return "string" == typeof E(t)
        }
        ,
        e.wbg.__wbg_require_cca90b1a94a0255b = function () {
            return D((function () {
                return S(t.require)
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (t) {
            return S(E(t).msCrypto)
        }
        ,
        e.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
            return D((function (t, e) {
                E(t).randomFillSync(A(e))
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
            return D((function (t, e) {
                E(t).getRandomValues(E(e))
            }
            ), arguments)
        }
        ,
        e.wbg.__wbindgen_is_function = function (t) {
            return "function" == typeof E(t)
        }
        ,
        e.wbg.__wbg_newnoargs_581967eacc0e2604 = function (t, e) {
            return S(new Function(b(t, e)))
        }
        ,
        e.wbg.__wbg_call_cb65541d95d71282 = function () {
            return D((function (t, e) {
                return S(E(t).call(E(e)))
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_self_1ff1d729e9aae938 = function () {
            return D((function () {
                return S(windowObj)
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_window_5f4faef6c12b79ec = function () {
            return D((function () {
                return S(window.window)
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_globalThis_1d39714405582d3c = function () {
            return D((function () {
                return S(h())
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_global_651f05c6a0944d1c = function () {
            return D((function () {
                return S(n.g.global)
            }
            ), arguments)
        }
        ,
        e.wbg.__wbindgen_is_undefined = function (t) {

            return void 0 === E(t)
        }
        ,
        e.wbg.__wbg_call_01734de55d61e11d = function () {
            return D((function (t, e, n) {
                return S(E(t).call(E(e), E(n)))
            }
            ), arguments)
        }
        ,
        e.wbg.__wbg_buffer_085ec1f694018c4f = function (t) {
            return S(E(t).buffer)
        }
        ,
        e.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa = function (t, e, n) {
            return S(new Uint8Array(E(t), e >>> 0, n >>> 0))
        }
        ,
        e.wbg.__wbg_new_8125e318e6245eed = function (t) {
            return S(new Uint8Array(E(t)))
        }
        ,
        e.wbg.__wbg_set_5cf90238115182c3 = function (t, e, n) {
            E(t).set(E(e), n >>> 0)
        }
        ,
        e.wbg.__wbg_newwithlength_e5d69174d6984cd7 = function (t) {
            return S(new Uint8Array(t >>> 0))
        }
        ,
        e.wbg.__wbg_subarray_13db269f57aa838d = function (t, e, n) {
            return S(E(t).subarray(e >>> 0, n >>> 0))
        }
        ,
        e.wbg.__wbindgen_object_clone_ref = function (t) {
            return S(E(t))
        }
        ,
        e.wbg.__wbindgen_throw = function (t, e) {
            throw new Error(b(t, e))
        }
        ,
        e.wbg.__wbindgen_memory = function () {
            return S(wasmExports.memory)
        }
        ,
        e
}
function D(t, e) {
    try {
        return t.apply(this, e)
    } catch (t) {
        wasmExports.__wbindgen_exn_store(S(t))
    }
}
function E(t) {
    return x[t]
}
// var x = f()(r = new Array(128)).call(r, void 0);
// x.push(void 0, null, !0, !1);
var x = new Array(128).fill(void 0)
x.push(void 0, null, !0, !1);
var w = x.length;
function S(t) {
    w === x.length && x.push(x.length + 1);
    var e = w;
    return w = x[e],
        x[e] = t,
        e
}

var wasmExports;
const wasmFile = "./migu/playurl-crypto.wasm"
const wbgObj = B();
let wasmInstance = null; // 用于缓存 WebAssembly 实例

// 初始化 WebAssembly 模块
function initWasm(wasmFile, info) {
    return new Promise((resolve, reject) => {
        if (wasmInstance) {
            // 如果已缓存 WebAssembly 实例，直接返回
            resolve(wasmInstance);
        } else {
            // 读取并实例化 WebAssembly 文件
            fs.readFile(wasmFile, (err, data) => {
                if (err) {
                    reject('Failed to read the wasm file:', err);
                    return;
                }
                WebAssembly.instantiate(data, info).then((result) => {
                    wasmInstance = result.instance;
                    resolve(wasmInstance);
                }).catch((err) => {
                    reject('Failed to instantiate the wasm module:', err);
                });
            });
        }
    });
}
function I(t, e, n) {
    if (void 0 === n) {
        var r = O.encode(t)
            , o = e(r.length, 1) >>> 0;
            
        return y().subarray(o, o + r.length).set(r),
            k = r.length,
            o
    }
    for (var i = t.length, a = e(i, 1) >>> 0, c = y(), s = 0; s < i; s++) {
        var u = t.charCodeAt(s);
        if (u > 127)
            break;
        c[a + s] = u
    }
    if (s !== i) {
        0 !== s && (t = p()(t).call(t, s)),
            a = n(a, i, i = s + 3 * t.length, 1) >>> 0;
        var f = y().subarray(a + s, a + i);
        s += T(t, f).written
    }
    return k = s,
        a
}
var k = 0
function j(t) {
    return null == t
}
function y() {
    return null !== g && 0 !== g.byteLength || (g = new Uint8Array(wasmExports.memory.buffer)),
        g
}
var _ = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: function () {
        throw Error("TextDecoder not available")
    }
};
"undefined" != typeof TextDecoder && _.decode();
function b(t, e) {
    return t >>>= 0,
        _.decode(y().subarray(t, t + e))
}
function $(t, e) {
    try {
        var i = wasmExports.__wbindgen_add_to_stack_pointer(-16),
            a = I(t, wasmExports.__wbindgen_malloc, wasmExports.__wbindgen_realloc)
            , c = k
            , s = j(e) ? 0 : I(e, wasmExports.__wbindgen_malloc, wasmExports.__wbindgen_realloc)
            , u = k;
        wasmExports.base64AesCBC_encrypt(i, a, c, s, u);
        var f = P()[i / 4 + 0]
            , l = P()[i / 4 + 1]
            , p = P()[i / 4 + 2]
            , d = P()[i / 4 + 3]
            , h = f
            , v = l;
        if (d)
            throw h = 0,
            v = 0,
            A(p)
    
        return n = h,
            r = v,
            b(h, v)

    } finally {
       
        wasmExports.__wbindgen_add_to_stack_pointer(16),
            wasmExports.__wbindgen_free(n, 0, 1)
    }
}

var R = null;
function P() {
    return null !== R && 0 !== R.byteLength || (R = new Int32Array(wasmExports.memory.buffer)),
        R
}
var g = null;
function y() {
    return null !== g && 0 !== g.byteLength || (g = new Uint8Array(wasmExports.memory.buffer)),
        g
}


function xt() {
    var t = function (t) {
        for (var e = "", n = "0123456789abcdef", r = 0; r < t; r++)
            e += n.charAt(15 * Math.random() | 0);
        return e
    }
        , e = [];
    e.push(t(8));
    for (var n = 0; n < 3; n++)
        e.push(t(4));
    var r = (new Date).getTime();
    
    return e.push(("0000000" + r.toString(16)).substr(-8) + t(4)),
        e.join("")
}

async function getlink(contId) {
    const clientId = xt();
    const rateType = "3"
    const startPlay = true
    const xh265 = false
    // const contId = "609017205"
    const channelId = "0131_10010001005"
    let devId =await make_clientId('[object Object]', "0e00b1070eba0f0b000b0e020abbbbb1")

    const headers = {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36 XiaoMi/MiuiBrowser/18.6.71011",
        "Referer": "https://m.miguvideo.com/",
        "channel": "H5",
        "appcode": "miguvideo_default_h5",
        "appid": "miguvideo"
    }
    let url = `https://webapi.miguvideo.com/gateway/playurl/v2/play/playurlh5?contId=${contId}&rateType=${rateType}&clientId=${clientId}&startPlay=${startPlay}&devId=${devId}&xh265=${xh265}&channelId=${channelId}`
    let res =await axios.get(url, {
        headers: headers
    })

    return res.data.body.urlInfo.url
}
async function get_real_link(contId){
    let link = await getlink(contId);
   
    let real_url_ = await real_url(link)
    
    console.log(real_url_)
    return real_url_
}
async function main(){
    let sfs = await initWasm(wasmFile,wbgObj);
    wasmExports = sfs.exports
    get_real_link(651632648)
}
main()

async function make_clientId(t, e) {
    let uu = $(t,e)
    console.log("大大大大",uu)
   
    return $(t,e)
}
module.exports = {
    get_real_link
}