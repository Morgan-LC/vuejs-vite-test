<template>
	<div>
		<Presentation />
		<div class="router text-center">
			<router-link v-for="(link, i) in links" :key="i" :to="link.to" v-slot="{ navigate, href }">
				<button
					:href="href"
					@click="navigate"
					class="bg-gray-800 hover:bg-gray-900 mx-3 text-white font-bold py-2 px-4 rounded"
				>{{ link.text }}</button>
			</router-link>
		</div>
	</div>
</template>

<script>
import Presentation from "../components/Presentation.vue";
export default {
	components: {
		Presentation
	},
	data: () => ({
		count: 0,
		links: [
			{ text: "Counter", to: "/counter" },
			{ text: "Players", to: "/players" }
		]
	})
};
</script>

<style lang="scss" scoped>
p {
	font-family: Arial, Helvetica, sans-serif;
}
</style>
