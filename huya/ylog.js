// function getObjKey(a) {
//     var b = [];
//     for (var c in a)
//         a.hasOwnProperty(c) && b.push(c);
//     return b
// }
// function getMd5Data(a, b) {
//     for (var c, d = "", e = 0; c = a[e]; e++)
//         d += c + b[c];
//     return d
// }
// function y_e_j_k_p(a, b) {
//     var c = (65535 & a) + (65535 & b)
//       , d = (a >> 16) + (b >> 16) + (c >> 16);
//     return d << 16 | 65535 & c
// }
// function y_e_j_k_q(a, b) {
//     return a << b | a >>> 32 - b
// }
// function y_e_j_k(a, b, c, d, e, f) {
//     return y_e_j_k_p(y_e_j_k_q(y_e_j_k_p(y_e_j_k_p(b, a), y_e_j_k_p(d, f)), e), c)
// }
// function my_e_j_l(a, b, c, d, e, f, g) {
//     return y_e_j_k(b & c | ~b & d, a, b, e, f, g)
// }
// function my_e_j_m(a, b, c, d, e, f, g) {
//     return y_e_j_k(b & d | c & ~d, a, b, e, f, g)
// }
// function my_e_j_n(a, b, c, d, e, f, g) {
//     return y_e_j_k(b ^ c ^ d, a, b, e, f, g)
// }
// function my_e_j_o(a, b, c, d, e, f, g) {
//     return y_e_j_k(c ^ (b | ~d), a, b, e, f, g)
// }
// function my_e_j_p(a, b) {
//     var c = (65535 & a) + (65535 & b)
//       , d = (a >> 16) + (b >> 16) + (c >> 16);
//     return d << 16 | 65535 & c
// }
// function my_e_j(a, b) {
//     a[b >> 5] |= 128 << b % 32,
//     a[(b + 64 >>> 9 << 4) + 14] = b;
//     for (var c = 1732584193, d = -271733879, e = -1732584194, f = 271733878, g = 0; g < a.length; g += 16) {
//         var h = c
//           , i = d
//           , j = e
//           , k = f;
//         c = my_e_j_l(c, d, e, f, a[g + 0], 7, -680876936),
//         f = my_e_j_l(f, c, d, e, a[g + 1], 12, -389564586),
//         e = my_e_j_l(e, f, c, d, a[g + 2], 17, 606105819),
//         d = my_e_j_l(d, e, f, c, a[g + 3], 22, -1044525330),
//         c = my_e_j_l(c, d, e, f, a[g + 4], 7, -176418897),
//         f = my_e_j_l(f, c, d, e, a[g + 5], 12, 1200080426),
//         e = my_e_j_l(e, f, c, d, a[g + 6], 17, -1473231341),
//         d = my_e_j_l(d, e, f, c, a[g + 7], 22, -45705983),
//         c = my_e_j_l(c, d, e, f, a[g + 8], 7, 1770035416),
//         f = my_e_j_l(f, c, d, e, a[g + 9], 12, -1958414417),
//         e = my_e_j_l(e, f, c, d, a[g + 10], 17, -42063),
//         d = my_e_j_l(d, e, f, c, a[g + 11], 22, -1990404162),
//         c = my_e_j_l(c, d, e, f, a[g + 12], 7, 1804603682),
//         f = my_e_j_l(f, c, d, e, a[g + 13], 12, -40341101),
//         e = my_e_j_l(e, f, c, d, a[g + 14], 17, -1502002290),
//         d = my_e_j_l(d, e, f, c, a[g + 15], 22, 1236535329),
//         c = my_e_j_m(c, d, e, f, a[g + 1], 5, -165796510),
//         f = my_e_j_m(f, c, d, e, a[g + 6], 9, -1069501632),
//         e = my_e_j_m(e, f, c, d, a[g + 11], 14, 643717713),
//         d = my_e_j_m(d, e, f, c, a[g + 0], 20, -373897302),
//         c = my_e_j_m(c, d, e, f, a[g + 5], 5, -701558691),
//         f = my_e_j_m(f, c, d, e, a[g + 10], 9, 38016083),
//         e = my_e_j_m(e, f, c, d, a[g + 15], 14, -660478335),
//         d = my_e_j_m(d, e, f, c, a[g + 4], 20, -405537848),
//         c = my_e_j_m(c, d, e, f, a[g + 9], 5, 568446438),
//         f = my_e_j_m(f, c, d, e, a[g + 14], 9, -1019803690),
//         e = my_e_j_m(e, f, c, d, a[g + 3], 14, -187363961),
//         d = my_e_j_m(d, e, f, c, a[g + 8], 20, 1163531501),
//         c = my_e_j_m(c, d, e, f, a[g + 13], 5, -1444681467),
//         f = my_e_j_m(f, c, d, e, a[g + 2], 9, -51403784),
//         e = my_e_j_m(e, f, c, d, a[g + 7], 14, 1735328473),
//         d = my_e_j_m(d, e, f, c, a[g + 12], 20, -1926607734),
//         c = my_e_j_n(c, d, e, f, a[g + 5], 4, -378558),
//         f = my_e_j_n(f, c, d, e, a[g + 8], 11, -2022574463),
//         e = my_e_j_n(e, f, c, d, a[g + 11], 16, 1839030562),
//         d = my_e_j_n(d, e, f, c, a[g + 14], 23, -35309556),
//         c = my_e_j_n(c, d, e, f, a[g + 1], 4, -1530992060),
//         f = my_e_j_n(f, c, d, e, a[g + 4], 11, 1272893353),
//         e = my_e_j_n(e, f, c, d, a[g + 7], 16, -155497632),
//         d = my_e_j_n(d, e, f, c, a[g + 10], 23, -1094730640),
//         c = my_e_j_n(c, d, e, f, a[g + 13], 4, 681279174),
//         f = my_e_j_n(f, c, d, e, a[g + 0], 11, -358537222),
//         e = my_e_j_n(e, f, c, d, a[g + 3], 16, -722521979),
//         d = my_e_j_n(d, e, f, c, a[g + 6], 23, 76029189),
//         c = my_e_j_n(c, d, e, f, a[g + 9], 4, -640364487),
//         f = my_e_j_n(f, c, d, e, a[g + 12], 11, -421815835),
//         e = my_e_j_n(e, f, c, d, a[g + 15], 16, 530742520),
//         d = my_e_j_n(d, e, f, c, a[g + 2], 23, -995338651),
//         c = my_e_j_o(c, d, e, f, a[g + 0], 6, -198630844),
//         f = my_e_j_o(f, c, d, e, a[g + 7], 10, 1126891415),
//         e = my_e_j_o(e, f, c, d, a[g + 14], 15, -1416354905),
//         d = my_e_j_o(d, e, f, c, a[g + 5], 21, -57434055),
//         c = my_e_j_o(c, d, e, f, a[g + 12], 6, 1700485571),
//         f = my_e_j_o(f, c, d, e, a[g + 3], 10, -1894986606),
//         e = my_e_j_o(e, f, c, d, a[g + 10], 15, -1051523),
//         d = my_e_j_o(d, e, f, c, a[g + 1], 21, -2054922799),
//         c = my_e_j_o(c, d, e, f, a[g + 8], 6, 1873313359),
//         f = my_e_j_o(f, c, d, e, a[g + 15], 10, -30611744),
//         e = my_e_j_o(e, f, c, d, a[g + 6], 15, -1560198380),
//         d = my_e_j_o(d, e, f, c, a[g + 13], 21, 1309151649),
//         c = my_e_j_o(c, d, e, f, a[g + 4], 6, -145523070),
//         f = my_e_j_o(f, c, d, e, a[g + 11], 10, -1120210379),
//         e = my_e_j_o(e, f, c, d, a[g + 2], 15, 718787259),
//         d = my_e_j_o(d, e, f, c, a[g + 9], 21, -343485551),
//         c = my_e_j_p(c, h),
//         d = my_e_j_p(d, i),
//         e = my_e_j_p(e, j),
//         f = my_e_j_p(f, k)
//     }
//     return Array(c, d, e, f)
// }
// function my_e_h(a) {
//     for (var b = Array(a.length >> 2), c = 0; c < b.length; c++)
//         b[c] = 0;
//     for (var c = 0; c < 8 * a.length; c += 8)
//         b[c >> 5] |= (255 & a.charCodeAt(c / 8)) << c % 32;
//     return b
// }
// function my_e_i(a) {
//     for (var b = "", c = 0; c < 32 * a.length; c += 8)
//         b += String.fromCharCode(a[c >> 5] >>> c % 32 & 255);
//     return b
// }
// function my_d_f(a) {
//     let s = 0
//     try {} catch (b) {
//         s = 0
//     }
//     for (var c, d = s ? "0123456789ABCDEF" : "0123456789abcdef", e = "", f = 0; f < a.length; f++)
//         c = a.charCodeAt(f),
//         e += d.charAt(c >>> 4 & 15) + d.charAt(15 & c);
//     return e
// }
// function my_d_g(a) {
//     for (var b, c, d = "", e = -1; ++e < a.length; )
//         b = a.charCodeAt(e),
//         c = e + 1 < a.length ? a.charCodeAt(e + 1) : 0,
//         b >= 55296 && 56319 >= b && c >= 56320 && 57343 >= c && (b = 65536 + ((1023 & b) << 10) + (1023 & c),
//         e++),
//         127 >= b ? d += String.fromCharCode(b) : 2047 >= b ? d += String.fromCharCode(192 | b >>> 6 & 31, 128 | 63 & b) : 65535 >= b ? d += String.fromCharCode(224 | b >>> 12 & 15, 128 | b >>> 6 & 63, 128 | 63 & b) : 2097151 >= b && (d += String.fromCharCode(240 | b >>> 18 & 7, 128 | b >>> 12 & 63, 128 | b >>> 6 & 63, 128 | 63 & b));
//     return d
// }
// function my_d(a) {
//     return "" == a ? a : my_d_f(my_e(my_d_g(a)))
// }
// function my_e(a) {
//     return my_e_i(my_e_j(my_e_h(a), 8 * a.length))
// }
// function make_authkey(a) {
//     var b = getObjKey(a);
//     b.sort();
//     var c = getMd5Data(b, a)
//       , d = parseInt((new Date).getTime() / 1e3) + 300
//       , f = parseInt(1e5 * Math.random());
//     return d + "-" + f + "-" + my_d(d + "-" + c + "-" + f)
// }
// // console.log(make_authkey({
// //     "mid": "CAFD18460AB00001BE696EA544B88E90",
// //     "bve": "chrome/122.0.6261.119",
// //     "lla": "zh-CN",
// //     "os": "android",
// //     "sco": 24,
// //     "sre": "280.580",
// //     "fve": "0",
// //     "jav": 0,
// //     "coo": 1,
// //     "domain": "m.huya.com",
// //     "fla": "Y",
// //     "sdk_ver": "js-ya.huya-1.0",
// //     "session_id2": "CAFEF8C8B8A0000183B313D01A021BB4",
// //     "sdid": "0UnHUgv0_qmfD4KAKlwzhqSTBJzPFW0hbTlNP0dsb3Sgeyi_UKa_BK8M2tztkq6ZmdNxBBvzysx2BSSTGEf4aLZ8zSAQYS1zoMf5TdxsmFGLWVkn9LtfFJw_Qo4kgKr8OZHDqNnuwg612sGyflFn1dtnzNUWihHXc8HE2YboZfKowLvdCiNYkFckF1EXKnJoB",
// //     "platform": "android",
// //     "pageType": "root",
// //     "yyuid": "",
// //     "pro": "huyawap",
// //     "dty": "live",
// //     "curl": "https%3A%2F%2Fm.huya.com%2F26355861",
// //     "session_id": "CAFDB3166B100001BBD616BA1E5817E9",
// //     "watchvideo": "0",
// //     "pas": "",
// //     "rso": "",
// //     "rso_desc": "",
// //     "eid": "startup",
// //     "eid_desc": "会话启动",
// //     "hasvedio": "0",
// //     "wap_domain": "wap",
// //     "extar": "",
// //     "sguid": "0a7d9fe66dd7456744027f27802705f1",
// //     "ua": "Mozilla%2F5.0%20(Linux%3B%20U%3B%20Android%2012%3B%20zh-cn%3B%2022041211AC%20Build%2FSP1A.210812.016)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F122.0.6261.119%20Mobile%20Safari%2F537.36%20XiaoMi%2FMiuiBrowser%2F18.6.71011",
// //     "sharepage": "0",
// //     "ayyuid": 1099531840937,
// //     "gameid": 2135,
// //     "game_name": "一起看",
// //     "a_level": 13,
// //     "cid": "1099531840937/1099531840937",
// //     "totalCount": 57090,
// //     "ref": null,
// //     "video_line": "AL",
// //     "curpage": "直播间",
// //     "curlocation": "",
// //     "prop": "{\"anchor_uid\":1099531840937,\"game_id\":2135,\"status\":\"1\"}",
// //     "act": "/event",
// //     "rid": "ods_action_log",
// //     "furl": "",
// //     "sdver": 1,
// //     "wid":undefined,
// //     "cutc": 1733134232500,
// //     "__yafm": "i",
// //     "ati": ""
// // }))

