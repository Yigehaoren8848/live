const dns = require('dns');
const { URL } = require('url');
const fetch = (await import('node-fetch')).default;

const url = 'https://tx.flv.huya.com/src/1423787821-1423787821-6115122127638102016-2847699098-10057-A-0-1.flv?wsSecret=8f4410eb12162bf4dc702660f5414a65&wsTime=67a862bb&seqid=3207912203443&ctype=tars_mobile&ver=1&fs=bgct&t=103&dMod=mseh-0&sdkPcdn=1_1&uid=1468910029311&t=103&sv=202412311405&sdk_sid=1739002174133&a_block=0&txyp=o%3Aq5%3B';  // 你的目标URL
const headers = {};  // 你的请求头

// 解析 URL 获取主机
const parsedUrl = new URL(url);
const host = parsedUrl.hostname;

// 强制使用 IPv4
dns.lookup(host, { family: 4 }, async (err, address) => {
    if (err) {
        console.error('DNS lookup error:', err);
        return;
    }

    // 使用 IPv4 地址替换原 URL
    parsedUrl.hostname = address;

    try {
        const response = await fetch(parsedUrl.toString(), {
            method: 'GET',
            headers: headers,
        });
        console.log('Response URL:', response.url);
    } catch (error) {
        console.error('Error fetching the URL:', error);
    }
});
