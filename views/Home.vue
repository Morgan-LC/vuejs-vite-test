<template>
	<div>
		<Presentation />
		<p>Welcome</p>
	</div>
</template>

<script>
import Presentation from "../components/Presentation.vue";
export default {
	components: { 
		Presentation 
	},
	data: () => ({ count: 0 })
};
</script>

<style lang="scss" scoped>
p {
	font-family: Arial, Helvetica, sans-serif;
	button {
		border: 1px solid Blue;
		margin: 0 1rem;
	}
}
</style>
