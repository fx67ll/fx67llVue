<template>
	<!-- vue中的自定义组件中，若父组件中用v-model的话，其实相当于v-bind:value='***'并且v-on:input='***' -->
	<!-- 因此子组件内部用props接收value值，用$emit触发input事件，默认传递value值和input事件是模拟v-model的默认规则 -->
	<!-- 基础知识提示：@是v-on监听事件的简写，:是v-bind绑定属性的简写 -->
	<div class="box-v-model">
		<!-- <input type="text" class="input-v-model" :value="value" @input="inputChange" /> -->
		<!-- 简写的方式 -->
		<input type="text" @input="value=$event.target.value" :value="value" />
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

<style lang="less">
	.box-v-model {
		text-align: center;
		position: relative;
		top: 200px;

		.input-v-model {
			// display: none;
		}
	}
</style>
