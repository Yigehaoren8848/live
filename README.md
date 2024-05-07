::: hljs-center

## 全网最新央视频直播源地址获取方式(2024.5.7)

:::

运行环境：python 3.8 + nodejs 14.21.3，运行前请务必先配置相关环境

运行方法：
pip install -r requirements.txt
cd my-live/ysp
python index.py

原理：python调用JavaScript代码解密参数，python发送请求绕过鉴权获取m3u8。

已解决视频播放到5分钟后断流的问题。

![snapshots.png](1)


**免责声明：代码仅供学习以及参考使用，切勿用作商业用途，否则后果自负！**