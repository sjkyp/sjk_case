var con_barrage = document.querySelector('.barrage');
//mock初始弹幕数据
function mock_barrage() {
    var arr = [
        {
            id: '0',
            name: '冉馨香',
            text: '空降成功',
            level: '1'
        },
        {
            id: '1',
            name: '广宛曼',
            text: '前方高萌',
            level: '2'
        },
        {
            id: '2',
            name: '林欣荣',
            text: '因吹丝挺',
            level: '1'
        },
        {
            id: '3',
            name: '惠安静',
            text: '非战斗人员请撤退',
            level: '4'
        },
        {
            id: '4',
            name: '子车涵畅',
            text: '前方高萌',
            level: '1'
        },
        {
            id: '5',
            name: '甫睿德',
            text: '666',
            level: '5'
        },
        {
            id: '6',
            name: '常妙婧',
            text: '因吹丝挺',
            level: '2'
        },
        {
            id: '7',
            name: '赧闲丽',
            text: '非战斗人员请撤退',
            level: '3'
        },
        {
            id: '8',
            name: '频欣怿',
            text: '777',
            level: '1'
        },
        {
            id: '9',
            name: '衡瑞灵',
            text: '666',
            level: '1'
        },
        {
            id: '10',
            name: '匡昌茂',
            text: '666',
            level: '5'
        },
        {
            id: '11',
            name: '山雅健',
            text: '德国骨科',
            level: '1'
        },
        {
            id: '12',
            name: '乌雅紫玉',
            text: '2333',
            level: '1'
        },
        {
            id: '13',
            name: '委格格',
            text: '下个ID见',
            level: '4'
        },
        {
            id: '14',
            name: '支尔竹',
            text: '哲♂学',
            level: '1'
        },
        {
            id: '15',
            name: '天静晨',
            text: '和我签订契约，成为马猴烧酒吧',
            level: '1'
        },
        {
            id: '16',
            name: '钞宛凝',
            text: '错的不是我，是世界',
            level: '2'
        },
        {
            id: '17',
            name: '夕冰之',
            text: '我要成为新世界的卡密',
            level: '1'
        },
        {
            id: '18',
            name: '节代天',
            text: '微笑就好了',
            level: '5'
        },
        {
            id: '19',
            name: '慕夜绿',
            text: '空降成功',
            level: '1'
        },
        {
            id: '20',
            name: '接宛菡',
            text: '空降成功',
            level: '1'
        },
        {
            id: '21',
            name: '颛孙绿夏',
            text: '666',
            level: '3'
        },
        {
            id: '22',
            name: '贺阔',
            text: '2333',
            level: '1'
        },
        {
            id: '23',
            name: '谢向秋',
            text: '大多数',
            level: '1'
        },
        {
            id: '24',
            name: '受依楠',
            text: '热狗热',
            level: '1'
        },
        {
            id: '25',
            name: '抗信厚',
            text: '也挺好然后有人',
            level: '4'
        },
        {
            id: '26',
            name: '高春冬',
            text: '方便的',
            level: '1'
        },
        {
            id: '27',
            name: '野清舒',
            text: '没经验',
            level: '4'
        },
        {
            id: '28',
            name: '徭寒',
            text: '微任务',
            level: '1'
        },
        {
            id: '29',
            name: '穰星辰',
            text: '认为',
            level: '4'
        },
        {
            id: '30',
            name: '伍迎夏',
            text: '麻将麻将',
            level: '1'
        }
    ]
    return arr;
}
function t() {
    
}
//生成弹幕
function create_barrage(text) {
    var box = document.createElement('div');
    box.innerHTML = text;
    con_barrage.appendChild(box);

    box.classList.add('box');
    box.style.top = Math.floor(Math.random()*(Math.floor(window.screen.height/50)+1))*50 + 'px';
}
//弹幕滚动
function move_barrage() {
    // var init_height = Math.floor(Math.random()*(Math.floor(window.screen.height/50)+1))*50;

}
create_barrage('2313');
(function test() {
    console.log(window.screen.height);//667/50
    var a = Math.floor(Math.random()*(Math.floor(window.screen.height/50)+1))*50;
    console.log(a);
})();