const axios = require('axios');
async function getUid() {
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
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36 XiaoMi/MiuiBrowser/18.6.71011"
    }
    var res =await axios.post(url,data,{
        headers:headers
    })
    // console.log(res.request)
    let uid = res.data.data.uid;
    // console.log("uid:",uid)
    // return 1468459244932;
    return uid;
}
function Dr(t, e, i, s, r, a, o) {
    return Ar(e & s | i & ~s, t, e, r, a, o)
}
function Rr(t, e, i, s, r, a, o) {
    return Ar(e ^ i ^ s, t, e, r, a, o)
}
function wr(t, e, i, s, r, a, o) {
    return Ar(i ^ (e | ~s), t, e, r, a, o)
}
function vr(t, e) {
    var i = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
}
console.log("得到的",Vr("3202111753202|tars_mobile|103"))
function Ar(t, e, i, s, r, a) {
    return vr((o = vr(vr(e, t), vr(s, a))) << (n = r) | o >>> 32 - n, i);
    var o, n
}
function Ir(t, e, i, s, r, a, o) {
    return Ar(e & i | ~e & s, t, e, r, a, o)
}
function Or(t, e) {
    var i, s, r, a, o;
    t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
    var n = 1732584193
        , h = -271733879
        , d = -1732584194
        , l = 271733878;
    for (i = 0; i < t.length; i += 16)
        s = n,
            r = h,
            a = d,
            o = l,
            n = Ir(n, h, d, l, t[i], 7, -680876936),
            l = Ir(l, n, h, d, t[i + 1], 12, -389564586),
            d = Ir(d, l, n, h, t[i + 2], 17, 606105819),
            h = Ir(h, d, l, n, t[i + 3], 22, -1044525330),
            n = Ir(n, h, d, l, t[i + 4], 7, -176418897),
            l = Ir(l, n, h, d, t[i + 5], 12, 1200080426),
            d = Ir(d, l, n, h, t[i + 6], 17, -1473231341),
            h = Ir(h, d, l, n, t[i + 7], 22, -45705983),
            n = Ir(n, h, d, l, t[i + 8], 7, 1770035416),
            l = Ir(l, n, h, d, t[i + 9], 12, -1958414417),
            d = Ir(d, l, n, h, t[i + 10], 17, -42063),
            h = Ir(h, d, l, n, t[i + 11], 22, -1990404162),
            n = Ir(n, h, d, l, t[i + 12], 7, 1804603682),
            l = Ir(l, n, h, d, t[i + 13], 12, -40341101),
            d = Ir(d, l, n, h, t[i + 14], 17, -1502002290),
            n = Dr(n, h = Ir(h, d, l, n, t[i + 15], 22, 1236535329), d, l, t[i + 1], 5, -165796510),
            l = Dr(l, n, h, d, t[i + 6], 9, -1069501632),
            d = Dr(d, l, n, h, t[i + 11], 14, 643717713),
            h = Dr(h, d, l, n, t[i], 20, -373897302),
            n = Dr(n, h, d, l, t[i + 5], 5, -701558691),
            l = Dr(l, n, h, d, t[i + 10], 9, 38016083),
            d = Dr(d, l, n, h, t[i + 15], 14, -660478335),
            h = Dr(h, d, l, n, t[i + 4], 20, -405537848),
            n = Dr(n, h, d, l, t[i + 9], 5, 568446438),
            l = Dr(l, n, h, d, t[i + 14], 9, -1019803690),
            d = Dr(d, l, n, h, t[i + 3], 14, -187363961),
            h = Dr(h, d, l, n, t[i + 8], 20, 1163531501),
            n = Dr(n, h, d, l, t[i + 13], 5, -1444681467),
            l = Dr(l, n, h, d, t[i + 2], 9, -51403784),
            d = Dr(d, l, n, h, t[i + 7], 14, 1735328473),
            n = Rr(n, h = Dr(h, d, l, n, t[i + 12], 20, -1926607734), d, l, t[i + 5], 4, -378558),
            l = Rr(l, n, h, d, t[i + 8], 11, -2022574463),
            d = Rr(d, l, n, h, t[i + 11], 16, 1839030562),
            h = Rr(h, d, l, n, t[i + 14], 23, -35309556),
            n = Rr(n, h, d, l, t[i + 1], 4, -1530992060),
            l = Rr(l, n, h, d, t[i + 4], 11, 1272893353),
            d = Rr(d, l, n, h, t[i + 7], 16, -155497632),
            h = Rr(h, d, l, n, t[i + 10], 23, -1094730640),
            n = Rr(n, h, d, l, t[i + 13], 4, 681279174),
            l = Rr(l, n, h, d, t[i], 11, -358537222),
            d = Rr(d, l, n, h, t[i + 3], 16, -722521979),
            h = Rr(h, d, l, n, t[i + 6], 23, 76029189),
            n = Rr(n, h, d, l, t[i + 9], 4, -640364487),
            l = Rr(l, n, h, d, t[i + 12], 11, -421815835),
            d = Rr(d, l, n, h, t[i + 15], 16, 530742520),
            n = wr(n, h = Rr(h, d, l, n, t[i + 2], 23, -995338651), d, l, t[i], 6, -198630844),
            l = wr(l, n, h, d, t[i + 7], 10, 1126891415),
            d = wr(d, l, n, h, t[i + 14], 15, -1416354905),
            h = wr(h, d, l, n, t[i + 5], 21, -57434055),
            n = wr(n, h, d, l, t[i + 12], 6, 1700485571),
            l = wr(l, n, h, d, t[i + 3], 10, -1894986606),
            d = wr(d, l, n, h, t[i + 10], 15, -1051523),
            h = wr(h, d, l, n, t[i + 1], 21, -2054922799),
            n = wr(n, h, d, l, t[i + 8], 6, 1873313359),
            l = wr(l, n, h, d, t[i + 15], 10, -30611744),
            d = wr(d, l, n, h, t[i + 6], 15, -1560198380),
            h = wr(h, d, l, n, t[i + 13], 21, 1309151649),
            n = wr(n, h, d, l, t[i + 4], 6, -145523070),
            l = wr(l, n, h, d, t[i + 11], 10, -1120210379),
            d = wr(d, l, n, h, t[i + 2], 15, 718787259),
            h = wr(h, d, l, n, t[i + 9], 21, -343485551),
            n = vr(n, s),
            h = vr(h, r),
            d = vr(d, a),
            l = vr(l, o);
    return [n, h, d, l]
}
function Mr(t) {
    var e, i, s = "";
    for (i = 0; i < t.length; i += 1)
        e = t.charCodeAt(i),
            s += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
    return s
}
function Fr(t) {
    var e, i = [];
    for (i[(t.length >> 2) - 1] = void 0,
        e = 0; e < i.length; e += 1)
        i[e] = 0;
    var s = 8 * t.length;
    for (e = 0; e < s; e += 8)
        i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return i
}
function Nr(t) {
    return unescape(encodeURIComponent(t))
}
function br(t) {
    return function (t) {
        return Lr(Or(Fr(t), 8 * t.length))
    }(Nr(t))
}
function Lr(t) {
    var e, i = "", s = 32 * t.length;
    for (e = 0; e < s; e += 8)
        i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return i
}
function Vr(t, e, i) {
    console.log(`t:${t},e:${e},i:${i}`)
    return e ? i ? Br(e, t) : Mr(Br(e, t)) : i ? br(t) : Mr(br(t))
}
function getAnticode(t, fm, sStreamName, wsTime, sFlvAntiCode, uid) {


    const i = 103, _ctype = "tars_mobile";
    let Zr = Number(uid) + Date.now();
    const s = Vr(`${Zr}|${_ctype}|${i}`)
        , r = uid;
    let a = fm.replace("$0", r).replace("$1", sStreamName).replace("$2", s).replace("$3", wsTime);
 
    t && (a += ta);

    let n = `wsSecret=${Vr(a)}&wsTime=${wsTime}&seqid=${Zr}&ctype=tars_mobile&ver=1&fs=bgct`;
    return n
}
function trace(uid,ayyuid){
   
    const cid = `${ayyuid}/${ayyuid}`
   
    let u = `https://ylog.huya.com/d.gif?act=/eventCAFF96F7C2900001B4571A601D00178E&bve=chrome%2F122.0.6261.119&lla=zh-CN&os=android&sco=24&sre=280.580&fve=0&jav=0&coo=1&domain=m.huya.com&fla=Y&sdk_ver=js-ya.huya-1.0&2=CAFFD85A7D500001F98D189817E03F00&=0UnHUgv0_qmfD4KAKlwzhqQjhbIumBm94lKrGkJC7Zd1r3OBsnia0IL83CrufeAHOghhESv-t-z2Qx8lOVGIUfzZIuc25KaJlHfbJ2cY6r3HWVkn9LtfFJw_Qo4kgKr8OZHDqNnuwg612sGyflFn1do_4_jTQZQbTvzvQ-TR0fPc-DPbnt-5nzdcH-r00vh6K&platform=android&pageType=root&yyuid=&pro=huyawap&=live&=https%253A%252F%252Fm.huya.com%252F29465879&=CAFF96F518100001E09C1E6B5F90D000&watchvideo=1&anmos_uid=${uid}&=3201799444825&pas=&rso=&rso_desc=&eid=heartbeat&eid_desc=%E5%BF%83%E8%B7%B3&hasvedio=0&wap_domain=wap&wid=undefined&extar=&=0a892f4c890f50673c02fd94fe940e03&ua=mozilla%2F5.0%20(linux%3B%20u%3B%20android%2012%3B%20zh-cn%3B%2022041211ac%20build%2Fsp1a.210812.016)%20applewebkit%2F537.36%20(khtml%2C%20like%20gecko)%20chrome%2F122.0.6261.119%20mobile%20safari%2F537.36%20xiaomi%2Fmiuibrowser%2F18.6.71011&sharepage=0&ayyuid=${ayyuid}&gameid=2135&game_name=%E4%B8%80%E8%B5%B7%E7%9C%8B&=7&cid=${cid}&=41347&ref=null&=AL&curpage=%E7%9B%B4%E6%92%AD%E9%97%B4&curlocation=&=%7B%22anchor_uid%22%3A1239543150234%2C%22game_id%22%3A2135%2C%22status%22%3A%221%22%7D&=120027&rid=ods_action_log&furl=&sdver=1&=1733368782046&=1733369082-84156-2cdb41cc7b03b603f076425d704b985b&__yafm=i&ati=&=1&=1022`
    let h = {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36 XiaoMi/MiuiBrowser/18.6.71011",
        "Referer": "https://m.huya.com/",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
    }
    axios.get(u, { headers: h }).then(res => {
        console.log("trace ok:",uid)
    
    })
}
async function initInfo(room_id, uid) {
    let v = await getCndInfo(room_id);
    //异步即可
 
    let t = v.roomInfo.tLiveInfo.tLiveStreamInfo.vStreamInfo.value[1]
    let lUid = v.roomInfo.tLiveInfo.lUid;
    await trace(uid,lUid)
    console.log("lUid:", lUid)
    const fmregex = /fm=([^&]+)/;
    let wsTimeregex = /wsTime=([^&]+)/
    wsTime = t.sFlvAntiCode.match(wsTimeregex)[1]
    let _fm = t.sFlvAntiCode.match(fmregex)[1];
    let i__ = decodeURI(_fm);
    i__ = unescape(i__)
    let fm = atob(i__)

    t.sFlvUrl && t.sStreamName && (t.url = `${t.sFlvUrl}/${t.sStreamName}.flv`);
    let i = [];
    let e;
    let sFlvAntiCode = t.sFlvAntiCode
    i.push(getAnticode(e, fm, t.sStreamName, wsTime, sFlvAntiCode, uid))
    i.push("t=103")
    t.httpDomainOnly || -1 === t.url.indexOf("va.huya.com") && -1 === t.url.indexOf("cdnweb.huya.com") && -1 === t.url.indexOf("va-cmcc.huya.com") || i.push("&https=1"),
        i.length > 0 && (t.url += (-1 !== t.url.indexOf("?") ? "&" : "?") + i.join("&")),
        t.url += "&dMod=mseh-0&"
    return t.url;

}
function getuuid() {
    return Number((Date.now() % 1e10 * 1e3 + (1e3 * Math.random() | 0)) % 4294967295);
}
function connect(url, uid) {
    let uuid = getuuid();
    let sesstionid = Date.now();
    let s = "sdkPcdn=1_1&"

    s = s + `uid=${uid}&uuid=${uuid}&t=103&sv=202412311405&sdk_sid=${sesstionid}&a_block=0`
    return url + s
}
function cleanJsonString(str) {
    const functionRegExp = /"\w+":\s*function\s*\(.*?\)\s*{.*?},?/gs;
    return str.replace(functionRegExp, '');
}

