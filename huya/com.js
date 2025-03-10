function compareUrls(url1, url2) {
    const getParams = (url) => {
        const params = new URLSearchParams(url.split('?')[1]);
        let paramObj = {};
        for (let [key, value] of params) {
            paramObj[key] = value;
        }
        return paramObj;
    };

    const params1 = getParams(url1);
    const params2 = getParams(url2);

    let allEqual = true;

    for (const key in params1) {
        if (params1.hasOwnProperty(key)) {
            if (params1[key] !== params2[key]) {
                console.log(`Parameter '${key}' differs: '${params1[key]}' vs '${params2[key]}'`);
                allEqual = false;
            }
        }
    }

    // If both URLs have different parameters, also print missing keys in the second URL
    for (const key in params2) {
        if (params2.hasOwnProperty(key) && !(key in params1)) {
            console.log(`Parameter '${key}' exists in the second URL but not in the first`);
            allEqual = false;
        }
    }

    return allEqual;
}

// 示例用法
const url1 = `


https://ylog.huya.com/d.gif?act=/event&mid=CB0096610870000173D62962C9E9EB60&bve=chrome%2F116.0.0.0&lla=zh-CN&os=android&sco=24&sre=412.915&fve=0&jav=0&coo=1&domain=m.huya.com&fla=Y&sdk_ver=js-ya.huya-1.0&session_id2=CB009E80030000016D981BFA19157A30&sdid=0UnHUgv0_qmfD4KAKlwzhqdC5K7sK8SE62l_rjw0EwCJPiHR-JLkWH1IaVq2Ukk4jLQxs04_Ov8IdKn5s3kYf_Ci17ntYvaKSjP63D0spXeHWVkn9LtfFJw_Qo4kgKr8OZHDqNnuwg612sGyflFn1dvgWB-1mQjKBjjcWwTWJoaaQTgQN_-kuLXdwWFixcenv&platform=android&pageType=root&yyuid=&pro=huyawap&dty=live&curl=https%253A%252F%252Fm.huya.com%252F11352936&session_id=CB00966293B00001E01E120013737B40&watchvideo=1&anmos_uid=1468467901762&seqId=3202044337619&pas=&rso=&rso_desc=&eid=heartbeat&eid_desc=%E5%BF%83%E8%B7%B3&hasvedio=0&wap_domain=wap&wid=undefined&extar=&sguid=0a89c354b725546742028eca8fca980f&ua=mozilla%2F5.0%20(linux%3B%20android%2013%3B%20pixel%207)%20applewebkit%2F537.36%20(khtml%2C%20like%20gecko)%20chrome%2F116.0.0.0%20mobile%20safari%2F537.36&sharepage=0&ayyuid=1423787821&gameid=2135&game_name=%E4%B8%80%E8%B5%B7%E7%9C%8B&a_level=14&cid=1423787821%2F1423787821&totalCount=48442&ref=null&video_line=TX&curpage=%E7%9B%B4%E6%92%AD%E9%97%B4&curlocation=&prop=%7B%22anchor_uid%22%3A1423787821%2C%22game_id%22%3A2135%2C%22status%22%3A%221%22%7D&dur=2520627&rid=ods_action_log&furl=&sdver=1&cutc=1733578954384&auth_key=1733579254-524-b53e339fac803fb6ddb08013961a6436&__yafm=i&ati=&rep_times=1&rep_cnt=376`;
const url2 = `

https://ylog.huya.com/d.gif?act=/event&mid=CB0096610870000173D62962C9E9EB60&bve=chrome%2F116.0.0.0&lla=zh-CN&os=android&sco=24&sre=412.915&fve=0&jav=0&coo=1&domain=m.huya.com&fla=Y&sdk_ver=js-ya.huya-1.0&session_id2=CB009E80030000016D981BFA19157A30&sdid=0UnHUgv0_qmfD4KAKlwzhqdC5K7sK8SE62l_rjw0EwCJPiHR-JLkWH1IaVq2Ukk4jLQxs04_Ov8IdKn5s3kYf_Ci17ntYvaKSjP63D0spXeHWVkn9LtfFJw_Qo4kgKr8OZHDqNnuwg612sGyflFn1dvgWB-1mQjKBjjcWwTWJoaaQTgQN_-kuLXdwWFixcenv&platform=android&pageType=root&yyuid=&pro=huyawap&dty=live&curl=https%253A%252F%252Fm.huya.com%252F11352936&session_id=CB00966293B00001E01E120013737B40&watchvideo=1&anmos_uid=1468467901762&seqId=3202044337619&pas=&rso=&rso_desc=&eid=heartbeat&eid_desc=%E5%BF%83%E8%B7%B3&hasvedio=0&wap_domain=wap&wid=undefined&extar=&sguid=0a89c354b725546742028eca8fca980f&ua=mozilla%2F5.0%20(linux%3B%20android%2013%3B%20pixel%207)%20applewebkit%2F537.36%20(khtml%2C%20like%20gecko)%20chrome%2F116.0.0.0%20mobile%20safari%2F537.36&sharepage=0&ayyuid=1423787821&gameid=2135&game_name=%E4%B8%80%E8%B5%B7%E7%9C%8B&a_level=14&cid=1423787821%2F1423787821&totalCount=48442&ref=null&video_line=TX&curpage=%E7%9B%B4%E6%92%AD%E9%97%B4&curlocation=&prop=%7B%22anchor_uid%22%3A1423787821%2C%22game_id%22%3A2135%2C%22status%22%3A%221%22%7D&dur=2580643&rid=ods_action_log&furl=&sdver=1&cutc=1733579014399&auth_key=1733579314-58172-d9c68d88e42a28707320c7014f291fe2&__yafm=i&ati=&rep_times=1&rep_cnt=377`

const result = compareUrls(url1, url2);
console.log(result ? 'Parameters are equal' : 'Parameters are different');
