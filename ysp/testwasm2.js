
const crypto = require("crypto-js")
const axios = require("axios")
const { create_auth_token, create_ciphertext, make_cKey, create_yspsdkinput,Wu } = require("../ysp/encrypt_for_params")
const { new_guid, get_random_str, re } = require("../ysp/index")
const { get_yspticket } = require("../ysp/yspticket")
const { getCnlidBypid } = require("../ysp/tvlists")
async function get_rael_url(pid) {
    const guid = new_guid()
    const rand_str = get_random_str();
    // const room_id = "600002264"
    // const pid = room_id;
    const seqid = "1"
    const cnlid = getCnlidBypid(pid)
    const auth_rand_str = get_random_str()
    let token_ts = await create_auth_token(guid, pid, auth_rand_str,seqid)
    const token = token_ts.token
    const ts = token_ts.ts
    let ciphertext = create_ciphertext(guid,cnlid)
    const cKey = make_cKey(ciphertext)
    //create_yspsdkinput已验证无问题
    let yspsdkinput = create_yspsdkinput(pid, guid, cKey,cnlid)
      //create_yspticket已验证无问题
    let yspticket = await get_yspticket(pid, ts, guid,cnlid)
    const nrequest_id = "999999" + get_random_str() + (new Date).getTime();
    let ts_ = new Date().getTime().toString()
    let input_p = make_input_p(pid,guid,cKey,cnlid)
    //create_yspsdksign已验证无问题
    let yspsdksign = await re(guid,ts_,seqid,nrequest_id,input_p)
    // let yspsdksign = await re("lvlmyrtu_4jimh8cwqos","1729653335874","8","999999p6fMIlHtiy1729652252313","f21fbd8137f0405fa6f2fed0493e87b1")
    console.log(":快快快坎坎坷坷",yspsdksign)
    
    const params = {
        "cnlid": cnlid,
        "livepid": pid,
        "stream": "2",
        "guid": guid,
        "cKey": cKey,
        "adjust": 1,
        "sphttps": "1",
        "platform": "5910204",
        "cmd": "2",
        "encryptVer": "8.1",
        "dtype": "1",
        "devid": "devid",
        "otype": "ojson",
        "appVer": "V1.0.0",
        "app_version": "V1.0.0",
        "channel": "ysp_tx",
        "defn": "fhd",
        "rand_str": rand_str
    }

    let sig_p = `adjust=1&appVer=V1.0.0&app_version=V1.0.0&cKey=${cKey}&channel=ysp_tx&cmd=2&cnlid=${cnlid}&defn=fhd&devid=devid&dtype=1&encryptVer=8.1&guid=${guid}&livepid=${pid}&otype=ojson&platform=5910204&rand_str=${rand_str}&sphttps=1&stream=20f$IVHi9Qno?G`
    const signature = crypto.MD5(sig_p).toString()
    let cookie = `guid=${guid}; versionName=99.99.99; versionCode=999999; vplatform=109; platformVersion=Chrome; deviceModel=129; newLogin=1; updateProtocol=1; nseqId=${seqid}; nrequest-id=${nrequest_id}`
    let  headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Content-Type": "application/json;charset=UTF-8",
        "Referer": "https://www.yangshipin.cn/",
        "accept-language":"zh-CN,zh;q=0.9,en;q=0.8",
        "sec-ch-ua":'"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        "sec-ch-ua-mobile":"?0",
        "sec-ch-ua-platform":'"Windows"',
        "sec-fetch-dest":"empty",
        "sec-fetch-mode":"cors",
        "sec-fetch-site":"same-site",
        "origin":"https://www.yangshipin.cn",
        "Cookie": cookie,
        "seqid":seqid,
        "Yspappid": "519748109",
        "request-id":nrequest_id,
        "yspticket":yspticket,
        "yspplayertoken":token,
        "yspsdkinput":yspsdkinput,
        "yspsdksign":yspsdksign
    }
    params["signature"] = signature
    url = "https://player-api.yangshipin.cn/v1/player/get_live_info"
    axios.get("https://csapi.yangshipin.cn/voapi/omsot/serverTime").then(res=>{
        console.log("啊山东科技，",res.data)
    })
    const res = await axios.post(url,params, {
        headers: headers
    });
    console.log( res.data)
    return res.data;
}
// main()
function make_input_p(pid,guid,cKey,cnlid) {
    const p = {
        "cnlid": cnlid,
        "livepid": pid,
        "stream": "2",
        "guid": guid,
        "cKey": cKey,
        "adjust": 1,
        "sphttps": "1",
        "platform": "5910204",
        "cmd": "2",
        "encryptVer": "8.1",
        "dtype": "1",
        "devid": "devid",
        "otype": "ojson",
        "appVer": "V1.0.0",
        "app_version": "V1.0.0",
        "channel": "ysp_tx",
        "defn": "fhd"
    }
    return Wu(p)
    
}
// let d = make_input_p("600002264","lvlmyrtu_4jimh8cwqos","--01C616676E8F9DA28A4A6E2AE5E5127C9F3D18C9F3239137EB2E06AEB71FD222F92003FD347ACB099A21C309C1B9118B0CCDB2E4584589D1B3F368A9D39A7CBE6C2AC1DD265F0431F846C92ADE8F6D82E2420CEC74B856CBEC1BCBEADAA69721D12BAD5218D5806D36AFB602D4A4F17350F90480C615BED25C858E8E5A79DE134366DCE50B334D072B2BDC5F77014CB21227BECA6873DFA33B904CFC3FF240AA6C")
// console.log("skdafj:",d)
// async function main(){
//     let data =await get_rael_url("600002309");
//     console.log(data)
// }
// main()
module.exports = {
    get_rael_url
}