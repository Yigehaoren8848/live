const axios = require('axios')
const xxtea = require('xxtea-node');
const key = "5b28bae827e651b3"
function xxteaDecrype(data){
    const decryptedbuffer = xxtea.decrypt(data, key);
    const decrypted = Buffer.from(decryptedbuffer).toString('utf-8')
   
    return JSON.parse(decrypted).data
}
 async function get_neimenggu_liveinfo(id){
    let url = "https://api-bt.nmtv.cn/broadcast/list"
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "content-type":"application/json; charset=UTF-8"
    };
    const data = "n6wT4YYLUZiY/41vQYu5oSHD2lotdczz5ohPQw=="
    let res = await axios.post(url,data,{
        headers:headers
    })
    let q = xxteaDecrype(res.data)
    let u = ""
 
    
    q.forEach(element => {
        if(element.data.id == id){
            u = element.data.streamUrl
        }
    });
    console.log(u)
    
    return u
}
module.exports = {
    get_neimenggu_liveinfo
}
get_neimenggu_liveinfo(126)