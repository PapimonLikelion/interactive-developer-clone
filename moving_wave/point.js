export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.02;
        this.cur = index; //고유의 인덱스 번호를 넘겨줘서 웨이브가 단차를 가지고 보일 수 있도록 함
        this.max = Math.random() * 100 + 150;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
        // console.log(this.y);
    }
}