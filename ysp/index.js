
/**
 * 加密逻辑：通过guid,ts,yspappid,version这四个参数，调用wasm的get_token_rnd方法
 * get_token_rnd调用了__wbg_get_9c1840f7ecd81363，__wbindgen_string_get，__wbindgen_object_drop_ref
 * 得到了参数rnd，通过rnd+guid+vappid+vsecret+raw+version+ts等参数请求https://h5access.yangshipin.cn/web/open/token
 * 得到token,__wbg_get_9c1840f7ecd81363会使用token作为参数进行加密，在通过wasm的get_signature方法拿到buffer，解析buffer得到yspsdksign，将yspsdksign作为请求头请求https://player-api.yangshipin.cn/v1/player/get_live_info
 * 得到播放链接
 */

const fs = require('fs');
const axios = require('axios');
var W = new Array(128).fill(void 0);
W.push(void 0, null, !0, !1);
var Q = W.length;
const wasmFile = './ysp/example.wasm';
const cctvopenApi = {

    "cctvh5openapi.state.query": {},
 
    "cctvh5openapi.state.version": "v1",
    "cctvh5openapi.state.yspappid": "519748109",
    "window.location.host": "www.yangshipin.cn",
    "window.location.protocol": "https:"
}


var V;
var X = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: () => {
        throw Error("TextDecoder not available")
    }
};

function get_ts() {
    return
}

function cctvopenapi(e) {
    return cctvopenApi[e]
}

function __wbg_get_9c1840f7ecd81363(e, t) {
    var r, n;
    try {
        return r = e,
            n = t,
            function (e) {
                Q === W.length && W.push(W.length + 1);
                var t = Q;
                return Q = W[t],
                    W[t] = e,
                    t
            }(cctvopenapi(ee(e, t)))
    } finally {
        A.__wbindgen_free(r, n, 1)
    }
}
function B(e) {
    return W[e]
}
var H = null;
function K() {
    return null !== H && 0 !== H.byteLength || (H = new Int32Array(A.memory.buffer)),
        H
}
var $ = 0
function __wbindgen_string_get(e, t) {
    var r = B(t),
        n = "string" == typeof r ? r : void 0,
        o = null == n ? 0 : function (e, t, r) {
            if (void 0 === r) {
                var n = J.encode(e),
                    o = t(n.length, 1) >>> 0;
                return z().subarray(o, o + n.length).set(n),
                    $ = n.length,
                    o
            }
            for (var i = e.length, a = t(i, 1) >>> 0, s = z(), c = 0; c < i; c++) {
                var u = e.charCodeAt(c);
                if (u > 127)
                    break;
                s[a + c] = u
            }
            if (c !== i) {
                0 !== c && (e = e.slice(c)),
                    a = r(a, i, i = c + 3 * e.length, 1) >>> 0;
                var f = z().subarray(a + c, a + i);
                a = r(a, i, c += Z(e, f).written, 1) >>> 0
            }
            return $ = c,
                a
        }(n, A.__wbindgen_malloc, A.__wbindgen_realloc),
        i = $;
    K()[e / 4 + 1] = i,
        K()[e / 4 + 0] = o
}

function __wbindgen_object_drop_ref(e) {
    var t;
    B(t = e),
        function (e) {
            e < 132 || (W[e] = Q,
                Q = e)
        }(t)
}

function z() {
    V = new Uint8Array(A.memory.buffer)
    return V;
}

function ee(e, t) {
    var X = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: () => {
            throw Error("TextDecoder not available")
        }
    };
    return e >>>= 0,
        X.decode(z().subarray(e, e + t))
}



