(function () {
    // 1. 动态创建 Canvas 并设置样式（只需创建一次）
    let canvas = document.getElementById("snow-canvas");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "snow-canvas";
        Object.assign(canvas.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            pointerEvents: "none", // 极其重要：确保不影响网页点击
            zIndex: "99999", // 确保在最顶层
            display: "block"
        });
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");
    let width, height, particles = [];
    const particleCount = 50; // 雪花数量
    const snowImg = new Image();

    // 2. 窗口缩放适配
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    snowImg.src = "/雪花.png"; // 请确保该图片路径正确

    // 3. 雪花类定义
    class Snow {
        constructor() {
            this.init();
        }
        init() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 15 + 10;
            this.speed = Math.random() * 1 + 0.5;
            this.velX = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.5;
            this.rotation = Math.random() * Math.PI * 2;
            this.spin = Math.random() * 0.02 - 0.01;
        }
        update() {
            this.y += this.speed;
            this.x += this.velX;
            this.rotation += this.spin;
            // 越界重置
            if (this.y > height) {
                this.y = -20;
                this.x = Math.random() * width;
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.drawImage(snowImg, -this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    // 4. 动画循环
    function render() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(render);
    }

    // 5. 初始化触发
    snowImg.onload = function () {
        resize();
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Snow());
        }
        render();
    };

    window.addEventListener("resize", resize);
})();
