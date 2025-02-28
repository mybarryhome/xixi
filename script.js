const app = new Vue({
    el: '.all',
    data() {
        return {
            photo:{
                //"smile":"https://free4.yunpng.top/2025/02/22/67b994fbcb14c.gif",
                //"sid":"https://free4.yunpng.top/2025/02/22/67b994fd5a612.gif",
                "smile" :"./img/期待.png",
                "sid":"./img/哭泣.png",
                "happy":"./img/好耶.png"
            },
            //url : "https://free4.yunpng.top/2025/02/22/67b994fbcb14c.gif",
            url : "./img/期待.png",
            num : 0 , // 点击次数,
            notext:["不要","不要","点错了？","Big胆！","追不上吧"],
            isFlying: false,
            getm:[],
            teex:"你可以当我的小狗吗"
        }
    },
    methods: {
        ok() {
            this.url = this.photo.happy;
            this.teex = "嘻嘻嘻！乖狗狗~(/≧▽≦)/♡︎ᐝ";
            this.num = -1
        },
        damie() {
            if (this.num < this.notext.length -1) {
                this.num++;
            }
            console.log(this.num);
            if (this.num == 1) {
                this.url = this.url = this.photo.sid;
            } 
            else if (this.num == 4) 
            {    
                this.isFlying = true;
                this.move();
                setTimeout(() => {
                    this.isFlying = false;
                }, 2000); // 2秒后重置飞行动画

            }
        },
        move() {
            this.getm = [] ;
            for (let i = 0; i <= 10; i++) {
                if ( i == 0 || i == 10 ) {
                    this.getm.push(`${i * 10}% { transform: translate(0, 0); }`)
                }else{
                    const randomX = Math.random() * 900 - 400; 
                    const randomY = Math.random() * 400 - 300; 
                    this.getm.push(`${i * 10}% { transform: translate(${randomX}px, ${randomY}px); }`)
                }
            };
            console.log('1'+this.getm)
            this.addAnimation();
        },
        addAnimation() {
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes flyAway {
                    ${this.getm.join('')}
                }
            `;
            document.head.appendChild(style);
            console.log(style.innerHTML)
        }
    }
})