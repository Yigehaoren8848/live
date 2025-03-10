const axios = require("axios")
const CryptoJS = require("crypto-js")

//创建user-agent
function create_headers(){

        const platform="pc"
        const version= "2.22.4"
        const nonce =  Math.random().toString(36).slice(-8)
        const timestamp=  Math.floor(Date.now() / 1e3)
        const ApiVersion= "v1"
        const  channel_id = "1"
        let q = `Api-Version=${ApiVersion}&channel_id=${channel_id}&nonce=${nonce}&platform=${platform}&timestamp=${timestamp}&version=${version}&`
        let sign = CryptoJS.MD5(CryptoJS.MD5(q+"28c8edde3d61a0411511d3b1866f0636").toString()).toString()
      
        let headers = {
            "sign":sign,
            "version":version,
            "platform":platform,
            "nonce":nonce,
            "channel_id":channel_id,
            "m-uuid":"_SOBnelk-b8UlP0oQdXQf",
            "timestamp":timestamp,
            "api-version":ApiVersion,
            "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
            "referer":"https://live.kankanews.com/"
        }
        console.log(headers)
        return headers;

}
let url = `https://kapi.kankanews.com/content/pc/tv/channel/detail?channel_id=1`
let headers = create_headers()
axios.get(url,{headers:headers}).then(res=>{
    console.log(res.data)
})
