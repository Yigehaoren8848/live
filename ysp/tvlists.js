

let videoConfig = [
  { channelName: 'CCTV4K', pid: '600002264', cnlid: '2024081301' },
  { channelName: 'CCTV1', pid: '600001859', cnlid: '2024078201' },
  { channelName: 'CCTV2', pid: '600001800', cnlid: '2024075401' },
  { channelName: 'CCTV3', pid: '600001801', cnlid: '2024068501' },
  { channelName: 'CCTV4', pid: '600001814', cnlid: '2024078301' },
  { channelName: 'CCTV5', pid: '600001818', cnlid: '2024078401' },
  { channelName: 'CCTV5+', pid: '600001817', cnlid: '2024078001' },
  { channelName: 'CCTV6', pid: '600108442', cnlid: '2013693901' },
  { channelName: 'CCTV7', pid: '600004092', cnlid: '2024072001' },
  { channelName: 'CCTV8', pid: '600001803', cnlid: '2024078501' },
  { channelName: 'CCTV9', pid: '600004078', cnlid: '2024078601' },
  { channelName: 'CCTV10', pid: '600001805', cnlid: '2024078701' },
  { channelName: 'CCTV11', pid: '600001806', cnlid: '2024078801' },
  { channelName: 'CCTV12', pid: '600001807', cnlid: '2024078901' },
  { channelName: 'CCTV13', pid: '600001811', cnlid: '2024079001' },
  { channelName: 'CCTV14', pid: '600001809', cnlid: '2024079101' },
  { channelName: 'CCTV15', pid: '600001815', cnlid: '2024079201' },
  { channelName: 'CCTV16-HD', pid: '600098637', cnlid: '2024079301' },
  { channelName: 'CCTV16(4K）', pid: '600099502', cnlid: '2024083701' },
  { channelName: 'CCTV17', pid: '600001810', cnlid: '2024079501' },
  { channelName: 'CGTN', pid: '600014550', cnlid: '2024181701' },
  { channelName: 'CGTN法语频道', pid: '600084704', cnlid: '2024181801' },
  { channelName: 'CGTN俄语频道', pid: '600084758', cnlid: '2024181901' },
  { channelName: 'CGTN阿拉伯语频道', pid: '600084782', cnlid: '2024182001' },
  { channelName: 'CGTN西班牙语频道', pid: '600084744', cnlid: '2024182101' },
  { channelName: 'CGTN外语纪录频道', pid: '600084781', cnlid: '2024182301' },
  { channelName: 'CCTV风云剧场频道', pid: '600099658', cnlid: '2024171703' },
  { channelName: 'CCTV第一剧场频道', pid: '600099655', cnlid: '2024171803' },
  { channelName: 'CCTV怀旧剧场频道', pid: '600099620', cnlid: '2024171903' },
  { channelName: 'CCTV世界地理频道', pid: '600099637', cnlid: '2024172003' },
  { channelName: 'CCTV风云音乐频道', pid: '600099660', cnlid: '2024163303' },
  { channelName: 'CCTV兵器科技频道', pid: '600099649', cnlid: '2024172103' },
  { channelName: 'CCTV风云足球频道', pid: '600099636', cnlid: '2012514203' },
  {
    channelName: 'CCTV高尔夫·网球频道',
    pid: '600099659',
    cnlid: '2024166203'
  },
  { channelName: 'CCTV女性时尚频道', pid: '600099650', cnlid: '2024172203' },
  {
    channelName: 'CCTV央视文化精品频道',
    pid: '600099653',
    cnlid: '2024172303'
  },
  { channelName: 'CCTV央视台球频道', pid: '600099652', cnlid: '2024172403' },
  { channelName: 'CCTV电视指南频道', pid: '600099656', cnlid: '2024172503' },
  { channelName: 'CCTV卫生健康频道', pid: '600099651', cnlid: '2024165203' },
  { channelName: '北京卫视', pid: '600002309', cnlid: '2024052703' },
  { channelName: '江苏卫视', pid: '600002521', cnlid: '2024171103' },
  { channelName: '东方卫视', pid: '600002483', cnlid: '2024054503' },
  { channelName: '浙江卫视', pid: '600002520', cnlid: '2024054703' },
  { channelName: '湖南卫视', pid: '600002475', cnlid: '2024054803' },
  { channelName: '湖北卫视', pid: '600002508', cnlid: '2024171203' },
  { channelName: '广东卫视', pid: '600002485', cnlid: '2024060903' },
  { channelName: '广西卫视', pid: '600002509', cnlid: '2024060703' },
  { channelName: '黑龙江卫视', pid: '600002498', cnlid: '2024061003' },
  { channelName: '海南卫视', pid: '600002506', cnlid: '2024055603' },
  { channelName: '重庆卫视', pid: '600002531', cnlid: '2024061103' },
  { channelName: '深圳卫视', pid: '600002481', cnlid: '2024061303' },
  { channelName: '四川卫视', pid: '600002516', cnlid: '2024061403' },
  { channelName: '河南卫视', pid: '600002525', cnlid: '2024059703' },
  { channelName: '福建东南卫视', pid: '600002484', cnlid: '2024061503' },
  { channelName: '贵州卫视', pid: '600002490', cnlid: '2024061603' },
  { channelName: '江西卫视', pid: '600002503', cnlid: '2024061703' },
  { channelName: '辽宁卫视', pid: '600002505', cnlid: '2024171303' },
  { channelName: '安徽卫视', pid: '600002532', cnlid: '2024171403' },
  { channelName: '河北卫视', pid: '600002493', cnlid: '2024171503' },
  { channelName: '山东卫视', pid: '600002513', cnlid: '2024171603' }
]

