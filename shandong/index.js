const CryptoJS = require("crypto-js")
const axios = require('axios')

const mxpx = "FMRVPTYUGRXZTKBZ";
const q = "MLZWBUJLILAPLQXN";
const t = new Date().valueOf();
function aesEncrypt(plainText, key) {
    if (!plainText) {
        return "";
    }
    const iv = CryptoJS.enc.Utf8.parse("0000000000000000"); // 使用固定 IV 或传入 IV
    const encrypted = CryptoJS.AES.encrypt(
        plainText,
        CryptoJS.enc.Utf8.parse(key),
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    );
    return encrypted.toString();
}

function aesDecrypt(cipherText, key, iv) {
    const decrypted = CryptoJS.AES.decrypt(
        cipherText,
        CryptoJS.enc.Utf8.parse(key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
}


async function getchData(channelCode) {
    const postData = aesEncrypt(`{"channelMark":${channelCode}}`, q)
    console.log(postData)
    let p = CryptoJS.MD5(`${channelCode}${t}${mxpx}`).toString()
    const apiurl = `https://feiying.litenews.cn/api/v1/auth/exchange?t=${t}&s=${p}`
    const headers = {
        'Content-Type': 'text/plain',
        'Referer': 'https://v.iqilu.com/'
    };
    let res =await axios.post(apiurl, postData, {
        headers: headers
    });
    let oop = aesDecrypt(res.data, q, '30303030303030303030303030303030')
    const regex = /https?:\/\/[^\s"']+/g;
    const matches = oop.match(regex);
    const u = matches[0]
    console.log(u)
    // let res_ =await axios.get(u,{headers:headers})
    // const text_ = res_.data
    // const regex_ = /BANDWIDTH=\d+(?:\r?\n)(https?:\/\/[^\s"']+)/;
    // const matchs_ = text_.match(regex_);

    // if (matchs_) {
    //     console.log(matchs_[1]); // 输出匹配到的URL
    // }
}

/**
 * 山东卫视  24581 (需要设置referer:https://v.iqilu.com/)
 * 齐鲁频道 24584
 * 体育频道 24587
 * 生活频道 24596
 * 综艺频道 24593
 * 新闻频道 24602  (需要设置referer:https://v.iqilu.com/)
 * 农科频道 24599
 * 文旅频道 24590
 * 少儿频道 24605  (需要设置referer:https://v.iqilu.com/)
 */
const channelCode = "24605"
getchData(channelCode)