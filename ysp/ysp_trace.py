import requests
import random
import hashlib
from datetime import  datetime

# !/usr/bin/env python3
# -*- coding: utf-8 -*-
# Author: Yigehaoren8848
# Date:   2025-05-03
# 获取直播源后必须每间隔60s调用dtrace接口不然会断流,所以必须为定时任务
def trace(BossId,guid,durl,livepid,viewid,seq):
    rand_str = get_rand_str()
    _dc = str(get_dc())
    ftime = get_ftime()
    playno = get_playno()
    surl = get_surl(viewid)
    signature = get_signature(BossId,guid,durl,livepid,rand_str,viewid,_dc,ftime,playno,surl,seq)

    params = {
          "BossId": "9141",
          "Pwd": "1137850982",
          "prog": viewid,
          "playno": playno,
          "guid": guid,
          "hh_ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
          "cdn": "waibao",
          "sdtfrom": "ysp_pc_01",
          "prd": "60000",
          "platform": "5910204",
          "errcode": "-",
          "durl": durl,
          "firstreport": "-",
          "sUrl": "https://www.yangshipin.cn/#/tv/home?pid=600002475",
          "sRef": "-",
          "fplayerver": "100",
          "livepid": livepid,
          "viewid": viewid,
          "seq":seq,
          "cmd": "263",
          "login_type": "-",
          "geturltime": "-",
          "downspeed": "10",
          "hc_openid": "-",
          "open_id": "-",
          "defn": "fhd",
          "fact1": "ysp_pc_live_b",
          "openid": "-",
          "_dc": _dc,
          "live_type": "-",
          "ftime": ftime,
          "url":durl,
          "rand_str": rand_str,
          "signature": signature
    }
    header_ = {
        "Referer":"https://www.yangshipin.cn/",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0"
    }
    res = requests.post(url="https://dtrace.ysp.cctv.cn/kvcollect",data=params,headers=header_)
    times = 0
    if seq != "-":
        times = seq
    times = str(times+1)
    print(f"播放过程中请勿中断程序，否则可能会断流，每分钟trace一次，第{times}次trace 中......")

def get_playno():
    return  get_rand_str()

def get_ftime():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def get_rand_str():
    t = 10
    e = "ABCDEFGHIJKlMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    n = ""
    for i in range(t):
        r_int = random.randint(0, len(e) - 1)
        n += e[r_int]
    return n
def get_dc():
    _dc = random.uniform(0, 1)
    return _dc
def get_surl(pid):
    return f"https://www.yangshipin.cn/#/tv/home?pid={pid}"
def get_signature(BossId,guid,durl,livepid,rand_str,viewid,_dc,ftime,playno,surl,seq):

    e = 'BossId={BossId}&Pwd=1137850982&_dc={_dc}&cdn=waibao&cmd=263&defn=fhd&downspeed=10' \
        '&durl={durl}&errcode=&fact1=ysp_pc_live_b&firstreport=1&fplayerver=100' \
        '&ftime={ftime}&geturltime=2&guid={guid}&hc_openid=&hh_ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&live_type=' \
        '&livepid={livepid}&login_type=&open_id=&openid=&platform=5910204&playno={playno}' \
        '&prd=60000&prog={viewid}&rand_str={rand_str}&sRef=&sUrl={sUrl}&sdtfrom=ysp_pc_01&seq={seq}' \
        '&url={durl}&viewid={viewid}'
    e = e.format(BossId=BossId,guid=guid,durl=durl,livepid=livepid,rand_str=rand_str,viewid=viewid,_dc=_dc,ftime=ftime,sUrl=surl,playno=playno,prog=viewid,url=durl,seq=seq)
    Qu = "Q0uVOpuUpXTOUwRn"
    e = e + Qu
    # print(e)
    # 生成加密签名
    sign = hashlib.md5(e.encode(encoding='utf-8')).hexdigest()
    # print(sign)
    return  sign

def ysp():
    pass

# bossid = "9141"
# guid = "lubutokw_vglxn75mor"
# durl = "https://hlsliveali-cdn.ysp.cctv.cn/986484D0F2DFE5D96E68BE6099150EDD4B0DB11D007EBE9B1FDB5BF5E1B0A1FE9DB88EC40FE223B70F5627D1AE4AA45F8CC488316BC2668E0EEE3A59F05E06321D8F3549DF84D2C2B9B5A504239EBA0700243F9E4BA5C2537317D9E402D60EB3B4202883C813C6A2E7FB6958229EE72F/2000296202.m3u8?from=player&svrtime=1714700640&pid=600002475&cdn=5506&revoi=0F584A5A04ECFD6CA87B07DBD539588FCFCE4B50E7C1EE894A867748BF0AC932D5BB214C38BB05E4FD985CEEB0129D7E13E82987F708B18030F8805986B720D5FE9D49B8386B9FD89BED073444530B99692D6431592AF31F549C85B0D3599004377B06AA4EC90480E4AF2D309D6695F9CBA4CA59AC498968B11F7A1A7782DB3BCF6DF386B7786D1BDE1258BD845F9B74C0AD56A7EF0A640E4BF3BDD4CB660B403C9BF114E55C309F4E2105EFAC453F5D&app_id=519748109&guid=lvlmyrtu_4jimh8cwqos&ysign=d2968ebb6ecc0f168b4225b3d9e3bab6&ytime=1714700640&ytype=1"
# # durl ="https://hlsliveali-cdn.ysp.cctv.cn/9C1E1F5E8B90F5783365D69E717451E462135526A12A772831413B7A6FACC2508BBEA80612725ECD4CE1A3E22E17D149525F8D13DEEC51EC697B4E8497CC8F0A5DFCE484BAF3760B54F140B2EF83F5F128C6CF539E95078F1840865A6814AD42BB1BF7277434DDA862EB38C8D02021FB/2000296202.m3u8?from=player&svrtime=1714704398&pid=600002475&cdn=5506&revoi=43A616DA5C586CAE552140BB532A1C5B9D5B798698A070BBA6494B6C60EF68E8821FE14B0DBF823C6A5C6BBC8B634CED55B9688DE79E9ADB26E4590D29C629A7978DE54418CCC2F959D490F36337463B1E973B5B09E2BD4F2D1B9141010B57E2FD4FEB167FA92FAFC8C2832303404DB431C3A9D35D11540D210DBA0E0E2FCCB1E8017F074039AF6659DF001FA431D558FB1B794ED26E3DB47850A1E478D26A3E5470132F5231DA466C32A5367CDA8500&app_id=519748109&guid=lubutokw_vglxn75mor&ysign=ab9e5654fd4da4a91437a6cd8920502e&ytime=1714704398&ytype=1"
# livepid = "600002475"
#
# viewid ="2000296203"
#
#
# sign = trace(bossid,guid,durl,livepid,viewid,"0")



if __name__ == '__main__':
    pass