function getCnlidBypid(pid){
  let tar;

  videoConfig.map(o=>{
    if(o.pid === pid) {
      tar = o
    }
  })
  return tar!=null && tar!== undefined ? tar.cnlid : ""
}
module.exports = {
  getCnlidBypid
}
// console.log(getCnlidBypid("600002513"))
// let data = [
//     [
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV4K",
//             "pid": "600002264",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/3e9d06fd7244d950df5838750f1c6ac3456e172b51caca2c16d2282125b111e8.png?imageMogr2/format/webp",
//             "streamId": "2024081301",
//             "is4K": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/aa672c5be752aa8f1f6ce1ecec0ff5d544293362f6b7a2bfababdd1463fcb9b3.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/3e9d06fd7244d950df5838750f1c6ac3456e172b51caca2c16d2282125b111e8.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30004",
//                         "text": "电视-pid-4k"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV1",
//             "pid": "600001859",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/d57905b93540bd15f0c48230dbbbff7ee0d645ff539e38866e2d15c8b9f7dfcd.png?imageMogr2/format/webp",
//             "streamId": "2024078201",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/6781594b0ba3ff3f50195efa3ee457c7c6794baaa10d1330379cc7a316a62004.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/d57905b93540bd15f0c48230dbbbff7ee0d645ff539e38866e2d15c8b9f7dfcd.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV2",
//             "pid": "600001800",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/20115388de0207131af17eac86c33049b95d69eaff064e55653a1b941810a006.png?imageMogr2/format/webp",
//             "streamId": "2024075401",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/993f64e4a98aa15a7fad65f4a703db2f455e39983660d86eb0c026e78a1a5ef6.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/20115388de0207131af17eac86c33049b95d69eaff064e55653a1b941810a006.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV3",
//             "pid": "600001801",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/7b7a65c712450da3deb6ca66fbacf4f9aee00d3f20bd80eafb5ada01ec63eb3a.png?imageMogr2/format/webp",
//             "streamId": "2024068501",
//             "isVip": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/5afe733dfc75f8fdd6ea31e8081a922a07f4041906743adc04096495368970a7.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/7b7a65c712450da3deb6ca66fbacf4f9aee00d3f20bd80eafb5ada01ec63eb3a.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV4",
//             "pid": "600001814",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/f357e58fdbcc076a3d65e1f958c942b2e14f14342c60736ceed98b092d35356a.png?imageMogr2/format/webp",
//             "streamId": "2024078301",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/5e9729f7f334232fb7963bcc316c89f2144197441972c7c8d7e52fa0674d124f.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/f357e58fdbcc076a3d65e1f958c942b2e14f14342c60736ceed98b092d35356a.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV5",
//             "pid": "600001818",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/0a6a7138952675983a3d854df7688557b286d59aa06166edae51506f9204d655.png?imageMogr2/format/webp",
//             "streamId": "2024078401",
//             "isVip": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/a328f9366ed1a3c65256724863dc0903ede93fed54caec1a6488334fa2ae2a86.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/0a6a7138952675983a3d854df7688557b286d59aa06166edae51506f9204d655.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV5+",
//             "pid": "600001817",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/649ad76a90bfef55b05db9fe52e006487280f619089099d5dc971e387fc6eff0.png?imageMogr2/format/webp",
//             "streamId": "2024078001",
//             "isVip": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/878af2ee85c7ce1c609438e4af81fc7387c18820c2245d427cdeb81406ec6b36.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/649ad76a90bfef55b05db9fe52e006487280f619089099d5dc971e387fc6eff0.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV6",
//             "pid": "600108442",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/741515efda91f03f455df8a7da4ee11fa9329139c276435cf0a9e2af398d5bf2.png?imageMogr2/format/webp",
//             "streamId": "2013693901",
//             "isVip": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/3e8e95f3fefadb0d650d615818520239f7fd74fb664a5415f01dcb501b08c530.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/741515efda91f03f455df8a7da4ee11fa9329139c276435cf0a9e2af398d5bf2.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV7",
//             "pid": "600004092",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/b29af94e295ebdf646cefb68122c429b9cd921f498ca20d2d8070252536f9ff9.png?imageMogr2/format/webp",
//             "streamId": "2024072001",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/a033df0b543552c1d457e63b88e6230c05595de9ec01f14401cba0c6694a4939.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/b29af94e295ebdf646cefb68122c429b9cd921f498ca20d2d8070252536f9ff9.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV8",
//             "pid": "600001803",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/ad51de94426a0ba039e6dd6a8534ea98ecc813a6176bde87b4f18cc34d6d7590.png?imageMogr2/format/webp",
//             "streamId": "2024078501",
//             "isVip": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/099f902caa70dbfdeafc782b29cb14ab6d6bf6fc83e39aeff2d56507ba9bb473.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/ad51de94426a0ba039e6dd6a8534ea98ecc813a6176bde87b4f18cc34d6d7590.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV9",
//             "pid": "600004078",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/2ed1b4deeca179d5db806bb941790f82eb92a1b7299c1c38fe027f95a5caee5e.png?imageMogr2/format/webp",
//             "streamId": "2024078601",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/8ea8e99a2302a1f053cce9841c34d1de0953b81156abf7a5928465b436506262.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/2ed1b4deeca179d5db806bb941790f82eb92a1b7299c1c38fe027f95a5caee5e.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV10",
//             "pid": "600001805",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/aa6157ec65188cd41826e5a2f088c3d6d153205f5f6428258d12c59999e221aa.png?imageMogr2/format/webp",
//             "streamId": "2024078701",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/518355e0bbc35c0808e9ca7c73bc6be7d4616c00a18b4ff96187e94112964272.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/aa6157ec65188cd41826e5a2f088c3d6d153205f5f6428258d12c59999e221aa.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV11",
//             "pid": "600001806",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/ed12ed7c7a1034dae4350011fe039284c5d5a836506b28c9e32e3c75299625c0.png?imageMogr2/format/webp",
//             "streamId": "2024078801",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/3ee60543f2f46e7fdd99dc05083c1dd60903d4847d8af222e689a3f842d2d57f.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/ed12ed7c7a1034dae4350011fe039284c5d5a836506b28c9e32e3c75299625c0.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV12",
//             "pid": "600001807",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/484083cffaa40df7e659565e8cb4d1cc740158a185512114167aa21fa0c59240.png?imageMogr2/format/webp",
//             "streamId": "2024078901",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/aaabeb96b982fda2b81d82d1d40160ad51c8a28005d7ded8eb2ac97ad221555f.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/484083cffaa40df7e659565e8cb4d1cc740158a185512114167aa21fa0c59240.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV13",
//             "pid": "600001811",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/266da7b43c03e2312186b4a999e0f060e8f15b10d2cc2c9aa32171819254cf1a.png?imageMogr2/format/webp",
//             "streamId": "2024079001",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/04574f27577acab03062afbf5c88986ee6f006cc2ba0dfb21c7a1c637f4a6469.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/266da7b43c03e2312186b4a999e0f060e8f15b10d2cc2c9aa32171819254cf1a.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV14",
//             "pid": "600001809",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/af6b603896938dc346fbb16abfc63c12cba54b0ec9d18770a15d347d115f12d5.png?imageMogr2/format/webp",
//             "streamId": "2024079101",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/62b08ec3f4ec63b1cf4f2df623c1f90712605f6cbef54f07059a6743db2fc3d5.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/af6b603896938dc346fbb16abfc63c12cba54b0ec9d18770a15d347d115f12d5.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV15",
//             "pid": "600001815",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/2ceee92188ef684efe0d8b90839c4f3ad450d179dc64d59beff417059453af47.png?imageMogr2/format/webp",
//             "streamId": "2024079201",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/526b0f8f762bc42dccb099286bcde5fda369b168abbd01d63619c2d07ebd7435.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/2ceee92188ef684efe0d8b90839c4f3ad450d179dc64d59beff417059453af47.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV16-HD",
//             "pid": "600098637",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/53793fa7bacd3a93ff6dc5d2758418985e1f952a316c335d663b572d8bdcd74d.png?imageMogr2/format/webp",
//             "streamId": "2024079301",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/11d1273cf2681b5a6bf3add0b911cfbac3e7d0d61aad2e4bfd421d6c6be25267.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/53793fa7bacd3a93ff6dc5d2758418985e1f952a316c335d663b572d8bdcd74d.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV16(4K）",
//             "pid": "600099502",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/53793fa7bacd3a93ff6dc5d2758418985e1f952a316c335d663b572d8bdcd74d.png?imageMogr2/format/webp",
//             "streamId": "2024083701",
//             "isVip": true,
//             "is4K": true,
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/11d1273cf2681b5a6bf3add0b911cfbac3e7d0d61aad2e4bfd421d6c6be25267.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/53793fa7bacd3a93ff6dc5d2758418985e1f952a316c335d663b572d8bdcd74d.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30004",
//                         "text": "电视-pid-4k"
//                     },
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV17",
//             "pid": "600001810",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/ddef563072f8bad2bea5b9e52674cb7b4ed50efb20c26e61994dfbdf05c1e3c0.png?imageMogr2/format/webp",
//             "streamId": "2024079501",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/6d8ae1b18d74bf46e08b267448d49963e5eaa6ffba8be4c7f419673e9a5f840a.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/ddef563072f8bad2bea5b9e52674cb7b4ed50efb20c26e61994dfbdf05c1e3c0.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443,
//                 1463,
//                 1483
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CGTN",
//             "pid": "600014550",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/a72dff758ca1c17cd0ecc8cedc11b893d208f409d5e6302faa0e9d298848abc3.png?imageMogr2/format/webp",
//             "streamId": "2024181701",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/663758b8722f6e69bf78a7522b1ab952abbebd09e3575b6800f2aa85bc79eb75.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/a72dff758ca1c17cd0ecc8cedc11b893d208f409d5e6302faa0e9d298848abc3.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CGTN法语频道",
//             "pid": "600084704",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/a8d0046a47433d952bf6ed17062deb8bd2184ba9aec0f7781df6bf9487a3ffcf.png?imageMogr2/format/webp",
//             "streamId": "2024181801",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/0240e506334917f1c4460d5bc6e76e2035627586fe9aa64849678dba4b51e470.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/a8d0046a47433d952bf6ed17062deb8bd2184ba9aec0f7781df6bf9487a3ffcf.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CGTN俄语频道",
//             "pid": "600084758",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/bf0a820893cbaf20dd0333e27042e1ef9c8806e5b602b6a8c95af399db0bc77a.png?imageMogr2/format/webp",
//             "streamId": "2024181901",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/573b794806d254580a6ef7b3572f299340d0dddb839736aba5c6238d5f34bceb.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/bf0a820893cbaf20dd0333e27042e1ef9c8806e5b602b6a8c95af399db0bc77a.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CGTN阿拉伯语频道",
//             "pid": "600084782",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/2e44e2aa3e7a1cedf07fd0ae59fe69e86a60a2632660a006e3e9e7397b2d107e.png?imageMogr2/format/webp",
//             "streamId": "2024182001",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/d6c49c51933af0accff5e1fe5d6fe98a90f1e002d530d40fd5c4135adc6fc016.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/2e44e2aa3e7a1cedf07fd0ae59fe69e86a60a2632660a006e3e9e7397b2d107e.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CGTN西班牙语频道",
//             "pid": "600084744",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202309/7c337e3dbe64402ec7e4678a619a4a6d95144e42f35161181ff78e143b7cf67a.png?imageMogr2/format/webp",
//             "streamId": "2024182101",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/4736980e59bcd36954e2ecc0f49197d2068e5dc6cdda94a0c113f22e773b7e57.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202309/7c337e3dbe64402ec7e4678a619a4a6d95144e42f35161181ff78e143b7cf67a.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CGTN外语纪录频道",
//             "pid": "600084781",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202309/74d3ac436a7e374879578de1d87a941fbf566d39d5632b027c5097891ed32bd5.png?imageMogr2/format/webp",
//             "streamId": "2024182301",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/5210fca74aab5be12ba78f0e6818eb8579de83e4c1a0d61fab27b7dc79fb40c8.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202309/74d3ac436a7e374879578de1d87a941fbf566d39d5632b027c5097891ed32bd5.png?imageMogr2/format/webp",
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV风云剧场频道",
//             "pid": "600099658",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/4d549e53e6d0f632d5a633d1945280797b153e588f919221a07faa869812cc89.png?imageMogr2/format/webp",
//             "streamId": "2024171703",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/c95e9a0702e8d80abd0b9cdc4f55a9dbc00070884fa97b481dc2e23ee62c306b.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/4d549e53e6d0f632d5a633d1945280797b153e588f919221a07faa869812cc89.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV第一剧场频道",
//             "pid": "600099655",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/a556bd7d93ce65e18f243a8892b5604f4faa994a4897315914216a710a706208.png?imageMogr2/format/webp",
//             "streamId": "2024171803",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/5d7f271db59e893100d35bdbddfe95aec071093c9ba0aa9fd172f603815d58cb.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/a556bd7d93ce65e18f243a8892b5604f4faa994a4897315914216a710a706208.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV怀旧剧场频道",
//             "pid": "600099620",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/5661bd04fecdb6e899f801147a22ab5d3a475bf2b62e30aec2c0023190ebc9b1.png?imageMogr2/format/webp",
//             "streamId": "2024171903",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/44700012dbd845e637439fc9cb91140f02f4a17a1bd7e97c0fa940d01031bd6a.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/5661bd04fecdb6e899f801147a22ab5d3a475bf2b62e30aec2c0023190ebc9b1.png?imageMogr2/format/webp",
//             "isLimitedFree": true,
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30001",
//                         "text": "电视-pid-限免"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV世界地理频道",
//             "pid": "600099637",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/bb3c6c9e145d698137f5bb64a582021a01b51344b929003630eb769ea65832a9.png?imageMogr2/format/webp",
//             "streamId": "2024172003",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/e24969afda895d3d284e68497715aefc5ae3189dacd44c155bcf0953606cab78.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/bb3c6c9e145d698137f5bb64a582021a01b51344b929003630eb769ea65832a9.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV风云音乐频道",
//             "pid": "600099660",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/bbf1d024c5228b8dd128b0e3cb1717d173fab4ee84c3a4c8a57b1a215362ca3b.png?imageMogr2/format/webp",
//             "streamId": "2024163303",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/ae9c59c717bb6f9a5ccd7b1957bd0405c65e5271dbed8111a8d140e2fa0f380a.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/bbf1d024c5228b8dd128b0e3cb1717d173fab4ee84c3a4c8a57b1a215362ca3b.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV兵器科技频道",
//             "pid": "600099649",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/4c6b6a6d3839889f34d33db3c2f80233b26b74d3489b393487635f8704e70796.png?imageMogr2/format/webp",
//             "streamId": "2024172103",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/3d13aede55a1a295298aec651636cd4782c69584b49e471aa3f7fe0567904d3a.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/4c6b6a6d3839889f34d33db3c2f80233b26b74d3489b393487635f8704e70796.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV风云足球频道",
//             "pid": "600099636",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/cd1e2bb52b06a991de168733e5ff0f1d85adc8042d40c8f393f723543e5dd08a.png?imageMogr2/format/webp",
//             "streamId": "2012514203",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/bbcbe261177afa22040db346c93bfaa730de64400387354cb65a35955ba7db5a.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/cd1e2bb52b06a991de168733e5ff0f1d85adc8042d40c8f393f723543e5dd08a.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV高尔夫·网球频道",
//             "pid": "600099659",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/cdd1b31ede7a5ad049ed53d9a072422f829e72dd062ed2c19e077fdd01699071.png?imageMogr2/format/webp",
//             "streamId": "2024166203",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/dde19df068cae34464522caf4ee8918a8e03eced30b8c8295d4d1548f8d03831.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/cdd1b31ede7a5ad049ed53d9a072422f829e72dd062ed2c19e077fdd01699071.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV女性时尚频道",
//             "pid": "600099650",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/fa28955ce8b2539d728bf4c6a13a46ff57ad76eae46627f7bcfb1ed8a613d3fc.png?imageMogr2/format/webp",
//             "streamId": "2024172203",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/f1931e8fbeb8d46d1db509e561674653703d6c9c692dc0614e63b947e1dd9375.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/fa28955ce8b2539d728bf4c6a13a46ff57ad76eae46627f7bcfb1ed8a613d3fc.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV央视文化精品频道",
//             "pid": "600099653",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/14ac5ce40482cacd3d4b37435222bfe86af2b452a2f04ecbfc1d13d76edd7c57.png?imageMogr2/format/webp",
//             "streamId": "2024172303",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/0e23d061e5c46f793d4cc5aa15f0bf88fe7a5242deb4904373efbe0eefb7d979.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/14ac5ce40482cacd3d4b37435222bfe86af2b452a2f04ecbfc1d13d76edd7c57.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV央视台球频道",
//             "pid": "600099652",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/10e14a92478011aa6c3c8562e62127f3b1908e29fcd78e4b2b24b9e6d3ec2fbc.png?imageMogr2/format/webp",
//             "streamId": "2024172403",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/81594643aa18ffa3b5e4cfa00d970439dae7ec45913dea05afa2fecff5626e3b.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/10e14a92478011aa6c3c8562e62127f3b1908e29fcd78e4b2b24b9e6d3ec2fbc.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV电视指南频道",
//             "pid": "600099656",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/244d72c0eb1615ed7d51c2f5db5a67f306aa3f58c05bc2d34de3aa7e956dc8c9.png?imageMogr2/format/webp",
//             "streamId": "2024172503",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26",
//                 "2024-10-27"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/513fe257a54d48a4a48762772b6af40a3807699017ba4b51aeab77b029f1868d.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/244d72c0eb1615ed7d51c2f5db5a67f306aa3f58c05bc2d34de3aa7e956dc8c9.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "CCTV卫生健康频道",
//             "pid": "600099651",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/54a6863656fdfd8f803be193ddf22441c5000a108833889816fd2d8911715ce8.png?imageMogr2/format/webp",
//             "streamId": "2024165203",
//             "isVip": true,
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-10",
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24",
//                 "2024-10-25",
//                 "2024-10-26"
//             ],
//             "channelType": "yangshi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/e16c0f1fb450ac471a703257fe4e7273618cb96d17e900b747b1179b33a13fd4.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/54a6863656fdfd8f803be193ddf22441c5000a108833889816fd2d8911715ce8.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {
//                 "tag_1": [
//                     {
//                         "id": "30002",
//                         "text": "电视-pid-VIP"
//                     }
//                 ]
//             },
//             "isScreenFlag": true,
//             "payType": "880"
//         }
//     ],
//     [
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "北京卫视",
//             "pid": "600002309",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/f4f23633c578beea49a3841d88d3490100f029ee349059fa532869db889872c5.png?imageMogr2/format/webp",
//             "streamId": "2024052703",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/6560e961c72ada03ab09e96371fee688b3ca2d6b828efaa9148ce80cc37f8cd6.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/f4f23633c578beea49a3841d88d3490100f029ee349059fa532869db889872c5.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "江苏卫视",
//             "pid": "600002521",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/380ad685c0c1d5b2c902246b8d2df6d3f9b45e2837abcfe493075bbded597a31.png?imageMogr2/format/webp",
//             "streamId": "2024171103",
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/9f8a72dd450704439b1c4b5b0f3c61a239b01dee0a1ccaa300ea3629b6b2033b.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/380ad685c0c1d5b2c902246b8d2df6d3f9b45e2837abcfe493075bbded597a31.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "东方卫视",
//             "pid": "600002483",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/9bd372ca292a82ce3aa08772b07efc4af1f85c21d1f268ea33440c49e9a0a488.png?imageMogr2/format/webp",
//             "streamId": "2024054503",
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/ba7b2643931ab689fb49ca7b7d3a940d64aa03c9116da0df1e83a3625360627b.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/9bd372ca292a82ce3aa08772b07efc4af1f85c21d1f268ea33440c49e9a0a488.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "浙江卫视",
//             "pid": "600002520",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/a66c836bd98ba3e41a2e9a570d4b9c50dedc6839e9de333e2e78212ad505f37e.png?imageMogr2/format/webp",
//             "streamId": "2024054703",
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/bc9959edf516cccdad7cbd4ff8fcbd71cde7e6a31ebe7f30e553558185e5a0cc.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/a66c836bd98ba3e41a2e9a570d4b9c50dedc6839e9de333e2e78212ad505f37e.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "湖南卫视",
//             "pid": "600002475",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/4120e89d3079d08aa17d382f69a2308ec70839b278367763c34a34666c75cb88.png?imageMogr2/format/webp",
//             "streamId": "2024054803",
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/e042f8a48a3e7ccf1d0ebb94840430ff95101177a0b518b347085305feea024f.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/4120e89d3079d08aa17d382f69a2308ec70839b278367763c34a34666c75cb88.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "湖北卫视",
//             "pid": "600002508",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/7a6be5a2bb1dc53a945c016ff1f525dc4a84c51db371c15c89aa55404b0ba784.png?imageMogr2/format/webp",
//             "streamId": "2024171203",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/ad2b549f9254ff40ffb32e88aa132c84ed405e683924e5aa32774517a7dd53c1.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/7a6be5a2bb1dc53a945c016ff1f525dc4a84c51db371c15c89aa55404b0ba784.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "广东卫视",
//             "pid": "600002485",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/28886880a4dc0f06fb7e0a528a1def0591d61a65870e29176ede0cc92033bbfd.png?imageMogr2/format/webp",
//             "streamId": "2024060903",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/58d7671f76d63fab8ea6fe1a165dcb3b2b89a85ae0b739d05d81033f32cffe45.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/28886880a4dc0f06fb7e0a528a1def0591d61a65870e29176ede0cc92033bbfd.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "广西卫视",
//             "pid": "600002509",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/54b7e97cb816bb223fe05f3fc44da2c7820eb66e8550c19d23100f2c414ecc38.png?imageMogr2/format/webp",
//             "streamId": "2024060703",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/7c4e10332ca4f220cee790477529af0a3b0fa246393d6ac3ac9a4ffca0392b11.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/54b7e97cb816bb223fe05f3fc44da2c7820eb66e8550c19d23100f2c414ecc38.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "黑龙江卫视",
//             "pid": "600002498",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/d8273ae9be698ce2db21f5b886ecac95a73429593f93713c60ed8c12c38bf0d3.png?imageMogr2/format/webp",
//             "streamId": "2024061003",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/0f02a584f6a4b7c1d79777050324ffda03d3bc4b821a44272c3b768566577219.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/d8273ae9be698ce2db21f5b886ecac95a73429593f93713c60ed8c12c38bf0d3.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "海南卫视",
//             "pid": "600002506",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/6e060391fde0469801fc3d84dbf204b4f8d650d251f17d7595a6964c0bb99e81.png?imageMogr2/format/webp",
//             "streamId": "2024055603",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/38dbaed12540aefaaf1b055829cdfe2c32c345defdbdf140f8330a6dc57699b1.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/6e060391fde0469801fc3d84dbf204b4f8d650d251f17d7595a6964c0bb99e81.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "重庆卫视",
//             "pid": "600002531",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/657651f411de2673d1770d9a78b44c1265704f7468cc41d4be7f51d630768494.png?imageMogr2/format/webp",
//             "streamId": "2024061103",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/0f78e8545dd930347c6d98f18a99d612c121b5ef37aa919acfa6aaf781d74f24.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/657651f411de2673d1770d9a78b44c1265704f7468cc41d4be7f51d630768494.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "深圳卫视",
//             "pid": "600002481",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/d59fec04c902e3581c617136d02d4b9b8c4cbe64272781ddd3525e80c823edb7.png?imageMogr2/format/webp",
//             "streamId": "2024061303",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/f77518cd2dad119ee2233aeb222880b6e278e1df3dbaa00feef48556da92b543.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/d59fec04c902e3581c617136d02d4b9b8c4cbe64272781ddd3525e80c823edb7.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "四川卫视",
//             "pid": "600002516",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/3276a414ae0eaa0f116f2045cd913367967d0c7c1e978e8621ac3879436c6ed7.png?imageMogr2/format/webp",
//             "streamId": "2024061403",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/8c2e1a984c02291cd8720c16b020dffb32b89e9bab89a03242119b4e1c177e0f.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/3276a414ae0eaa0f116f2045cd913367967d0c7c1e978e8621ac3879436c6ed7.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "河南卫视",
//             "pid": "600002525",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/74925962148a6d31c85808b6cd4e444c2a54bab393d2c5fc85e960b50e22fa86.png?imageMogr2/format/webp",
//             "streamId": "2024059703",
//             "timeShiftReviewFlag": "0",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/f668b9239cf246ee99cfe5baabf912056da6ea3cc0d8015044be95322be40a28.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/74925962148a6d31c85808b6cd4e444c2a54bab393d2c5fc85e960b50e22fa86.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "福建东南卫视",
//             "pid": "600002484",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/3208fe6564a293c21b711333fb3edb05bb5b406cff840573c9a8d839680a1579.png?imageMogr2/format/webp",
//             "streamId": "2024061503",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/24dc6353d3f85f9d6c35dcdacd17d7987929b2bf7638db71b77448a6594a2218.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/3208fe6564a293c21b711333fb3edb05bb5b406cff840573c9a8d839680a1579.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "贵州卫视",
//             "pid": "600002490",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/4eb45f4781d33d872af027dc01c941559aab55667dd99cc5c22bef7037807b13.png?imageMogr2/format/webp",
//             "streamId": "2024061603",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/01193d0d1ba6ed3eb9d2003806ddbc3b45621cc6708df25fb65d84a096c29137.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/4eb45f4781d33d872af027dc01c941559aab55667dd99cc5c22bef7037807b13.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "江西卫视",
//             "pid": "600002503",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/3c760d0d00463855890e8a1864ea4a6b6dd66b90c29b4ac714a4b17c16519871.png?imageMogr2/format/webp",
//             "streamId": "2024061703",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/cd5aeeafd830d776fcf1e6a8da7402c2ffb2ba3f76b7456abbf6b52188589053.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/3c760d0d00463855890e8a1864ea4a6b6dd66b90c29b4ac714a4b17c16519871.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "辽宁卫视",
//             "pid": "600002505",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/ac4ed6058a87c101ae7147ebc38905d0cae047fb73fd277ee5049b84f52bda36.png?imageMogr2/format/webp",
//             "streamId": "2024171303",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/84f53435de28fe915f8b3d39dd294bf666111cdc9857c951682dc8ab28f7fd76.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/ac4ed6058a87c101ae7147ebc38905d0cae047fb73fd277ee5049b84f52bda36.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "安徽卫视",
//             "pid": "600002532",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/f35fa04b51b1ee4984b03578b65403570868ebca03c6c01e11b097f999a58d9b.png?imageMogr2/format/webp",
//             "streamId": "2024171403",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/3e95a314021b1f264d9f7626bc8646b8478368ca44d5152f6b01086ed964a8b1.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/f35fa04b51b1ee4984b03578b65403570868ebca03c6c01e11b097f999a58d9b.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "河北卫视",
//             "pid": "600002493",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/d545becdc81c60197b08c7f47380705e4665ed3fe55efc8b855e486f6e655378.png?imageMogr2/format/webp",
//             "streamId": "2024171503",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/e1b12e3a1a62ed508f789523807e04bb38d43c68192d93261d55225fcfa09dac.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/d545becdc81c60197b08c7f47380705e4665ed3fe55efc8b855e486f6e655378.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         },
//         {
//             "dataType": "tv-channel-list",
//             "channelName": "山东卫视",
//             "pid": "600002513",
//             "tvLogo": "https://resources.yangshipin.cn/assets/oms/image/202306/22d403f07a7cf5410b3ad3ddb65a11aa229a32475fac213f5344c9f0ec330ca1.png?imageMogr2/format/webp",
//             "streamId": "2024171603",
//             "timeShiftReviewFlag": "1",
//             "programDates": [
//                 "2024-10-11",
//                 "2024-10-12",
//                 "2024-10-13",
//                 "2024-10-14",
//                 "2024-10-15",
//                 "2024-10-16",
//                 "2024-10-17",
//                 "2024-10-18",
//                 "2024-10-19",
//                 "2024-10-20",
//                 "2024-10-21",
//                 "2024-10-22",
//                 "2024-10-23",
//                 "2024-10-24"
//             ],
//             "channelType": "weishi",
//             "selectTvLogo": "https://resources.yangshipin.cn/assets/oms/image/202212/0127a34994e473565b2a032cd996767766a6c326963a6d72a9bddd9f6beaec65.png?imageMogr2/format/webp",
//             "coverUrl": "https://resources.yangshipin.cn/assets/oms/image/202306/22d403f07a7cf5410b3ad3ddb65a11aa229a32475fac213f5344c9f0ec330ca1.png?imageMogr2/format/webp",
//             "viewRights": [
//                 1443
//             ],
//             "imgtagVer": {},
//             "isScreenFlag": true,
//             "payType": "879"
//         }
//     ]
// ]
// let channels = []
// for(let i=0;i<data.length;++i){
//     for(let j=0;j<data[i].length;++j){
//         channels.push({
//             "channelName":data[i][j]["channelName"],
//             "pid":data[i][j]["pid"],
//             "cnlid":data[i][j]['streamId']
//         })
//     }
// }
// console.log(channels)