async function getCndInfo(room_id) {
    let url = `https://m.huya.com/${room_id}`
    let headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
       

    };
    let res = await axios.get(url, { headers: headers })
    // console.log(res.data)
    const regExp = /<script>[\s\S]*?window\.HNF_GLOBAL_INIT = ([\s\S]*?) <\/script>/;
    const match = regExp.exec(res.data);
    const roomInfoStr = match ? match[1] : null;
    let rs = cleanJsonString(roomInfoStr)
    let q = JSON.parse(rs)
    return q;
}
async function v(url) {
    let h = {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "connection": "keep-alive",
        "origin": "https://m.huya.com",
        "pragma": "no-cache",
        "referer": "https://m.huya.com/",
        "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Linux; Android 12; Pixel 6 Build/SQ3A.220705.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/407.0.0.0.65;]"
    };
    const fetch = (await import('node-fetch')).default;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: h,
        });
        const response_ = await fetch(response.url, {
            method: 'GET',
            headers: h,
        });
    console.log(response.url)
    } catch (error) {
        console.error('请求出错:', error);
    }
}
async function main() {
    let uid = await getUid();
    let url = await initInfo("11352936", uid)
    let q = connect(url, uid)
    q = q.replace("http", "https")
    q = q + "&txyp=o%3Aq5%3B"
    v(q);
    console.log("+++++++++:", q)
}
main()