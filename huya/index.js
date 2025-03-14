const axios = require('axios');

async function getUid(){
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
      }
    var res =await axios.post(url,data,{
        headers:headers
    })
    let uid = res.data.data.uid;
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
    return function(t) {
        return Lr(Or(Fr(t), 8 * t.length))
    }(Nr(t))
}
function Lr(t) {
    var e, i = "", s = 32 * t.length;
    for (e = 0; e < s; e += 8)
        i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return i
}
function Vr(t,e,i){
    console.log(`t:${t},e:${e},i:${i}`)
    return e ? i ? Br(e, t) : Mr(Br(e, t)) : i ? br(t) : Mr(br(t))
}
function getAnticode(t,fm,sStreamName,wsTime) {
    
    
        const i =103,_ctype = "tars_mobile";
    let Zr =  Number(1468407317036) + Date.now();
    const s = Vr(`${Zr}|${_ctype}|${i}`)
        , r = 1468407317036;
  
    let a = fm.replace("$0", r).replace("$1", sStreamName).replace("$2", s).replace("$3", wsTime);
    t && (a += ta);
    let n = `wsSecret=${Vr(a)}&wsTime=${wsTime}&seqid=${Zr}&ctype=${_ctype}&ver=1`;
    // return this[Kr].length > 0 && (n += Ta + this[Kr].join(Ta)),
     return   n
}
function initInfo(t, e) {
    const fmregex = /fm=([^&]+)/;
    let wsTimeregex = /wsTime=([^&]+)/
    wsTime = t.sFlvAntiCode.match(wsTimeregex)[1]
    let _fm = t.sFlvAntiCode.match(fmregex)[1];
    let i__ = decodeURI(_fm);
     i__ = unescape(i__)
     let fm = atob(i__)
   
    // this.info = t,
        t.sFlvUrl && t.sStreamName && (t.url = `${t.sFlvUrl}/${t.sStreamName}.flv`);
    let i = [];
    i.push(getAnticode(e,fm,t.sStreamName,wsTime))
    i.push("ratio="+t.iBitRate)
        t.httpDomainOnly || -1 === t.url.indexOf("va.huya.com") && -1 === t.url.indexOf("cdnweb.huya.com") && -1 === t.url.indexOf("va-cmcc.huya.com") || i.push("&https=1"),
        i.length > 0 && (t.url += (-1 !== t.url.indexOf("?") ? "&" : "?") + i.join("&")),
        t.url += "&dMod=mseh-0" 
        return t.url;
        
}
function getuuid(){
    return Number((Date.now() % 1e10 * 1e3 + (1e3 * Math.random() | 0)) % 4294967295);
}
function connect(url,uid){
    let uuid = getuuid();
    let sesstionid = new Date().getTime();
    let s ="sdkPcdn=1_1&"
    s = s + `uid=${uid}&uuid=${uuid}&t=103&sv=202411221719&sdk_sid=${sesstionid}&a_block=0`
    return url + s
}
var t = {
    sCdnType: 'AL',
    iIsMaster: 0,
    lChannelId: 1423787831,
    lSubChannelId: 1423787831,
    lPresenterUid: 1423787831,
    sStreamName: '1423787831-1423787831-6115122170587774976-2847699118-10057-A-0-1',
    sFlvUrl: 'http://al.flv.huya.com/src',
    sFlvUrlSuffix: 'flv',
    sFlvAntiCode: 'wsSecret=706a16d295e17eab245fbc86b56dd7c4&wsTime=6749b4da&fm=RFdxOEJjSjNoNkRKdDZUWV8kMF8kMV8kMl8kMw%3D%3D&ctype=tars_mobile&txyp=o%3Acp1%3B&fs=bgct&t=103',
    sHlsUrl: 'http://al.hls.huya.com/src',
    sHlsUrlSuffix: 'm3u8',
    sHlsAntiCode: 'wsSecret=706a16d295e17eab245fbc86b56dd7c4&wsTime=6749b4da&fm=RFdxOEJjSjNoNkRKdDZUWV8kMF8kMV8kMl8kMw%3D%3D&ctype=tars_mobile&txyp=o%3Acp1%3B&fs=bgct&t=103',
    iLineIndex: 3,
    iIsMultiStream: 1,
    iPCPriorityRate: 50,
    iWebPriorityRate: 50,
    iMobilePriorityRate: 35,
    vFlvIPList: {
      _proto: { _classname: 'string' },
      _bValue: 0,
      value: [],
      _classname: 'list<string>'
    },
    iIsP2PSupport: 2,
    sP2pUrl: 'http://al.p2p.huya.com/huyalive',
    sP2pUrlSuffix: 'slice',
    sP2pAntiCode: 'wsSecret=706a16d295e17eab245fbc86b56dd7c4&wsTime=6749b4da&fm=RFdxOEJjSjNoNkRKdDZUWV8kMF8kMV8kMl8kMw%3D%3D&ctype=tars_mobile&txyp=o%3Acp1%3B&fs=bgct&t=103',
    lFreeFlag: 2,
    iIsHEVCSupport: 0,
    vP2pIPList: {
      _proto: { _classname: 'string' },
      _bValue: 0,
      value: [],
      _classname: 'list<string>'
    },
    _classname: 'HUYA.StreamInfo'
  }
