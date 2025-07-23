<template>
	<div class="fx67ll-404">
		<nav class="shelf">
			<a class="book home-page" href="https://fx67ll.com" target="_blank">fx67ll.com</a>
			<a class="book about-us" href="https://fx67ll.xyz" target="_blank">fx67ll.xyz</a>
			<a class="book contact" href="https://github.com/fx67ll" target="_blank">F.A.Q.</a>
			<a class="book faq" href="#" @click.prevent="back()">返回上一页</a> <!-- 禁止a标签跳转 -->
			<span class="book not-found"></span>
			<span class="door left"></span>
			<span class="door right"></span>
		</nav>
		<h1>Error 404</h1>
		<p>糟糕，您要找的网页消失了，请联系管理员。。。</p>
		<div class="fx67ll-footer">
			Designed & Powered by
			<a href="https://fx67ll.com" target="_blank">fx67ll</a>
			&#12288; Copyright© 2018-{{ year }} &#12288;
			<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">皖ICP备18017174号</a>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	name: '404',
	data() {
		return {
			year: moment().format('yyyy')
		};
	},
	methods: {
		back() {
			console.log(window.history);
			if (window.history.length <= 1) {
				this.$router.push({ path: '/' });
				return false;
			} else {
				this.$router.go(-1);
			}
		}
	}
};
</script>

<style lang="less" scoped="scoped">
@import '@a/styles/404.less';
.fx67ll-footer {
	width: 100%;
	padding: 20px 0;
	text-align: center;
	position: absolute;
	bottom: 0;
	user-select: text;
	font-size: 14px;
}

.fx67ll-footer a {
	color: #ffffff;
}

.fx67ll-footer a:hover {
	color: #42b983;
}
</style>
