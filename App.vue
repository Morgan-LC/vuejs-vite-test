<template>
	<div>
    <router-link to="/">Home</router-link>
    <router-link to="/counter">Counter</router-link>
    <router-link to="/players">Nba players</router-link>
		<router-view />
	</div>
</template>

<script>
export default {
	data: () => ({  })
};
</script>

<style lang="scss" scoped>
div {
	margin: auto;
}
</style>
