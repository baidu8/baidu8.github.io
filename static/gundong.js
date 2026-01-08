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
