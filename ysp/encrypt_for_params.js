/**
 * 解析参数cKey,
 * cKey加密部分搜索关键字得到，注意大小写，位于：
 * p = Hu(n, f, r, d, c)的下一行h处
 */
const qs = require('qs'); // 引入 qs 库

const CryptoJS = require("crypto-js");
const axios = require('axios');
const constants = require('./constants')
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // 长度不同，直接返回 false
    }
    return arr1.every((element, index) => element === arr2[index]);
}

function stringify(t) {
    var e = t.words;
    t = t.sigBytes;
    for (var n = [], r = 0; r < t; r++) {
        var i = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
        n.push((i >>> 4).toString(16)),
            n.push((15 & i).toString(16))
    }
    return n.join("")
}

function toUpperCase(t) {
    return t.length > 0 ? t.toUpperCase() : ""
}

function make_cKey(plaintext) {
    // 密钥 
    const key = CryptoJS.enc.Hex.parse(constants.KEY)
    // 初始化向量 (IV)
    const iv = CryptoJS.enc.Hex.parse(constants.IV)
    // 使用 AES-CBC 模式加密
    var encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
    });
    var ciphertext = encrypted.ciphertext;
    return "--01" + toUpperCase(stringify(ciphertext));
}

// let cs = make_cKey("|517700499|2024081301|1729663587|mg3c3b04ba|V1.0.0|m2lgbwj8_as1hk6lbp6t|5910204|https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|")
// console.log("人力：",cs)
// var plaintext = "|-267224552|2024081301|1729139750|mg3c3b04ba|V1.0.0|lvlmyrtu_4jimh8cwqos|5910204|https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|"

function create_ciphertext(guid,cnlid) {
    const timest = Math.round((new Date).getTime() / 1e3)
    const Nu = create_Nu();
    const version = constants.VERSION
    const Zu = '5910204'
    const platform = 'https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32'
    let r = `|${cnlid}|${timest}|${Nu}|${version}|${guid}|${Zu}|${platform}|`
   
    let El = create_Cl(r);
    r = "|" + El + r;
    console.log("++++:",r)
    return r;
}

function create_Nu() {
    const uitt = "໓໙ຍໝຍໜຎຊໜໟ"
    let p = ""
    for (let q = 0; q < uitt.length; q++) {
        p += String["fromCharCode"](3774 ^ uitt["c" + "harCod" + "eAt"](q));
    }
    return p;
}

function create_Cl(ciphertext) {
    let El = 0;
    for (var Rl = 0; Rl < ciphertext.length; Rl++)
        El = (El << 5) - El + ciphertext.charCodeAt(Rl),
            El &= El;
    return El;
}

/**
 * 
 * @param {*get_live_info的参数} t 
 * @returns 
 */
function Wu(t) {
    var e = ""
        , n = [];
    for (var r in t)
        n.push(r);
    return n = Yu(n),
        n.forEach((function (n, r) {
            0 != r && (e += "&"),
                t[n] instanceof Array && (t[n] = t[n].join()),
                e += n + "=" + decodeURI(t[n])
        }
        )), CryptoJS.MD5(e).toString();

    // 将哈希结果转换为十六进制字符串
    // console.log("MD5 Hash: " + hash.toString());
    // CryptoJS.MD5(e)
}
function Yu(t) {
    return t.sort((function (t, e) {
        return t.localeCompare(e)
    }
    ))
}

function create_yspsdkinput(pid,guid,ckey,cnlid) {
    let params = {
            "cnlid": cnlid,
            "livepid": pid,
            "stream": "2",
            "guid": guid,
            "cKey": ckey,
            "adjust": 1,
            "sphttps": "1",
            "platform": "5910204",
            "cmd": "2",
            "encryptVer": "8.1",
            "dtype": "1",
            "devid": "devid",
            "otype": "ojson",
            "appVer": "V1.0.0",
            "app_version": "V1.0.0",
            "channel": "ysp_tx",
            "defn": "fhd"
        }
    return Wu(params);
}

// let dfsl = create_yspsdkinput("600002264","lvlmyrtu_4jimh8cwqos","--01693175F5C33B8AC52BCFAE55F8352393F0BD7BF666D6ABEF7DA55DCF4D6577CDE1CD07B86BB7F8B0122098FEDC5C1826B579CAB4E94862D1C3DBDAEA008C0ACEBDE3E6DE04DDD4A0BAC292DAC230EFCBA0319B6BD267C09BF2A76D2CB65AAEC111D6790D8C35195BFFE71E052DE79A0927F03BC839A48761CDFA3A38BBBE1733973E3E91005DAE9661E99C05004134F8A2E97891C7E79C906E8263FF314F5C9F")
// console.log("爱爱爱爱：",dfsl)
/**
 * yspsdkinput
 */
