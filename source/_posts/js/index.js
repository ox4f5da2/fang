var imgArr = [
    { src: "https://d301.paixin.com/thumbs/4678873/87183642/staff_1024.jpg", title: '旋转木马效果', href: './HTMLExercise/3d旋转木马.html' },
    { src: "https://d301.paixin.com/thumbs/4055879/70990649/staff_1024.jpg", title: '3D翻转效果', href: './HTMLExercise/3d.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/73835801/staff_1024.jpg", title: '3D导航栏效果', href: './HTMLExercise/3dNav.html' },
    { src: "https://d301.paixin.com/thumbs/2697407/100371334/staff_1024.jpg", title: 'bootstrap框架使用案例', href: './HTMLExercise/bootstrapExample.html' },
    { src: "https://d302.paixin.com/thumbs/2697407/155830016/staff_1024.jpg", title: 'DOM操作案例', href: './HTMLExercise/dom.html' },
    { src: "https://d302.paixin.com/thumbs/1218550/181159282/staff_1024.jpg", title: '滚动视差效果', href: './HTMLExercise/parallax.html' },
    { src: "https://d301.paixin.com/thumbs/2697407/90941964/staff_1024.jpg", title: '响应式导航栏效果', href: './HTMLExercise/responseLayout.html' },
    { src: "https://d301.paixin.com/thumbs/2697407/84362168/staff_1024.jpg", title: '粘性布局和返回顶部效果', href: './HTMLExercise/scrollBar.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/79017288/staff_1024.jpg", title: '图形变换效果', href: './HTMLExercise/transform.html' },
    { src: "https://d301.paixin.com/thumbs/2697407/104491680/staff_1024.jpg", title: '过渡效果', href: './HTMLExercise/transition.html' },
    { src: "https://d301.paixin.com/thumbs/2697407/87894756/staff_1024.jpg", title: '侧边栏效果', href: './HTMLExercise/XiaoMiBar.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/79655876/staff_1024.jpg", title: '新浪导航栏效果', href: './HTMLExercise/XinlangNav.html' },
    { src: "https://d302.paixin.com/thumbs/5479200/143191581/staff_1024.jpg", title: '拟态按钮效果', href: './HTMLExercise/nitai.html' },
    { src: "https://d301.paixin.com/thumbs/4055879/103222248/staff_1024.jpg", title: '动画效果', href: './HTMLExercise/animation.html' },
    { src: "https://d302.paixin.com/thumbs/2697407/185672760/staff_1024.jpg", title: '可拖动框效果', href: './HTMLExercise/bom.html' },
];
var module = [
    { src: "https://d301.paixin.com/thumbs/2697407/121546522/staff_1024.jpg", title: '手风琴效果', href: './HTMLExercise/accordion.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/82245504/staff_1024.jpg", title: '倒计时效果', href: './HTMLExercise/countdown.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/94958104/staff_1024.jpg", title: '瀑布流效果', href: './HTMLExercise/masonry.html' },
    { src: "https://d302.paixin.com/thumbs/2697407/165212110/staff_1024.jpg", title: '定时切换式轮播图', href: './HTMLExercise/swiper.html' },
    { src: "https://d301.paixin.com/thumbs/1765462/88992556/staff_1024.jpg", title: '双模式切换轮播图', href: './webHomework/switchModeSwiper.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/79017174/staff_1024.jpg", title: '滑动式切换轮播图', href: './webHomework/swiper2.html' },
    { src: "https://d301.paixin.com/thumbs/4866741/72569293/staff_1024.jpg", title: '购物车效果', href: './webHomework/price.html' },
    { src: "https://d302.paixin.com/thumbs/2697407/180333260/staff_1024.jpg", title: '面向对象编程案例之网页记事本', href: './OOP_tab/index.html' },
];
var plugin = [
    { src: "https://d301.paixin.com/thumbs/4866741/72569365/staff_1024.jpg", title: '瀑布流插件', href: './plugin/masonry.html' },
];
var game = [
    { src: "https://d303.paixin.com/thumbs/1178904/203371498/staff_1024.jpg", title: '层叠消融小游戏', href: './cascade_ablation_game/main/main.html' },
];

function Tab(arr, idx, sectionHeight, sectionTitle) {
    var that = this;
    this.arr = arr;
    this.idx = idx;
    this.arrLength = this.arr.length;
    this.screenWidth = document.documentElement.offsetWidth;
    this.everyPageNum = (this.screenWidth < 1200 ? (this.screenWidth < 768 ? 2 : 4) : 6);
    this.myWorkPage = Math.ceil(this.arrLength / this.everyPageNum);
    this.currentIndex = 0;
    this.mywork = '', this.indicator = '';

    this.init(sectionHeight, sectionTitle);

    this.leftBtn = document.querySelectorAll('.leftBtn')[this.idx];
    this.rightBtn = document.querySelectorAll('.rightBtn')[this.idx];

    this.mywork.onmouseover = function () { that.mouseover() };
    this.mywork.onmouseout = function () { that.mouseout(that.idx) };
    this.leftBtn.onclick = function () { that.myWorkMove('left'); };
    this.rightBtn.onclick = function () { that.myWorkMove('right'); };

};

Tab.prototype.mouseover = function () {
    this.leftBtn.style.display = 'block';
    this.rightBtn.style.display = 'block';
    this.leftBtn.className = 'leftBtn leftBtnIn';
    this.rightBtn.className = 'rightBtn rightBtnIn';
};

Tab.prototype.mouseout = function () {
    this.leftBtn.className = 'leftBtn leftBtnOut';
    this.rightBtn.className = 'rightBtn rightBtnOut';
};

Tab.prototype.init = function (sectionHeight, sectionTitle) {

    let section = document.createElement('section');
    section.className = 'center part';
    section.style.height = sectionHeight + 'px';
    section.innerHTML = '<div class="myWork"><h3>' + sectionTitle
        + '</h3><div class="leftBtn"></div><div class="rightBtn"></div></div><div class="indicator"></div>';
    document.body.appendChild(section);

    this.mywork = document.querySelectorAll('.myWork')[this.idx];
    this.indicator = document.querySelectorAll('.indicator')[this.idx];
    // 移除原有的
    // if (this.indicator.querySelectorAll('span') !== undefined)
    //     this.indicator.querySelectorAll('span').forEach(item => item.remove());
    // if (this.indicator.querySelectorAll('div') !== undefined)
    //     this.indicator.querySelectorAll('div').forEach(item => item.remove());

    for (let i = 0; i < this.myWorkPage; i++) {
        let div = document.createElement('div'), dot = document.createElement('span');
        div.className = 'cardList';
        div.style.left = i * this.screenWidth + 'px';
        let str = '';

        // 作品集面板
        for (var j = 0; j < this.everyPageNum; j++) {
            let index = j + this.everyPageNum * i;
            if (index < this.arrLength)
                str += '<li style="background:url(' + this.arr[index].src + ');background-size:cover"><h2>' +
                    this.arr[index].title + '</h2><span><a href=' + this.arr[index].href + ' target="blank">点击查看</a></span></li>';
        }
        if (j === this.everyPageNum)
            str = '<ul>' + str + '</ul>';
        div.innerHTML = str;

        this.mywork.appendChild(div);
        // 指示器
        if (i === 0)
            dot.className = 'spanHover';
        this.indicator.appendChild(dot);
    }
};

Tab.prototype.clear = function (target, tag) {
    var arr = target.querySelectorAll(tag);
    for (var i = 0; i < arr.length; i++) {
        target.children[i].className = '';
    }
};

Tab.prototype.myWorkMove = function (direction) {
    let cardList = this.mywork.querySelectorAll('.cardList');
    let flag = direction === 'right' ? 1 : -1;
    if (this.currentIndex === 0 && direction === 'left' || this.currentIndex === this.myWorkPage - 1 && direction === 'right')
        return;
    this.currentIndex = this.currentIndex + flag;
    cardList.forEach(item => { item.style.left = parseInt(item.style.left) - flag * this.screenWidth + 'px' });
    this.clear(this.indicator, 'span');
    this.indicator.children[this.currentIndex].className = 'spanHover';
};

function load() {
    new Tab(imgArr, 0, 600, '平时练习作品');
    new Tab(module, 1, 600, '网页模块化功能');
    new Tab(plugin, 2, 350, 'JS网页插件');
    new Tab(game, 3, 350, '网页小游戏');
}

window.onload = function () {
    load();

    let aside = document.querySelector('aside');
    let back = document.querySelector('.back');
    let bar = document.querySelectorAll('.bar');
    let section = document.querySelectorAll('section');
    let footer = document.querySelector('footer');

    const sectionOffsetY = document.querySelectorAll('section')[1].offsetTop;
    const offsetHeight = aside.offsetTop - 100;
    const originHeight = aside.offsetTop;

    footer.style.top = parseInt(document.documentElement.offsetHeight) + 25 + 'px';
    document.querySelector('nav ul').style.display = (document.documentElement.offsetWidth <= 768 ? 'none': 'block');

    window.onscroll = function () {
        if (document.documentElement.scrollTop >= 100) {
            aside.style.position = 'fixed'
            aside.style.top = offsetHeight + 'px'
        }
        else {
            aside.style.position = 'absolute'
            aside.style.top = originHeight + 'px'
        }

        back.style.display = (document.documentElement.scrollTop >= sectionOffsetY ? 'block' : 'none')
    };

    back.onclick = function () {
        let timer = setInterval(function () {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 0)
                window.scroll(0, scrollTop - 20);
            else if (scrollTop === 0) {
                clearInterval(timer);
                timer = null;
            }
        }, 15)
    };

    bar.forEach((item, i) => {
        item.onclick = function () {
            window.scroll(0, section[i].offsetTop);
        }
    });

    document.querySelector('nav span').onclick = function () {
        document.querySelector('nav ul').style.display = document.querySelector('nav ul').style.display !== 'block' ? 'block' : 'none';
    }

    document.onselectstart = function (e) {
        e.preventDefault();
    }
};

window.onresize = function () {
    bar.forEach((item, i) => {
        item.onclick = function () {
            window.scroll(0, section[i].offsetTop);
        }
    });
    document.querySelector('nav ul').style.display = (document.documentElement.offsetWidth <= 768 ? 'none': 'block');
    document.querySelectorAll('section') && document.querySelectorAll('section').forEach(item => item.remove());
    load();
}