const axios = require('axios')
function createLinkedListIterative(values, lengths) {
  if (values.length !== lengths.length) {
    throw new Error("Values and lengths arrays must have the same length");
  }
  let head = null;
  // 从尾部向前构造
  for (let i = values.length - 1; i >= 0; i--) {
    const newNode = {
      val: values[i],       // 当前节点的 val
      len: lengths[i],      // 当前节点的 len
      next: head,           // 指向当前链表的头部
    };
    head = newNode;         // 更新头节点
  }
  return head;
}
function strProcess(t, e, n) {
  for (var i, r, o = n, s = 0; s < t.length; ++s)
    (i = t.charCodeAt(s)) < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192,
      e[n++] = 63 & i | 128) : 55296 == (64512 & i) && 56320 == (64512 & (r = t.charCodeAt(s + 1))) ? (i = 65536 + ((1023 & i) << 10) + (1023 & r),
        ++s,
        e[n++] = i >> 18 | 240,
        e[n++] = i >> 12 & 63 | 128,
        e[n++] = i >> 6 & 63 | 128,
        e[n++] = 63 & i | 128) : (e[n++] = i >> 12 | 224,
          e[n++] = i >> 6 & 63 | 128,
          e[n++] = 63 & i | 128);

  return n - o
}
function numProcess(t, e, n) {
  for (; t > 127;)
    e[n++] = 127 & t | 128,
      t >>>= 7;
  e[n] = t

}
function objProcess(t, e, n) {
  for (; t.hi;)
    e[n++] = 127 & t.lo | 128,
      t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0,
      t.hi >>>= 7;
  for (; t.lo > 127;)
    e[n++] = 127 & t.lo | 128,
      t.lo = t.lo >>> 7;
  e[n++] = t.lo

}
function fn(val, e, n) {
  if ("string" == typeof val) {
    strProcess(val, e, n)
  }
  else if ("number" == typeof val) {
    numProcess(val, e, n)
  } else {
    objProcess(val, e, n)
  }
}
function finish(linkedList, uint8Array) {
  for (var t = linkedList, e = uint8Array, n = 0; t;)
    fn(t.val, e, n),
      n += t.len,
      t = t.next;
  return e
}

// 示例：构造链表
async function get_yy_real_link(rid) {
  let sid=await getId(rid);
  let st = Math.floor(Date.now() / 1e3)
  const values = [ 58, 59, 10, 3, "web", 18, 0, 26, 0, 34, 0, 42, 6, "chrome", 50, 14, "122.0.6261.119", 58, 0, 66, 0, 74, 0, 82, 0, 90, 3, "280", 98, 3, "580", 106, 0, 112, 8, 120, 0, 66, 32, 8, 1, 32, 8, 40, 0, 48, { "lo": 0, "hi": 0 }, 56, st, 88, { "lo": 4294967295, "hi": 4294967295 }, 96, 3, 112, 1, 128, 1, 802, 76, 8, { "lo": 1577146952, "hi": 403 }, 18, 1, "0", 26, 1, "0", 34, 10, sid, 42, 10, sid, 48, { "lo": 0, "hi": 0 }, 56, 108, 66, 1, "0", 72, 1, 82, 10, "yylive_web", 90, 5, "3.0.7", 98, 1, "0", 106, 6, "5.19.5" ]
  const lengths =[1,1,1,1,3,1,1,1,1,1,1,1,1,6,1,1,14,1,1,1,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,10,1,1,1,1,2,1,2,1,1,6,1,1,1,1,1,1,1,1,10,1,1,10,1,1,1,1,1,1,1,1,1,1,1,10,1,1,5,1,1,1,1,1,6]
  const linkedList = createLinkedListIterative(values, lengths);
  const uint8Array = new Uint8Array(174)
  let data = finish(linkedList, uint8Array)
  const t = Date.now()
  let headers = {
    'referer': 'https://wap.yy.com/',
    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 12; zh-cn; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36 XiaoMi/MiuiBrowser/18.6.71011'
  }
  const url = `https://stream-manager.yy.com/v3/channel/streams?uid=0&cid=${sid}&sid=${sid}&appid=0&sequence=${t}&encode=protobuf`

  
  let response =await axios.post(url, data, {
    headers: headers
  })
  let da =  response.data
  const match = da.match(/https:\/\/sslproxy\.yy\.com:\d+\/[^\s]+\.m3u8\?[^*\s]+/);
  v(match[0])
  return match[0]
}

async function getId(r_id) {
  let url = `https://wap.yy.com/mobileweb/${r_id}/0#/entertainment`
  let headers = {
    'referer': 'https://wap.yy.com/',
    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 12; zh-cn; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36 XiaoMi/MiuiBrowser/18.6.71011'
  }

  let r = await axios.get(url, {
    headers: headers
  })
  let d = r.data
  const videoInfoMatch = d.match(/videoInfo:\s*\{([^}]+)\}/);
  if (videoInfoMatch) {
    const videoInfoContent = videoInfoMatch[1];
    const sidMatch = videoInfoContent.match(/"sid":\s*'(\d+)'/);
    if (sidMatch) {
      return sidMatch[1]
    } else {
      
      console.log("未找到 sid 的值");
      return ""
    }
  } else {
    console.log("未找到 videoInfo 对象");
    return ""
  }
}
async function v(url) {
  let h = {
      "accept": "*/*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "connection": "keep-alive",
      "pragma": "no-cache",
      "referer":  "https://wap.yy.com/",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent": "Mozilla/5.0 (Linux; Android 12; Pixel 6 Build/SQ3A.220705.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/407.0.0.0.65;]"
  };
  const fetch = (await import('node-fetch')).default;
  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: h,
      });
      console.log('状态码:', response.status);
  } catch (error) {
      console.error('请求出错:', error);
  }
}
async function main(){
  
  
  let link =await get_yy_real_link("350891")
  console.log('Response:',link);
}
main()

module.exports = {
  get_yy_real_link
}
