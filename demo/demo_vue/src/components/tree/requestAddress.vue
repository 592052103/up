<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
    <pre><a v-bind:href="url">菜鸟教程</a></pre>
</div>	
<script>
//这个里面存放的是绑定事件的一些用法
//1.v-on 指令，它用于监听 DOM 事件
//<a v-on:click="doSomething">
</script>
<script>
new Vue({
  el: '#app',
  data: {
    url: 'http://www.runoob.com'
  }
})
</script>
</body>
</html>