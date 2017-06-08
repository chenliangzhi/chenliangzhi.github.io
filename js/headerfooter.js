/**
 * Created by Administrator on 2017/3/29.
 */

// 注册
Vue.component('my-component', {
    template: '<div class="wrap">' +
                    '<div class ="logo">' +
                        '<img src="images/vue_logo.png" alt="" />' +
                        '<p>vue.js</p>' +
                    '</div>'+
                    '<ul class="nav">' +
                        '<li><a href="vue.html" class="active">教程</a></li>'+
                        '<li><a href="">API</a></li>'+
                        '<li><a href="示例.html">示例</a></li>'+
                        '<li><a href="">社区</a></li>'+
                        '<li><a href="">参与贡献</a></li>'+
                    '</ul>' +
               '</div>'
});
// 创建根实例
var header = new Vue({
    el: '#header'
})

//底部
Vue.component('my-footer',{
    template:'<div><p>©2017 Anthony 版权所有</p></div>'
})

var footer =new Vue({
    el: '#footer'
})
