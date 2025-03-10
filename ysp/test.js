// var CryptoJS = require("crypto-js");
// const constants = require('./constants')
// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false; // 长度不同，直接返回 false
//     }
//     return arr1.every((element, index) => element === arr2[index]);
// }

// function stringify(t) {
//     var e = t.words;
//     t = t.sigBytes;
//     for (var n = [], r = 0; r < t; r++) {
//         var i = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
//         n.push((i >>> 4).toString(16)),
//             n.push((15 & i).toString(16))
//     }
//     return n.join("")
// }

// function toUpperCase(t) {
//     return t.length > 0 ? t.toUpperCase() : ""
// }

// function make_cKey(plaintext) {
//     // 密钥 
//     const key = CryptoJS.enc.Hex.parse(constants.KEY)
//     // 初始化向量 (IV)
//     const iv = CryptoJS.enc.Hex.parse(constants.IV)
//     // 使用 AES-CBC 模式加密
//     var encrypted = CryptoJS.AES.encrypt(plaintext, key, {
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//     });
//     var ciphertext = encrypted.ciphertext;
//     return "--01"+toUpperCase(stringify(ciphertext));
// }
// var plaintext = "|-267224552|2024081301|1729139750|mg3c3b04ba|V1.0.0|lvlmyrtu_4jimh8cwqos|5910204|https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|"
// const ckey = make_cKey(plaintext);
// console.log(`生成的cKey:${ckey}`) 

/**
 * 生成待加密明文字符串
 */

// const constants = require('./constants')
// function create_ciphertext(guid) {
//     const cnlib = constants.CNLIB
//     const timest = Math.round((new Date).getTime() / 1e3)
//     const Nu = create_Nu();
//     const version = constants.VERSION
//     const Zu = '5910204'
//     const platform = 'https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32'
//     let r = `|${cnlib}|${timest}|${Nu}|${version}|${guid}|${Zu}|${platform}|`
//     let El = create_Cl(r);
//     r = El + r;
//     console.log(r)
//     return r;
// }

// function create_Nu() {
//     const uitt = "໓໙ຍໝຍໜຎຊໜໟ"
//     let p = ""
//     for (let q = 0; q < uitt.length; q++) {
//         p += String["fromCharCode"](3774 ^ uitt["c" + "harCod" + "eAt"](q));
//     }
//     return p;
// }

// function create_Cl(ciphertext) {
//     let El = 0;
//     for (var Rl = 0; Rl < ciphertext.length; Rl++)
//         El = (El << 5) - El + ciphertext.charCodeAt(Rl),
//             El &= El;
//     console.log(El)
//     return El;
// }
// create_ciphertext("lvlmyrtu_4jimh8cwqos")

var CryptoJS = require("crypto-js");

// 要哈希的字符串
var plaintext = 
"adjust=1&app_version=V1.0.0&appVer=V1.0.0&channel=ysp_tx&cKey=--010FB41AFD785ECBC8F95EE6CCB65D2AC1235EC66594C94FA3F9D4B0AE9C99F5DFF923487D42F7E42983917722E8F227F37765008F26A48A4607A1D99C4A49AAF4E16948C79BC46BA118A64E9AB6BA26FB194C9F1028A3F574602A4E03CBFEC3BF15C2E51D6410244405A11F9C35DC8298105E7B99CA2FF62533536E1BDD83C3010A97DA2DFF6184248C4AB69C12ED67ECD1D2A3E8E244CA6197894BFCB5372A65&cmd=2&cnlid=2024081301&defn=fhd&devid=devid&dtype=1&encryptVer=8.1&guid=lvlmyrtu_4jimh8cwqos&livepid=600002264&otype=ojson&platform=5910204&sphttps=1&stream=2"
// 计算 MD5 哈希
var hash = CryptoJS.MD5(plaintext);

// 将哈希结果转换为十六进制字符串
console.log("MD5 Hash: " + hash.toString());

