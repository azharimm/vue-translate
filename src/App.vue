<template>
	<div>
		<Nav />
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import Nav from './components/Nav'
export default {
	name: "App",
	components: {
		Nav,
	},
};
</script>

<style>
</style>
