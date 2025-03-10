
const moment = require('moment');




function get_ifengliurl(ip_,id_){
    const n = {
        'cctv-1hd': 2, //CCTV1
        'cctv-2hd': 2, //CCTV2
        'cctv-3hd': 2, //CCTV3
        'cctv-4sd': 1, //CCTV4
        'cctv-5hd': 2, //CCTV5
        'cctv-6hd': 2, //CCTV6
        'cctv-7hd': 2, //CCTV7
        'cctv-8hd': 2, //CCTV8
        'cctv-9hd': 2, //CCTV9
        'cctv-10hd': 2, //CCTV10
        'cctv-11sd': 1, //CCTV11
        'cctv-12hd': 2, //CCTV12
        'cctv-newssd': 1, //CCTV13
        'cctv-14hd': 2, //CCTV14
        'cctv-yysd': 1, //CCTV15
        'cctv-17hd': 2, //CCTV17
        'hnws-hd': 2, //湖南卫视
        'shdfws-hd': 2, //东方卫视
        'jsws-hd': 2, //江苏卫视
        'gdws-hd': 2, //广东卫视
        'zsws-hd': 2, //浙江卫视
        'bjws-hd': 2, //北京卫视
        'szws-hd': 2, //深圳卫视
        'tjws-sd': 1, //天津卫视
        'sdws-hd': 2, //山东卫视
        'ahws-sd': 1, //安徽卫视
        'jxws-hd': 2, //江西卫视
        'hljws-hd': 2, //黑龙江卫视
        'scws-hd': 2, //四川卫视
        'gzws-sd': 1, //贵州卫视
        'hbws-sd': 1, //湖北卫视
        'lnws-hd': 2, //辽宁卫视
        'gxws-sd': 1, //广西卫视
        'cqws-sd': 1, //重庆卫视
        'fjws-hd': 2, //东南卫视
        'jlws-hd': 2, //吉林卫视
        'lyws-sd': 1, //海南卫视
        'ynws-hd': 2, //云南卫视
        'hnws-sd': 1, //河南卫视
        'hebeiws-sd': 1, //河北卫视
        'sxws-sd': 1, //陕西卫视
        'shanxiws-sd': 1, //山西卫视
        'nxws-sd': 1, //宁夏卫视
        'xzws-sd': 1, //西藏卫视
        'xjws-sd': 1, //新疆卫视
        'nmws-sd': 1, //内蒙古卫视
        'btws-sd': 1, //兵团卫视
    };
    
    const cut = 5;
    const offset = 4;
    const ip = ip_ || 'cc2025-ynbit.ifengli.com:2000';
    const id = id_ || 'bjws-hd';
    const playseek =  '';



    const now = Math.floor(Date.now() / 1000);
    const url_pre = `http://${ip}/live/${id}/${n[id]}500/`;
    let randomNumber = '';
    for (let i = 0; i < 19; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    const url_end = `.ts?innersid=${randomNumber}`;

    let m3u8 = '';

    if (playseek) {
        const t_arr = playseek.split('-');
        const start = Math.floor(moment(t_arr[0]).unix() / cut);
        const end = Math.floor(moment(t_arr[1]).unix() / cut);
        m3u8 = `#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:${cut}\n#EXT-X-MEDIA-SEQUENCE:${start}\n`;
        for (let i = start; i < end; i++) {
            m3u8 += `#EXTINF:${cut},\n${url_pre}${i}${url_end}\n`;
        }
        m3u8 += '#EXT-X-ENDLIST';
    } else {
        const start = Math.floor(now / cut - offset);
        m3u8 = `#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:${cut}\n#EXT-X-MEDIA-SEQUENCE:${start}\n`;
        for (let i = 0; i < 3; i++) {
            m3u8 += `#EXTINF:${cut},\n${url_pre}${start + i}${url_end}\n`;
        }
    }
    console.log(m3u8)
    
    return m3u8
}
get_ifengliurl("","cctv-14hd")
module.exports = {
    get_ifengliurl
}
