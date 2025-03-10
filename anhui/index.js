const axios = require('axios')


const url = `https://mapi.ahtv.cn/api/v1/channel.php?is_audio=0&category_id=1%2C2`;
const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Referer":"https://www.ahtv.cn/"
};
axios.get(url,{headers:headers}).then(res=>{
    let dataList = res.data
    dataList.forEach(element => {
        console.log(element.m3u8)
    });
})