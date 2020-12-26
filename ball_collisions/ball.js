export class Ball {
    constructor(stageWidth, stageHeigth, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = this.radius + (Math.random() * (stageWidth - diameter));
        this.y = this.radius + (Math.random() * (stageHeigth - diameter));
    }

    draw(ctx, block, stageWidth, stageHeight) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);
        this.bounceBlock(block);

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bounceBlock(block) {
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        //이 해당 블럭 안에 공이 위치하게 된다면
        if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
            if (this.CloseToX(minX, maxX, minY, maxY)) {
                this.vx *= -1;
                this.x += this.vx;
            } else {
                this.vy *= -1;
                this.y += this.vy;
            }
        }
    }

    /** 공의 좌표가 현재 블럭의 세로를 맞고 튕겨져 나왔다면 true, 가로 맞고 나왔다면 false */
    CloseToX(minX, maxX, minY, maxY) {
        const xLeft = Math.abs(minX - this.x);
        const xRight = Math.abs(maxX - this.x);
        const yTop = Math.abs(minY - this.y);
        const yBottom = Math.abs(maxY - this.y);

        const xCurrent = Math.min(xLeft, xRight);
        const yCurrent = Math.min(yTop, yBottom);

        if ( xCurrent < yCurrent) {
            return true;
        } else {
            return false;
        }
    }
}