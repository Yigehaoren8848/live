const { create_auth_token, create_ciphertext, make_cKey, create_yspsdkinput,Wu } = require("../ysp/encrypt_for_params")

//测试正常
// create_auth_token("m2lpau1n_e5b5y5w8xmc","600002264","GlG8hfaDiM","3").then(r=>{console.log(r)})
//

d = create_ciphertext("m2lpau1n_e5b5y5w8xmc")
console.log("d",d)




// 1399651285|2024081301|1729683577|mg3c3b04ba|V1.0.0|m2lpau1n_e5b5y5w8xmc|5910204|https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|