const PI2 = Math.PI * 2;

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    animate(ctx, moveX) {
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.beginPath();

        const angle = PI2 / this.sides;

        ctx.translate(this.x, this.y);

        this.rotate -= moveX * 0.008;
        ctx.rotate(this.rotate); //각도 만큼 rotate

        for (let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

            (i == 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.fill();
        ctx.closePath();
        ctx.restore();  // 가장 최근에 저장된 canvas를 복구
    }
}