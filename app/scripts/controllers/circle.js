var Circle = (function () {
    function Circle() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
      	this.ratio = window.innerHeight < 400 ? 0.6 : 1;
        this.r = 200;
        this.counter = 0;
    }
    Circle.prototype.init = function () {
        this.createElement();
        this.loop();
    };
    Circle.prototype.createElement = function () {
        var scale = this.ratio;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.width = '100%';
        this.canvas.style.background = 'rgb(56, 115, 152)';
        this.ctx.transform(scale, 0, 0, -scale, this.canvas.width / 2, this.canvas.height / 2);
        document.body.appendChild(this.canvas);
        for (var i = 0; i < 400; i++) {
            this.createParticle();
        }
    };
    Circle.prototype.createParticle = function () {
        this.particles.push({
            color: Math.random() > 0.5 ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
            radius: Math.random() * 18,
            x: Math.cos(Math.random() * 7 + Math.PI) * this.r,
            y: Math.sin(Math.random() * 7 + Math.PI) * this.r,
            ring: Math.random() * this.r,
            move: ((Math.random() * 3) + 1) / 500,
            random: Math.random() * 7
        });
    };
    Circle.prototype.moveParticle = function (p) {
        p.ring = Math.min(p.ring + 1, this.r);
        p.random += p.move;
        p.x = Math.cos(p.random + Math.PI) * p.ring;
        p.y = Math.sin(p.random + Math.PI) * p.ring;
    };
    Circle.prototype.resetParticle = function (p) {
        p.ring = Math.random() * this.r;
        p.radius = Math.random() * 18;
    };
    Circle.prototype.disappear = function (p) {
        if (p.radius < 0.8) {
            this.resetParticle(p);
        }
        p.radius *= 0.992;
    };
    Circle.prototype.draw = function (p) {
        this.ctx.beginPath();
        this.ctx.fillStyle = p.color;
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fill();
    };
    Circle.prototype.loop = function () {
        var _this = this;
        this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height , this.canvas.width, this.canvas.height * 2);
        if (this.counter < this.particles.length) {
            this.counter++;
        }
        for (var i = 0; i < this.counter; i++) {
            this.disappear(this.particles[i]);
            this.moveParticle(this.particles[i]);
            this.draw(this.particles[i]);
        }
        requestAnimationFrame(function () { return _this.loop(); });
    };
    return Circle;
})();
window.onload = function () {
		var circle = new Circle();
		circle.init();
};