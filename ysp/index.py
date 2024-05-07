# !/usr/bin/env python3
# -*- coding: utf-8 -*-
# Author: Yigehaoren8848
# Date:   2025-05-03

import execjs
import requests
import re
import hashlib
global excutor
import json
import  base64
from ysp.ysp_trace import trace
from ysp.ysp_utils.public import genereate_guid
import schedule
import time
import os

seq_ = 1

def ysp(pid,vid):
    # 获取当前文件的绝对路径
    current_file_path = os.path.abspath(__file__)
    # 获取当前文件所在的目录
    current_directory = os.path.dirname(current_file_path)
    ysp_js_file = current_directory + "\ysp_js\yangshipin.js"
    with open(ysp_js_file, 'r', encoding='gbk', errors="ignore") as f:
        js_code = f.read()
        excutor = execjs.compile(js_code)
        f.close()
    guid = genereate_guid()
    rand_str = excutor.call("get_random_str")
    en_pa = {
        "pid": pid,
        "guid": guid,
        "appid": "ysp_pc",
        "rand_str": rand_str
    }
    # p = excutor.call("get_encrypte_param",en_pa)
    Pu = "Q0uVOpuUpXTOUwRn"
    #  对参数进行排序
    p = f"appid=ysp_pc&guid={guid}&pid={pid}&rand_str={rand_str}{Pu}"

    #  对排序后的参数进行加密
    signature = hashlib.md5(p.encode(encoding='utf-8')).hexdigest()

    curtimemill = excutor.call("get_current_timemills")
    request_id = "999999" + rand_str + str(curtimemill);

    cookie = "guid={guid};  versionName=99.99.99;  versionCode=999999;  vplatform=109;  platformVersion=Chrome;  deviceModel=123;  updateProtocol=1;  seqId=19508;  request-id={request_id}"
    cookie = cookie.format(guid=guid, request_id=request_id)

    token_url = "https://player-api.yangshipin.cn/v1/player/auth"
    header_ = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Referer": "https://www.yangshipin.cn/",
        "Cookie": cookie,
        "Yspappid": "519748109"
    }

    cnlib = vid
    ts = excutor.call("getTimeStampStr")
    platform = "5910204"
    el = f"|{cnlib}|{ts}|mg3c3b04ba|V1.0.0|{guid}|{platform}|https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|";
    ytt = excutor.call("ytt", el)

    el = "|" + str(ytt) + el
    a = excutor.call("finalize", el)

    words_len = a["sigBytes"]
    words = a["t"]

    b = excutor.call("pad", words_len, 4)
    p_words = b["words"]
    p_len = b["sigBytes"]

    c = excutor.call("finalize_concat_pad", words, words_len, p_words, p_len)

    iv = [
        -1702986461,
        1627547313,
        -637798011,
        -2127016558
    ]
    _key = {
        "words": [
            1223004554,
            1957568969,
            1924730062,
            -1963538242
        ],
        "sigBytes": 16
    }
    _keySchedule = excutor.call("get_keySchedule", _key)
    r_ = c
    res = excutor.call("_process", 1, iv, _keySchedule, r_)

    stringfy = excutor.call("stringify", res)
    key = "--01" + stringfy
    # print("******key:",key)
    rand_str_ = excutor.call("get_random_str")

    ooo = {
        "cnlid": cnlib,
        "livepid": "600002475",
        "stream": "2",
        "guid": guid,
        "cKey": key,
        "adjust": 1,
        "sphttps": "1",
        "platform": "5910204",
        "cmd": "2",
        "encryptVer": "8.1",
        "dtype": "1",
        "devid": "devid",
        "otype": "ojson",
        "appVer": "V1.0.0",
        "app_version": "V1.0.0",
        "rand_str": rand_str_,
        "channel": "ysp_tx",
        "defn": "fhd"
    }
    kc = "adjust=1&appVer=V1.0.0&app_version=V1.0.0&cKey={}&channel=ysp_tx&cmd=2&cnlid={}&defn=fhd&devid=devid&dtype=1&encryptVer=8.1&guid={}&livepid=600002475&otype=ojson&platform=5910204&rand_str={}&sphttps=1&stream=20f$IVHi9Qno?G"
    kc = kc.format(key, cnlib, guid, rand_str_)

    kc_hash_signature = hashlib.md5(kc.encode(encoding='utf-8')).hexdigest()

    ooo['signature'] = kc_hash_signature
    en_pa["signature"] = signature

    header_1 = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Content-Type": "application/json;charset=UTF-8",
        "Referer": "https://www.yangshipin.cn/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Origin": "https://www.yangshipin.cn",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua": '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        "Priority": "u=1, i",
        "Pragma": "no-cache",
        "Cookie": cookie,
        "Yspappid": "519748109",
    }

    sess = requests.session()
    res = requests.post(token_url, data=en_pa, headers=header_)
    token = res.json()['data']['token']
    header_1['Yspplayertoken'] = token
    cookies = {
        "guid": guid,
        "versionName": "99.99.99",
        "versionCode": "999999",
        "vplatform": "109",
        "platformVersion": "Chrome",
        "deviceModel": "123",
        "updateProtocol": "1",
        "seqId": "19508",
        "request-id": request_id
    }

    res1 = requests.post("https://player-api.yangshipin.cn/v1/player/get_live_info", json=ooo, headers=header_1)

    res_json = res1.json()
    chanll = res_json["data"]["chanll"]
    chanll_json = json.loads(chanll)
    chanll_code = chanll_json["code"]

    decoded_chanll_code = base64.b64decode(chanll_code)
    decoded_chanll_code = str(decoded_chanll_code, 'utf-8')
    deskey = re.findall(r'var\s+des_key\s+=\s+"([^"]+)"', decoded_chanll_code)[0]
    desiv = re.findall(r'var\s+des_iv\s+=\s+"([^"]+)"', decoded_chanll_code)[0]
    from ysp.ysp_utils.revoi import revoi
    revoi = revoi(deskey, desiv)
    playurl = res_json['data']['playurl']

    extend_params = res_json['data']['extended_param']
    real_play_url = "{}&revoi={}{}".format(playurl, revoi, extend_params)
    print("播放链接:")
    print(real_play_url)
    bossid = "9141"
    livepid = "600002475"
    viewid = cnlib


    trace(bossid, guid, real_play_url, livepid, viewid, "-")


    def ysp_scheduler(seq):
        global seq_
        trace(bossid, guid, real_play_url, livepid, viewid, seq)
        seq_ = seq + 1

    schedule.every(1).minutes.do(lambda :ysp_scheduler(seq_))

    while True:
        schedule.run_pending()
        time.sleep(1)


if __name__ == '__main__':

    vid = input("请输入vid,vid请到ysp/ysp_utils/channel.txt参考，例如CCTV4K:2022575203 \n")
    ysp("600002475", vid)



