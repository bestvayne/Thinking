/*
 * @Author: Vayne
 * @Date:   2016-05-27 14:06:32
 * @Last Modified by:   Vayne
 * @Last Modified time: 2016-07-11 16:54:43
 */


var exampleVM = new Vue({
    el: '#one',
    data: {
        name: "<p>I'll be the watcher <span class='btn btn-success' data-toggle='tooltip' data-placement='top' title='Watcher和guard都是我们所说的守护者'>watcher</span></p>But don't fear the fall Hope when the water rise You built a wall  Hoping the crowd screams outScreaming your name",
        activeColor: 'red',
        fontSize: 15
    }
});

function person(name, age) {
    this.name = "姚曦";
    this.age = 26;
}

myFather = new person("姚曦", "24");

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'name',
        items: [{
            message: person.name
        }, {
            message: myFather.name
        }]
    }
});

Vue.transition('bounce', {
    enterClass: 'bounceInleft',
    leaveClass: 'bounceOutRight'
});


//简单的数据绑定示例
var titdes = {
    message: "Elastic Draggable Header"
};

new Vue({
    el: "#titdes",
    data: titdes
})


var bodytext = {
    bodydes: "Write yourself thinking"
}

new Vue({
    el: "#bodydes",
    data: bodytext
})


//寻找某一节点的父节点，并在控制台输出父节点的标签名
var con = $("#titdes").parent();
console.log(con[0].className);
