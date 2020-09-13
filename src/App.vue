<template>
	<div>
		<Nav />
		<Home />
	</div>
</template>

<script>
import Nav from './components/Nav'
import Home from './pages/Home'
export default {
	name: "App",
	components: {
		Nav,
		Home
	},
};
</script>

<style>
</style>
