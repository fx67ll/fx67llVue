<template>
	<div class="fx67ll-box">
		<!-- <child-default v-model='childName'></child-default> -->
		<child-defined v-model='childName'></child-defined>
	</div>
</template>

<script>
	import childDefault from '@c/child-default.vue';
	import childDefined from '@c/child-defined.vue';
	export default {
		name: 'fx67llIndex',
		components: {
			childDefault,
			childDefined
		},
		data() {
			return {
				childName: '文三刀十'
			};
		},
		methods: {}
	};
</script>

<style lang="less" scoped="scoped">
	.fx67ll-box {
		width: 100%;
		height: 100%;
		.ban-user-select();
	}
</style>
