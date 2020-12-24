import {Point} from './point.js';

export class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1); //포인트 5개면 간격은 4등분으로

        this.init();
    }

    //처음 생성하거나 사용자가 창의 크기를 조정하면 호출됨
    init() {
        this.points = [];

        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(
                this.index + i, 
                this.pointGap * i, 
                this.centerY,
            );
            this.points[i] = point;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++) {
            if (i <this.totalPoints - 1) {
                this.points[i].update();
            }
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy); //과거 점 ~ 현재 점 중간 지점을 잡아서 연결

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }
        
        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}