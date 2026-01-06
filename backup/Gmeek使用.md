## Gmeek-html使用
在需要添加html标签的位置使用code方式，并且后面紧跟着Gmeek-html，然后才是html标签。
### 图片img
```Gmeek-html<img src="https://picsum.photos/1920/1080">```
```
`Gmeek-html<img src="https://picsum.photos/200">`
```
### 内嵌框架iframe-网站
```
`Gmeek-html<iframe src="https://music.meekdai.com/#61" width="100%" height="460px" frameborder="0" allowfullscreen="true"></iframe>```
```Gmeek-html<iframe src="https://music.meekdai.com/#61" width="100%" height="460px" frameborder="0" allowfullscreen="true"></iframe>`
```
### 内嵌框架iframe-歌曲
```Gmeek-html<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0U3fV7K4WFfVRgLGEAKh3g?utm_source=generator' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>```
```
`Gmeek-html<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0U3fV7K4WFfVRgLGEAKh3g?utm_source=generator' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>``
```
### 内嵌框架iframe-视频
`Gmeek-html<iframe width="100%" height="460px" src="//player.bilibili.com/player.html?aid=18540496&bvid=BV1dW411v78e&cid=30250032&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>`
```
`Gmeek-html<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1604800941&bvid=BV1qm421M7Xs&cid=1557311907&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="460px"></iframe>`
```
##参数使用
###单篇参数
自定义单篇文章页面的style和script
```
<!-- ##{"style":"<style>#postBody{font-size:20px}</style>"}## -->
<!-- ##{"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>"}## -->
```
###同时多种参数
```
<!-- ##{"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>","style":"<style>#postBody{font-size:20px}</style>","timestamp":1490764800}## -->
```
###引入全局参数
添加全局文章页面的style和script，在`config.json`文件中添加
```
"style":"<style>#postBody{font-size:20px}</style>",
"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>",
```
###导入以前的文章
如需修改发布时间，可以在文章最后一行添加如下代码。里面的时间是采用时间戳的形式，可以用如下[网站](https://tool.lu/timestamp)转换。
```<!-- ##{"timestamp":1490764800}## -->```
## 高亮警报
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

[Gmeek快速上手](https://blog.meekdai.com/post/Gmeek-kuai-su-shang-shou.html)
[Gmeek进阶html标签](https://blog.meekdai.com/post/%E3%80%90Gmeek-jin-jie-%E3%80%91-wen-zhang-cha-ru-html-biao-qian.html)