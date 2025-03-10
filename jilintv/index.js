const xxtea = require('xxtea-node');
const axios = require('axios')
const key = "5b28bae827e651b3"
function xxteaDecrype(data){
    const decryptedbuffer = xxtea.decrypt(data, key);
    const decrypted = Buffer.from(decryptedbuffer).toString('utf-8')
  
    return JSON.parse(decrypted)
}

async function get_jilin_liveinfo(id){
    /**
     * 参数id
     * 2<==>吉林卫视
     * 3<==>吉林都市
     * 4<==>吉林生活
     * 5<==>吉林影视
     * 6<==>吉林乡村
     * 8<==>吉林综艺
     */
    let url = "https://clientapi.jlntv.cn/broadcast/list?page=1&size=10000&type=1"
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    };
    let data = await axios.get(url,{
        headers:headers
    })
    let s_ = xxteaDecrype(data.data)
    
    let u = ""
    s_.data.forEach(element => {
        if(element.data.id == id){
            u = element.data.streamUrl
          
        }
       
    });
    console.log(s_)
    return u
}
// async function main(){
//     let d = await get_jilin_liveinfo(8)
//    console.log(d)
    
// }

// main()
module.exports = {
    get_jilin_liveinfo
}