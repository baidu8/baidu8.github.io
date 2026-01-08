// ==========================================
// 1. 图片辅助功能：自动添加懒加载
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('#postBody img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});

// ==========================================
// 2. 视觉效果功能：背景自动滚动
// ==========================================
!function () {
    let t = 0;
    const e = .8,
        n = 130;
    !function o() {
        const c = (t += e) % n;
        document.documentElement.style.setProperty("--scroll-offset", c + "px"), requestAnimationFrame(o)
    }()
}();