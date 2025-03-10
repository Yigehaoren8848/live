
const crypto = require("crypto-js")
const crypto_ = require('crypto');
function generateUUID() {
    return crypto_.randomBytes(16).toString('hex'); // 32位（8字符十六进制）    
}

async function main(id) {
    //
    /**
     * 01浙江卫视
     * 02钱江都市
     * 03经济生活
     * 04影视科教
     * 06民生休闲
     * 07新闻频道
     * 08少儿频道
     * 10浙江国际
     * 11好易购
     * 12之江记录
     */
   
    let host = "zwebl02.cztv.com"
    let pathname = `/live/channel${id}1080P.m3u8`
    let t = Math.floor(Date.now() / 1e3)
    let uid = 0
    let uuid = generateUUID();
    uuid = uuid.split("")
    uuid[12]= "4"
    uuid[16]= "a"
    uuid=uuid.join("")
    let key ="CHWr9VybUeBZE1VB"
    let  r = `${pathname}-${t}-${uuid}-${uid}-${key}`;
    let p = crypto.MD5(r).toString()
    let auth_key = `https://${host}${pathname}?auth_key=${t}-${uuid}-${uid}-${p}`
    console.log(auth_key)
}

main("01")