// //session_id
// function getSessionId(a, b) {
//     var c = a ? a.toLowerCase() : this.defaultSessionIdKey
//       , d = this.sessionIds.get(c);
//     if (!d || b) {
//         var e = this.getCCParam(this._yasids);
//         d = e.get(c),
//         d && this.sessionIds.add(c, d)
//     }
//     return d
// }
// function getSessionIdAndGenIfNotExist(a, b, c) {
//     var d =getSessionId(a, c);
//     return d || (d = this.generateSessionId(a, b)),
//     d
// }
// function make_session_id(){
//     const rootSidKey = "__rootSid"

//     var a = getSessionIdAndGenIfNotExist(rootSidKey, !0, !0)
//     , b = c.yaConfigParam.get("session_id");
//   if (this.pageType === k.ROOT)
//       return b ? b : a;
//   if (b)
//       return a + "/" + b;
//   var d = e.getSessionId(this.sidKey);
//   return a + "/" + d
// }
// // make___yamid_new()
//  function make___yamid_new() {
//     var t = new Date(1582,10,15,0,0,0,0)
//       , e = (new Date).getTime() - t.getTime();
//     return generateBits(e, 0, 31) + "" +generateBits(e, 32, 47) +generateBits(e, 48, 59) + "1" + generateBits(rand(4095), 0, 7) + generateBits(rand(4095), 0, 7) + (generateBits(rand(8191), 0, 7) + generateBits(rand(8191), 8, 15) + generateBits(rand(8191), 0, 7) + generateBits(rand(8191), 8, 15) + generateBits(rand(8191), 0, 15))
// }
// function rand(t) {
//     return Math.floor(Math.random() * t)
// }
//  function returnBase(t, e) {
//     var i, r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     if (t < e)
//         i = r[t];
//     else {
//         var n = "" + Math.floor(t / e)
//           , s = t - +n * e;
//         i = n >= e ? returnBase(n, e) + r[s] : r[n] + r[s]
//     }
//     return i
// }
// function generateBits(t, e, i) {
//     var r = returnBase(t, 16)
//       , n = new Array
//       , s = ""
//       , o = 0;
//     for (o = 0; o < r.length; o++)
//         n.push(r.substring(o, o + 1));
//     for (o = Math.floor(e / 4); o <= Math.floor(i / 4); o++)
//         n[o] && "" != n[o] ? s += n[o] : s += "0";
//     return s
// }
// console.log(make___yamid_new())

const axios = require('axios')
let url = `https://udblgn.huya.com/web/anonymousLogin`;
    let data = {
        "appId": 5002,
        "byPass": 3,
        "context": "",
        "version": "2.4",
        "data": {}
    }
    let headers = {

        'Content-Type': 'application/json; charset=UTF-8',
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "connection": "keep-alive",
        "origin": "https://m.huya.com",
        "pragma": "no-cache",
        "referer": "https://m.huya.com/",
        "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36 XiaoMi/MiuiBrowser/18.6.71011"
    }
    axios.post(url,data,{
        headers:headers
    }).then(res=>{
        console.log(res.request)
        let uid = res.data.data.uid;
        console.log("uid:",uid)
    })
   