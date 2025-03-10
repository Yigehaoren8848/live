const axios = require('axios')


async function ve() {

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
    var res =await axios.post(url,data,{
        headers:headers
    })
    let uid = res.data.data.uid;
 
    return uid;
}
function p(anmos_uid){
    const ayyuid = "1239543150234"
    const cid = `${ayyuid}/${ayyuid}`
   
    let u = `https://ylog.huya.com/d.gif?act=/eventCAFF96F7C2900001B4571A601D00178E&bve=chrome%2F122.0.6261.119&lla=zh-CN&os=android&sco=24&sre=280.580&fve=0&jav=0&coo=1&domain=m.huya.com&fla=Y&sdk_ver=js-ya.huya-1.0&2=CAFFD85A7D500001F98D189817E03F00&=0UnHUgv0_qmfD4KAKlwzhqQjhbIumBm94lKrGkJC7Zd1r3OBsnia0IL83CrufeAHOghhESv-t-z2Qx8lOVGIUfzZIuc25KaJlHfbJ2cY6r3HWVkn9LtfFJw_Qo4kgKr8OZHDqNnuwg612sGyflFn1do_4_jTQZQbTvzvQ-TR0fPc-DPbnt-5nzdcH-r00vh6K&platform=android&pageType=root&yyuid=&pro=huyawap&=live&=https%253A%252F%252Fm.huya.com%252F29465879&=CAFF96F518100001E09C1E6B5F90D000&watchvideo=1&anmos_uid=${anmos_uid}&=3201799444825&pas=&rso=&rso_desc=&eid=heartbeat&eid_desc=%E5%BF%83%E8%B7%B3&hasvedio=0&wap_domain=wap&wid=undefined&extar=&=0a892f4c890f50673c02fd94fe940e03&ua=mozilla%2F5.0%20(linux%3B%20u%3B%20android%2012%3B%20zh-cn%3B%2022041211ac%20build%2Fsp1a.210812.016)%20applewebkit%2F537.36%20(khtml%2C%20like%20gecko)%20chrome%2F122.0.6261.119%20mobile%20safari%2F537.36%20xiaomi%2Fmiuibrowser%2F18.6.71011&sharepage=0&ayyuid=${ayyuid}&gameid=2135&game_name=%E4%B8%80%E8%B5%B7%E7%9C%8B&=7&cid=${cid}&=41347&ref=null&=AL&curpage=%E7%9B%B4%E6%92%AD%E9%97%B4&curlocation=&=%7B%22anchor_uid%22%3A1239543150234%2C%22game_id%22%3A2135%2C%22status%22%3A%221%22%7D&=120027&rid=ods_action_log&furl=&sdver=1&=1733368782046&=1733369082-84156-2cdb41cc7b03b603f076425d704b985b&__yafm=i&ati=&=1&=1022`
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
        console.log("ok:",anmos_uid)
    
    })
}

async function main(){
    let uid = await ve();
    console.log(uid)
    p(uid)
}
main()


