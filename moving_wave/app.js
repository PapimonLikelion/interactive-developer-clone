import {
    WaveGroup
} from './wavegroup.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    //사용자의 창이 resize 될 때 마다 중앙 값을 새로 계산해서 그려줌
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx);
        //브라우저에게 수행하기를 원하는 애니메이션을 알리고, 다음 리페인트가 진행되기 전에
        //해당 애니메이션을 업데이트하는 함수를 호출하게 합니다. 
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
};