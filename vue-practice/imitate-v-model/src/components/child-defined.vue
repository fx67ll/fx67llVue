<template>
	<!-- 可以通过在子组件中通过配置一个model属性，更改默认传递value和默认触发input事件的这个规则 -->
	<div class="box-v-model">
		<input type="text" class="input-v-model" :value="childName" @input="inputChange" />
		<div>{{ childName }}</div>
	</div>
</template>

<script>
	export default {
		name: "child",
		model: {
			prop: "childName",
			event: "childEvent"
		},
		props: {
			childName: {
				type: String
			}
		},
		methods: {
			inputChange(e) {
				console.log(e)
				// 注意这里的e.target.value是默认属性
				this.$emit("childEvent", e.target.value);
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