function cleanJsonString(str) {
    // 定义正则表达式，用于匹配函数定义
    const functionRegExp = /"\w+":\s*function\s*\(.*?\)\s*{.*?},?/gs;
    // 使用 replace 方法替换匹配到的内容
    return str.replace(functionRegExp, '');
}

const fs = require('fs');
async function getCndInfo(){
    let url = "https://m.huya.com/26355861"
    let headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      };
    let res = await  axios.get(url, { headers: headers })
       
    const regExp = /<script>[\s\S]*?window\.HNF_GLOBAL_INIT = ([\s\S]*?) <\/script>/;


    const match = regExp.exec(res.data);
    const roomInfoStr = match ? match[1] : null;
    let rs = cleanJsonString(roomInfoStr)
    let q = JSON.parse(rs)
   console.log(q.roomInfo.tLiveInfo.tLiveStreamInfo.vStreamInfo.value[1])
   return q.roomInfo.tLiveInfo.tLiveStreamInfo.vStreamInfo.value[0]
}
async function main(){
    //  console.log(await getUid())
    // let oo = await getCndInfo()
    // let url = initInfo(oo,undefined)
    // let q = connect(url,1468407317036)
    // console.log("+++++++++:",q)
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
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Linux; Android 12; Pixel 6 Build/SQ3A.220705.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/407.0.0.0.65;]"
      }
      
    //   let op = `
    //   https://182-140-250-209.bytefcdnrd.com/huyalive/1239543153970-1239543153970-11135015053491699712-2479086431396-10057-A-0-1.flv?302_type=cold_aggr&a_block=0&ctype=tars_mobile&dMod=mseh-0&domain=txdirect.flv.huya.com&fs=bgct&ratio=2000&redirect_from=pod.cn-msbvbj.hzrv.nss&sdkPcdn=1_1&sdk_sid=1732962767423&seqid=3201370084479&sv=202411221719&t=103&uid=1468407317036&uuid=3534956245&ver=1&wsSecret=b95c70169e76f179f3d2f1768a593f53&wsTime=674c3b48
      
    //   `
    // axios.get(op,{headers:h}).then(res=>{
    //     console.log("*********:::",res.request)
    // })
    // 指定URL
const url = `
http://al.flv.huya.com/huyalive/1239543150234-1239543150234-11134999007493881856-2479086423924-10057-A-0-1.flv?wsSecret=63f99e6ccae28996d66936d231ebe611&wsTime=674c4a38&seqid=3201373926111&ctype=tars_mobile&ver=1&ratio=undefined&dMod=mseh-0sdkPcdn=1_1&uid=1468407317036&uuid=3081642997&t=103&sv=202411221719&sdk_sid=1732966609076&a_block=0

`;
(async () => {
    const fetch = (await import('node-fetch')).default;
  
    const videoUrl = 'https://example.com/video.mp4';
  
    fetch(url, {
      method: 'GET',
      headers: h
    })
      .then(response => {
        console.log('状态码:', response.status);
      })
      .catch(error => {
        console.error('请求出错:', error);
      });
  })();
  
}
main()