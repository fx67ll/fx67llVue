#  如何实现双向绑定mvvm

[参考文档](https://github.com/DMQ/mvvm)

## 几种实现双向绑定的做法
1. 发布者-订阅者模式: 一般通过sub/pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是`vm.set('property', value)`
 ***!!!发布者-订阅者模式*** 后面有空参考 [这篇文章](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day) 动手学习一下  
2. angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，不过多了解  
3. 数据劫持: vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的setter/getter，在数据变动时发布消息给订阅者，触发相应的监听回调  

### Object.defineProperty()
`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象  
[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)  
```
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
```