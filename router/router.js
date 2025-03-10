const express = require('express');
const router = express.Router();

const { get_real_link } = require('../migu/index')
const { get_yy_real_link } = require('../yy/index')
const { get_real_url } = require('../hebeitv/index')
const { get_jilin_liveinfo } = require('../jilintv/index')
const { get_shanxi_liveinfo } = require('../shanxitv/index')
const { get_neimenggu_liveinfo } = require('../neimenggutv/index')
const { getHuyaUrl } = require('../huya/taobao')

// 主页路由
router.get('/', (req, res) => {
  // let token = create_auth_token(guid,pid,rand_str)
  res.send('Welcome to the Home Page!token');
});

router.get('/ysp/:room_id', async (req, res) => {
  const pid = req.params.room_id;
  let data = {}
  let data_ = await get_rael_url(pid);
  data_ = data_['data']
  data["real_url"] = data_["playurl"] + "&revoi" + data_["extended_param"]
  res.send(data)
});

router.get('/migu/:room_id', async (req, res) => {
  try {
    const contId = req.params.room_id;
    res.setHeader('Content-Type', 'text/plain');
    let data_ = await get_real_link(contId);
    res.send(data_);
  } catch (e) {
    console.log("**************************", e)
    res.send({ "msg": e.message });
  }
});
router.get('/huya/:room_id', async (req, res) => {
  try {
    const contId = req.params.room_id;
    let data_ = await getHuyaUrl(contId);
    res.send(data_);
  } catch (e) {
    res.send({ "msg": "参数异常或版权限制" });
  }
});
router.get('/yy/:room_id', async (req, res) => {
  try {
    const contId = req.params.room_id;
    let data_ = await get_yy_real_link(contId);
    res.send(data_);
  } catch (e) {
    res.send({ "msg": "参数异常或版权限制" });
  }
});

router.get('/stv/:province/:room_id', async (req, res) => {
  try {
    const province = req.params.province
    const contId = req.params.room_id;
   

    if (province.length < 1 || contId < 1) {
      
      res.send("");
      return
    } else {
      switch (province) {

        case "hebei": {
          let data_ = await get_real_url(contId);
          res.send(data_);
          break
        }
        case "jilin": {
          let data = await get_jilin_liveinfo(contId)
          res.send(data)
          break
        }
        case "shanxi": {
          let data = await get_shanxi_liveinfo(undefined, undefined, contId)
          res.send(data)
          break
        }
        case "neimenggu": {
          let data = await get_neimenggu_liveinfo(contId)
          res.send(data)
          break
        }
        default: {
          
          
          res.send("m3u8");
          
        }
      }

    }

  } catch (e) {
    console.log(e)
    res.send("error");
  }
});
module.exports = router;
