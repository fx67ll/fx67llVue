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

#### 语法：`Object.defineProperty(obj, prop, descriptor)`
+ `obj` 要定义属性的对象  
+ `prop` 要定义或修改的属性名称或Symbol（这里单独列出Symbol我还未理解，需要结合ES6那本书详细理解下，文档作出一部分解释看下方PS）  
+ `descriptor` 要定义或修改的属性描述符  

###### 关于Symbol的说明：在ES6中，由于 Symbol类型的特殊性，用Symbol类型的值来做对象的key与常规的定义或修改不同，而Object.defineProperty 是定义key为Symbol的属性的方法之一

#### 返回值：被传给函数的对象

=======================================  
我觉我需要补习一下js：***对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符*** 
=======================================  

### 关于该方法的描述
* configurable，默认为 false  
* enumerable，默认为 false  
* value，可选值，默认为 undefined
* writable，可选值，默认为 false
* getter 函数，默认为 undefined
* setter 函数，默认为 undefined

=======================================  
```
补充小知识点！！！
1. 这里是必须使用严格相等操作符（===）而不是标准相等操作符（==），因为 x == undefined 会检查x是不是null  
2. 但是严格相等不会检查（有点饶人，其实 === 会严格判断双方的类型、值等是否相等）  
3. null不等同于undefined  
4. 比较操作符，相等(==)，会为两个不同类型的操作数转换类型，然后进行严格比较  
   当两个操作数都是对象时，JavaScript会比较其内部引用，当且仅当他们的引用指向内存中的相同对象（区域）时才相等  
   即他们在栈内存中的引用地址相同  
5. 一致运算符，一致/严格相等 (===)，不会进行类型转换，仅当操作数严格相等时返回true
```
=======================================  

下一步学习创建属性