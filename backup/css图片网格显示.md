感觉单列不好看，修改下😊
精简后放在 `config.json`下`"style":"<style>里面</style>",`
```css
/* 核心：只定位那些内部包含图片链接的 p 标签 */
#postBody p:has(> a > img), 
#postBody p:has(> img) {
  display: grid;
  /* 自适应列数，最小 150px */
  grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
  gap: 10px;
  margin: 1.5rem 0;
  align-items: start;
}

/* 隐藏这些特定 p 标签内的换行符 */
#postBody p:has(img) br {
  display: none;
}

/* 处理只有一张图片的情况：让它占满全宽 */
#postBody p:has(img) a:only-of-type,
#postBody p:has(img) img:only-of-type {
  grid-column: 1 / -1;
}

/* 图片样式设置 */
#postBody p img {
  width: 100% !important;
  aspect-ratio: 1 / 1; /* 默认正方形 */
  object-fit: cover;
  border-radius: 8px;
  display: block;
		background-color: #f0f0f0;/* 懒加载 */
}

/* 只有一张图时，恢复自然高度，避免过大拉伸 */
#postBody p:has(img) a:only-of-type img,
#postBody p:has(img) img:only-of-type {
  aspect-ratio: auto;
  max-height: 550px;
  width: auto !important; /* 如果是单图，不强制拉宽，保持原图大小比例 */
  max-width: 100%;
}
```