// console.log("&&&&&&L:", Wu({
//     "cnlid": "2024081301",
//     "livepid": "600002264",
//     "stream": "2",
//     "guid": "lvlmyrtu_4jimh8cwqos",
//     "cKey": "--01844CC7A551C0048049394FFFD8196C37BEB76453659C2FB91569F5902C6F72574A80AA09012F5E15048F9D321087576A856175503E07BBE21A3A7252F8D7E46F91F7E6BF85FCFDA13F81915F858B73CEF735E2FD751FD66C6BCDE7C80CED10D1960D3BEA24BF27A3AA60C86CFCDF2E8CA54454D2FD9C3FACBA4F282A9740FBB979CC5BDEB9412504CE30A808D0820F3C24FB6E892C103884DAA541A2EC83CDA1",
//     "adjust": 1,
//     "sphttps": "1",
//     "platform": "5910204",
//     "cmd": "2",
//     "encryptVer": "8.1",
//     "dtype": "1",
//     "devid": "devid",
//     "otype": "ojson",
//     "appVer": "V1.0.0",
//     "app_version": "V1.0.0",
//     "channel": "ysp_tx",
//     "defn": "fhd"
// }))
// let guid = new_guid()
// console.log(create_auth_token("m2lctlw7_7d3dvsndt5f","600002264","1t2S3pVqzx"))
async function create_auth_token(guid, pid, rand_str,seqid) {
    const appid = "ysp_pc"
    const Pc = "n@7QKk%YeSjfw%22"
    /**
     * 注意参数位置是经过排序的
     */
    const signature_param = `appid=${appid}&guid=${guid}&pid=${pid}&rand_str=${rand_str}`
    let signature_param_ = signature_param + Pc;
    let signature = CryptoJS.MD5(signature_param_).toString();
    console.log("signature_param_",signature)
    // console.log("sig:",signature)
    data = {
        "guid": guid,
        "pid": pid,
        "rand_str": rand_str,
        "appid": appid,
        "signature": signature
    }
    const nrequest_id = "999999" + get_random_str() + new Date().getTime().toString();
    let cookie = `guid=${guid};  versionName=99.99.99;  versionCode=999999;  vplatform=109;  platformVersion=Chrome;  deviceModel=130;  newLogin=1; updateProtocol=1;  nseqId=${seqid};  nrequest-id=${nrequest_id}`
    let headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Referer": "https://www.yangshipin.cn/",
        "Cookie": cookie,
        "Yspappid": "519748109"
    }
    const res = await axios.post("https://player-api.yangshipin.cn/v1/player/auth",qs.stringify(data), {
        headers: headers
    });
    // console.log("叭叭叭:",res.data)
    // console.log("噢噢噢噢:",data)

    // console.log("cookie:",cookie)
    return res.data.data
}
function get_random_str(t) {
    t = t || 10;
    for (var e = "ABCDEFGHIJKlMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = e.length, n = "", i = 0; i < t; i++)
        n += e.charAt(Math.floor(Math.random() * r));
    return n
};
function create_yspticket(t, e, n, r, i, o){
    var a = (new TextEncoder).encode(t.trim())
    , s = (new TextEncoder).encode(e.trim())
    , u = (new TextEncoder).encode(n.trim())
    , c = (new TextEncoder).encode(r.trim())
    , l = (new TextEncoder).encode(i.trim())
    , f = (new TextEncoder).encode(o.trim())
    , d = 11
    , p = a.length + s.length + c.length + l.length + d + 3
    , h = Module._malloc(a.length + 1)
    , v = Module._malloc(s.length + 1)
    , y = Module._malloc(u.length + 1)
    , g = Module._malloc(c.length + 1)
    , m = Module._malloc(l.length + 1)
    , b = Module._malloc(f.length + 1);
  new Uint8Array(Module.HEAPU8.buffer,h,a.length + 1).set(a),
  new Uint8Array(Module.HEAPU8.buffer,v,s.length + 1).set(s),
  new Uint8Array(Module.HEAPU8.buffer,y,u.length + 1).set(u),
  new Uint8Array(Module.HEAPU8.buffer,g,c.length + 1).set(c),
  new Uint8Array(Module.HEAPU8.buffer,m,l.length + 1).set(l),
  new Uint8Array(Module.HEAPU8.buffer,b,f.length + 1).set(f);
  var w = Module._malloc(p);
  Module._aes_encrypt_ctr(h, v, y, g, m, b, w);
  var _ = new Uint8Array(Module.HEAPU8.buffer,w,p);
  function x(t) {
      return Array.from(t, (function(t) {
          return ("0" + t.toString(16)).slice(-2)
      }
      )).join("")
  }
  console.log(x(_))
  return x(_)
}
// create_yspticket("600002264", "1729340374", "2024081301", "lvlmyrtu_4jimh8cwqos", "519748109", "V1.0.0")
// create_auth_token("lvlmyrtu_4jimh8cwqos","600002264",get_random_str())
module.exports = {
    create_ciphertext,
    make_cKey,
    create_yspsdkinput,
    create_auth_token,
    Wu
};