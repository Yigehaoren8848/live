# 使用官方 Node.js 镜像 
FROM node:21

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目的所有文件
COPY . .

# 暴露应用运行的端口（假设是3000）
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
