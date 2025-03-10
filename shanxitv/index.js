const axios = require('axios')
const crypto = require('crypto-js')
async function get_jsoninfo(){
    const headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "referer":"https://www.sxrtv.com/"
    }
    var t,o,url;
    
    t = "/lsdream/336E7E6818120C00FA7E8129A9999A10/info.json"
    o = ["t=" + (e = Date.now()).toString(16), "token=" + crypto.MD5(e + t + "Dream").toString()]
    url = "https://livehhhttps.sxrtv.com/lsdream/336E7E6818120C00FA7E8129A9999A10/info.json" + "?" + o.join("&")
    const res = await axios.get(url,{
        headers:headers
    })
    const data = res.data
    return data
}


function x(t) {
    return t.split("").reverse().join("")
}
function y(t) {
    return new Date(t).getDay()
}
var k;
var get_shanxi_liveinfo =async function(t, e,id ) {
     k = currentChannel =await create_C(id)
let  C = {
    divid:"showplayerbox",
    server: "https://livehhhttps.sxrtv.com", //直播服务器其实地址
    cid: currentChannel, //初始频道ID
    width: "100%",//width:播放器宽度
    height: "100%",//height:播放器高度
    dhls: true, //是否动态HLS地址
    tsldhls: true, //是否动态时移地址
    ssl: true,
    dream:2,  
}

    
  
   

    let l = await get_jsoninfo()
    // let o = l.r[0].n
    let o;
    let p = l.channels[0]
    let re = true
   

    l.channels.forEach(element => {
        if (element.i == currentChannel){
            o = element.r[0].n
            console.log("快快快快快快快快快,",element.r)
        }
    });
 
   
    if (re) {
        var n = o ? o + "/" : "";
        return (i = t || e ? new URL("/lsdream/" + jt(l.play.ds) + "/" + n + t + (e ? "," + e : "") + ".m3u8",(C.penetrate ? de : p.s) || de) : new URL("/lsdream/" + k + "/" + n + jt(l.play.dl, "live") + ".m3u8",(C.penetrate ? de : p.l) || de)).href
    }
    var i, a = (C.ssl ? "https" : "http") + "://";
    return i = t || e ? "/" + jt(C.tsldhls) + "/" + t + (e ? "," + e : "") + ".m3u8" : "/" + k + "/" + jt(C.dhls, "live") + ".m3u8",
    a + de + i
}, Rt = function() {
    var t = a ? a + "/" : ""
      , e = c || u ? new URL("/lsdream/" + jt(l.play.ds) + "/" + t + c + (u ? "," + u : "") + ".m3u8",(C.penetrate ? de : p.s) || de) : new URL("/lsdream/" + k + "/" + t + jt(l.play.dl, "live") + ".m3u8",(C.penetrate ? de : p.l) || de);
    return e.href
}, jt = function(t, e) {
    var o = k;
    if (!t)
        return e || o;
    var n, i, a = (i = n ? new Date(n) : new Date,
    new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()), r = 0, d = 0;
    // if (C.oldkey) {
    if (false) {
        for (r = 0; r < o.length; r++)
            d += o.charCodeAt(r);
        for (var l = d.toString(36), p = a.toString(36), s = 0, r = 0; r < p.length; r++)
            s += p.charCodeAt(r);
        p = p.substring(5) + p.substring(0, 5);
        var c = Math.abs(s - d)
          , u = (p = x(l) + p).substring(0, 4)
          , h = p.substring(4)
          , v = new Array
          , f = y(a) % 2;
        for (r = 0; r < o.length; r++) {
            r % 2 == f ? v.push(p.charAt(r % p.length)) : (w = o.charAt(r - 1),
            -1 == (m = u.indexOf(w)) ? v.push(w) : v.push(h.charAt(m)))
        }
    } else {
        var b = -1
          , g = 0;
        for (r = 0; r < o.length; r++) {
            var _ = o.charCodeAt(r);
            d += _,
            -1 != b && (g += b - _),
            b = _
        }
        l = (d += g).toString(36),
        p = a.toString(36),
        s = 0;
        for (r = 0; r < p.length; r++)
            s += p.charCodeAt(r);
        p = p.substr(5) + p.substr(0, 5);
        var w, m, c = Math.abs(s - d), u = (p = x(l) + p).substr(0, 4), h = p.substr(4), v = new Array, f = y(a) % 2;
        for (r = 0; r < o.length; r++) {
            r % 2 == f ? v.push(p.charAt(r % p.length)) : (w = o.charAt(r - 1)) ? -1 == (m = u.indexOf(w)) ? v.push(w) : v.push(h.charAt(m)) : v.push(u.charAt(r))
        }
    }
    return (x(c.toString(36)) + v.join("")).substr(0, o.length)
}


async function main(){
    let qe = await get_shanxi_liveinfo(undefined,undefined,"shanxijingji")
    console.log("kkkkk：",qe)
}
main()
async function create_C(tvcode) {
    const url = "https://www.sxrtv.com/tv/"
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "referer": "https://www.sxrtv.com/"
    }
    const page = await axios.get(url, { headers: headers })
    let regStr = page.data
    
    // 正则表达式提取所有li标签的c属性值和<p>标签中的文本
    const regex = /<li[^>]+c="([^"]+)"[^>]*><[^>]*><p>([^<]+)<\/p><\/li>/g;
    let match;
    const results = [];
    
    while ((match = regex.exec(regStr)) !== null) {
        results.push({
            cValue: match[1],
            text: match[2]
        });
    }
    let tvs = [
        { tvcode: 'shanxiweishi', tvname: '山西卫视' },
        { tvcode: 'huanghe', tvname: '黄河电视台' },
        { tvcode: 'shanxijingji', tvname: '山西经济与科技' },
        { tvcode: 'shanxiyingshi', tvname: '山西影视' },
        { tvcode: 'shanxifazhi', tvname: '山西社会与法治' },
        { tvcode: 'shanxiwenti', tvname: '山西文体生活' }
      ]
    let r = '',q = ''

    tvs.forEach(element => {
        if(element.tvcode  == tvcode){
            r = element.tvname
        }
    });
    if(r!=''){
        results.forEach(element => {
            
            if(element.text  == r){
                
                q = element.cValue
            }
        });
    }

   
    return q;
}
// function getcValuebyTvcode(tvcode,results){
    
// }
// getPageContent()
// async function main(){
//     let d = await create_C('shanxiweishi')
//     console.log("dsklj",d)
// }
// main()

module.exports = {
    get_shanxi_liveinfo
}