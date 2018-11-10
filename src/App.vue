<template>
	<div class="app">
		<el-menu
		:default-active="NavSelect"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b">
			<el-menu-item index="/hello">Hello</el-menu-item>
			<el-menu-item index="/showtable">ExTable</el-menu-item>
		</el-menu>
		<router-view/>
    </div>
</template>

<script>
export default {
	data(){
		return{
			NavSelect:this.$route.path,
		}
	},
	created(){
	},
	watch:{
		$route(to,from){
			this.NavSelect=to.path;
		}
	},
	methods:{
		handleSelect(index){
			this.$router.push(index);
		}
	}
}
</script>

<style lang='scss'>
@import '@/style/main.scss';
.app
{
	width:100%;
	height:100%;
}
</style>