async function getvsecvappid(guid,seqid,nrequest_id) {
    let cookie = `guid=${guid};  versionName=99.99.99;  versionCode=999999;  vplatform=109;  platformVersion=Chrome;  deviceModel=129;  newLogin=1; updateProtocol=${seqid};  nseqId=1;  nrequest-id=${nrequest_id}`

    let headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Referer": "https://www.yangshipin.cn/",
        "Cookie": cookie,
        "Yspappid": "519748109"
    }
    var sec_vappid = {
    },
        ts = (60, Math.floor((new Date).getTime() / 6e4));
    console.log(ts)
    let url = `https://s.yangshipin.cn/CCTVVideo/cctvh5-openapicore/cctvh5-openapicore.min.js?ts=${ts}`
    try {
        const res = await axios.get(url,{
            headers:headers
        });
        const data = res.data
        const vappidMatch = data.match(/vappid:\s*\"(\d+)\"/);
        const vsecretMatch = data.match(/vsecret:\s*\"([a-fA-F0-9]+)\"/);
        if (vappidMatch && vsecretMatch) {
            const vappid = vappidMatch[1];
            const vsecret = vsecretMatch[1];
            sec_vappid['vappid'] = vappid;
            sec_vappid['vsecret'] = vsecret;
            return sec_vappid;
        } else {
            console.log("未找到 vappid 或 vsecret");
        }
    } catch (error) {
        console.error(`请求出错: ${error}`); // 捕获并输出错误
    }
}

async function get_token(guid, ts, rnd,seqid,nrequest_id) {
    let vappid_sec =await getvsecvappid(guid,seqid,nrequest_id);
    let vappid = vappid_sec.vappid
    let vsecret = vappid_sec.vsecret
    return new Promise((resolve, reject) => {
        let url = `https://h5access.yangshipin.cn/web/open/token?yspappid=519748109&guid=${guid}&vappid=${vappid}&vsecret=${vsecret}&raw=1&version=v1&ts=${ts}&rnd=${rnd}`,
         headers = {
                'Accept': '*/*',
                'Referer': 'https://www.yangshipin.cn/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
                'Cookie': `guid=${guid}; versionName=99.99.99; versionCode=999999; vplatform=109; platformVersion=Chrome; deviceModel=130; newLogin=1; updateProtocol=1; nseqId=${seqid}; nrequest-id=${nrequest_id}`
            }
      
       
        axios.get(url, {
            headers: headers
        }).then(res => {
            const data = res.data
            const token = data.data.token
    
            cctvopenApi['cctvh5openapi.state.token'] = token
            // console.log("获取到token", token)
            // console.log("cctvopenApi:",cctvopenApi)
            resolve(token)
        });

    }).catch((err) => {
        console.error('Failed to instantiate the wasm module:', err);
        reject(err);
    });

}

function get_random_str(t) {
    t = t || 10;
    for (var e = "ABCDEFGHIJKlMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = e.length, n = "", i = 0; i < t; i++)
        n += e.charAt(Math.floor(Math.random() * r));
    return n
};

function changeCookie() {
    const Fu = {
        "nseqId": 1,
        "nrequest-id": 1
    }
    var t, e;
    for (var n in Fu) {
        var r = Uu(n);
        "nseqId" == n && (r ? (r = parseInt(r),
            r < 2147483646 ? (zu(n, r + 1),
                t = r + 1) : (zu(n, 1),
                    t = 1)) : (zu(n, 1),
                        t = 1)),
            "nrequest-id" == n && (e = "999999" + Du() + (new Date).getTime(),
                zu(n, e))
    }
    return {
        retSeqId: t,
        retRequestId: e
    }
}

function new_guid() {
    var e = (new Date).getTime().toString(36)
        , n = Math.random().toString(36).replace(/^0./, "");
    t = "".concat(e, "_").concat(n); return t
}

function get_nrequestid() {
    return "999999" + get_random_str() + new Date().getTime()
}

let wasmInstance;
var A;
async function initWasm() {
    if (!wasmInstance) {
        const data = await fs.promises.readFile(wasmFile);
        const result = await WebAssembly.instantiate(data, {
            wbg: {
                __wbg_get_9c1840f7ecd81363: __wbg_get_9c1840f7ecd81363,
                __wbindgen_string_get: __wbindgen_string_get,
                __wbindgen_object_drop_ref: __wbindgen_object_drop_ref
            }
        });
        A = result.instance.exports;
    }
}

async function te() {


    var e, t;
    try {
        var r = A.__wbindgen_add_to_stack_pointer(-16);
        A.get_token_rnd(r);
        var n = K()[r / 4 + 0]
          , o = K()[r / 4 + 1];
        return e = n,
        t = o,
        ee(n, o)
    } finally {
        A.__wbindgen_add_to_stack_pointer(16),
        A.__wbindgen_free(e, t, 1)
    }
}

function ee(e, t) {
    return e >>>= 0,
    X.decode(z().subarray(e, e + t))
}
function z() {
    V = new Uint8Array(A.memory.buffer)
    return V
}
async function re(guid, ts,seqid,nrequest_id,input_param) {
    cctvopenApi['cctvh5openapi.state.input'] = input_param + "-" + guid + "-" + seqid + "-" +nrequest_id;
    cctvopenApi["cctvh5openapi.state.ts"] = ts
    cctvopenApi["cctvh5openapi.state.guid"] = guid
    let rnd = await te();
    let tk = await get_token(guid, ts, rnd,seqid,nrequest_id);
    
    // console.log("大大大发大水：",cctvopenApi)
    var e, t;
  
    try {
        var r = A.__wbindgen_add_to_stack_pointer(-16);
        A.get_signature(r);
        var n = K()[r / 4 + 0]
          , o = K()[r / 4 + 1];
        return e = n,
        t = o,
        ee(n, o)
    } finally {
        A.__wbindgen_add_to_stack_pointer(16),
        A.__wbindgen_free(e, t, 1)
    }
}
async function main(){
    //c0686155583a870d718138f86e29e980
    // let guid = "lvlmyrtu_4jimh8cwqos"
    // let ts = "1729644622573"
    // let seqid = "3"
    // let nrequest_id = "999999gG8HiXl41x1729644446589"
    await initWasm();
    // re(guid,ts,seqid,nrequest_id).then(res=>{
    //     console.log(":快快快坎坎坷坷",cctvopenApi)
    //     console.log(":但是方法",res)
    // })
}
main()
module.exports = {
    get_token,
    new_guid,
    get_random_str,
    re,
}