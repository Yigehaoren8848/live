const axios = require('axios');
const crypto = require('crypto');
const querystring = require('querystring');


async function getHuyaUrl(id){

// 获取房间号

const c = ['tx', 'hw', 'hs', 'hy'];
const c_rand = c[Math.floor(Math.random() * c.length)];

const n = [0, 1, 2, 3];
const n_rand = n[Math.floor(Math.random() * n.length)];

const roomurl = `https://mp.huya.com/cache.php?m=Live&do=profileRoom&roomid=${id}`;

let response = await axios.get(roomurl);
const data = response.data.data;
console.log(data.stream.flv)
    const uid = data.profileInfo.uid;
    const streamname = data.stream.baseSteamInfoList[0].sStreamName;
    const url = data.stream.flv.multiLine[0].url;
    const burl = url.split('?')[0];

    // 构建 fm 字符串
    let fm = "DWq8BcJ3h6DJt6TY_$0_$1_$2_$3";
    const seqid = (parseInt(uid) + Math.floor(Date.now() / 1000 * 1000)).toString();
    const ctype = 'tars_wap';
    const t = '102';
    const ss = md5(`${seqid}|${ctype}|${t}`);
    const wsTime = (Math.floor(Date.now() / 1000) + 21600).toString(16);
    
    fm = fm.replace('$0', uid).replace('$1', streamname).replace('$2', ss).replace('$3', wsTime);
    
    const wsSecret = md5(fm);

    // 构建请求参数
    const s = {
      wsSecret,
      wsTime,
      ctype,
      seqid,
      uid,
      fs: 'bgct',
      ver: '1',
      t
    };

    const p = querystring.stringify(s);

    // 最终播放链接
    const playurl = `${burl}?${p}`;

    // 跳转到播放链接
    console.log(playurl);
   return playurl

}
// MD5 加密函数
function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}
getHuyaUrl('11342424')
module.exports = {
    getHuyaUrl
}
