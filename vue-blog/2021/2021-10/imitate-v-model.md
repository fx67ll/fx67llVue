# Vue自定义组件实现v-model指令

在我们初次接触`Vue`的时候，一定会了解到一个语法糖，那就是`v-model`指令，它带给我们的第一印象就是它可以实现双向绑定  

那么，什么是双向绑定？通俗一点来说，就是当数据发生变化的时候，视图同时发生变化，这可以说是`Vue`的精髓之处了
（不过关于双向绑定，后续可以出一篇更为详尽的博文来深入模拟一下Vue的实现，这里重点还是探讨实现自定义组件的v-model指令）  

所以，在我们深入使用`Vue`之后，编写一个自定义组件，如何手动实现一个`v-model`的指令呢，今天我们就来详细探讨一下  


### `v-model`指令的原理是什么？
1. `v-bind`绑定一个`value`属性  
2. `v-on`监听当前元素的`input`事件，当数据变化时，将值传递给`value`实时更新数据  


### `v-model`和`v-bind:value`有什么区别？
自定义组件中，必定会使用`v-bind`指令来实现组件之间值的传递，所以在我还是菜鸟的那段时间，我一直有个疑惑，
既然有的`v-bind`指令，为什么还需要在自定义的组件中实现`v-model`指令呢？在我实践了一番之后，我才明白，
`v-model`既能够实现值的传递，也能够实现页面数据的实时变化，而`v-bind`只是实现值的传递，如果需要实现实时变化的效果，
需要使用另外的方法修改变量的值，可以总结为下面两点  
1. `v-model`实现视图和数据的双向绑定，一者变化另一者也会同时变化  
2. `v-bind`只会在初始化化的时候将数据绑定到视图上，后续视图变化不会影响数据  


### 撸一个`v-model`
看到这里，相信你也理解了为什么我们会需要在自定义的组件中自定义一个v-model指令，下面我们通过一个简易的示例来撸一个`v-model`，
在此之前我们需要在一个空`Vue`项目中，定义一个[dad.vue](#jumpId-dad "点击跳转示例代码")文件，以及[child.vue](#jumpId-child "点击跳转示例代码")文件。
为了方便初学者学习，我将一个[完整的简易示例项目](https://github.com/fx67ll/fx67llVue/tree/master/vue-practice/imitate-v-model)放到了github仓库中供大家下载学习，
大家如果喜欢可以为了点一颗Star，Thanks♪(･ω･)ﾉ！！！

<span id="jumpId-dad"></span>
#### dad.vue
```
<template>
	<div>
		<child v-model='childName'></child>
	</div>
</template>

<script>
	import child from './child.vue';
	export default {
		name: 'dad',
		components: {
			child
		},
		data() {
			return {
				childName: '我是儿子'
			};
		},
		methods: {}
	};
</script>
```

<span id="jumpId-child"></span>
#### child.vue
```
<template>
	<!-- vue中的自定义组件中，若父组件中用v-model的话，其实相当于v-bind:value='***'并且v-on:input='***' -->
	<!-- 因此子组件内部用props接收value值，用$emit触发input事件，默认传递value值和input事件是模拟v-model的默认规则 -->
	<!-- 基础知识提示：@是v-on监听事件的简写，:是v-bind绑定属性的简写 -->
	<div class="box-v-model">
		<input type="text" class="input-v-model" :value="value" @input="inputChange" />
		<!-- 简写的方式 -->
		<!-- <input type="text" @input="value=$event.target.value" :value="value" /> -->
		<div>{{ value }}</div>
	</div>
</template>

<script>
	export default {
		name: "child",
		props: {
			value: {
				type: String
			}
		},
		methods: {
			// $emit 方法可以触发当前实例上的事件，这里触发的事input事件，附加参数都会传给监听器回调
			// input 事件在用户输入时触发，它是在元素值发生变化时立即触发
			inputChange(e) {
				this.$emit("input", e.target.value);
			}
		}
	}
</script>
```


[参考文档一 ———— vue自定义组件中的v-model](http://www.qiutianaimeili.com/html/page/2019/03/bzwpdjp0jos.html)  
[参考文档二 ———— Vue中v-model和v-bind:value的区别以及手动实现v-model](https://blog.csdn.net/a1059526327/article/details/108981613)  
[参考文档三 ———— Vue官方文档关于$emit的说明](https://cn.vuejs.org/v2/api/#vm-emit)  


我是 [fx67ll.com](https://fx67ll.com)，如果您发现本文有什么错误，欢迎在评论区讨论指正，感谢您的阅读！  
如果您喜欢这篇文章，欢迎访问我的 [本文github仓库地址](https://github.com/fx67ll/fx67llVue/blob/master/vue-blog/2021/2021-10/imitate-v-model.md)，为我点一颗Star，Thanks~ :)  
***转发请注明参考文章地址，非常感谢！！！***