# tryone
build a new project for test 2016/11/22
搭建该项目步骤：
1、github上面创建一个仓库 用于存放项目代码 获取仓库地址 如 https://github.com/cathleenfang/tryone.git
2、npm init 创建npm 包说明 package.json 存放项目信息
3、npm install express --save-dev 本地安装express框架 用于配置http
4、npm install body-parser --save 处理json raw text url 编码的数据
5、npm install cookie-parser --save 解析cookie
6、npm install multer --save 用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
7、app.js 设置express路由 8081端口号进行监听 127.0.0.1（localhost或0.0.0.0）本机ip地址 
8、dev存放静态文件（css js images）--html放在里面 app.js添加一个路由 则可直接访问html
9、npm install jade 使用jade模板渲染引擎
10、views存放pugs