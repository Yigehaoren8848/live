var CryptoJS = require("crypto-js");

function g(id) {
    if(id==undefined || id.length<0){
        id = "jsws";
    }
    const e =`https://litchi-play-encrypted-site.jstv.com/live/${id}_live.m3u8`
    const  t = Number(((new Date).getTime() / 1e3).toFixed()) + 18e3;
    const n = Math.floor(Date.now() / 1e3) + t
      , r = n.toString(16)
      , a = new URL(e);
    let i = "";
    if ("rtmp:" === a.protocol)
        i = a.pathname.split("/").pop();
    else {
        const e = a.pathname.split("/").pop();
        i = e.split(".")[0]
    }
    //m函数返回的字符串是常量4hhrs7mm8h6X7CPGjZnK，省略m函数
    // let s = m("RhETI5NGhocnM3bW04aDZYN0NQR2pabks=ZWO");
    let s = "4hhrs7mm8h6X7CPGjZnK";
    const o = `${s}${i}${r}`
      , l = CryptoJS.MD5(o).toString().toLowerCase();
    let url = `${e}?txSecret=${l}&txTime=${r}`;
    console.log(url);
}
g()