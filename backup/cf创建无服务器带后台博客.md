![](https://image.thum.io/get/https://blog.gezhong.vip/)

1. 复制里面的`infex.js`代码
2. 在cf里选择`workers`部署，全选粘贴
3. 修改
```
    "user" : "账号", //后台密码请修改
    "password" : "密码", //后台密码
    "siteDomain" : "blog.driveniu.workers.dev",// 域名(不带https 也不带/)
    "siteName" : "江大爷的博客",//博客名称
    "siteDescription":"梦到什么说什么",//博客描述
    "keyWords":"江大爷",//关键字
    "cacheZoneId":"在域名栏右下api区域id",//清理缓存用 cf区域 ID
    "cacheToken":"域名栏右下获取api令牌",//清理缓存用 cf API token
```
4. 创建KV空间
5. 在部署项目里绑定KV空间，变量名必须是`CFBLOG`

> 没域名好像不行，获取不了api😂

---

[项目地址](https://github.com/gdtool/cloudflare-workers-blog "cloudflare-workers-blog")
[作者播客](https://blog.gezhong.vip/)