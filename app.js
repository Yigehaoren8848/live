// 引入 express 模块
const express = require('express');
const app = express();
const router = require('./router/router.js');
// 设置端口
const PORT = 3000;
app.use('/', router);
// 创建一个简单的路由
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// 启动服务器
app.listen(PORT,'0.0.0.0', () => {
  console.log(`服务器正在运行，访问地址为：http://localhost:${PORT}`);
});
