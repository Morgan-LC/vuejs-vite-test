<template>
	<div>
		<p>Nba player</p>
		<button @click="getPlayers()">Get Info</button>
		<div v-for="data in playerInfos.data">{{data}}</div>
	</div>
</template>

<script>
import { getPlayersInfos } from "../services/rapidapi.service.js";
export default {
	data: () => ({ count: 0, playerInfos: {} }),
	methods: {
		getPlayers() {
			getPlayersInfos("lebron james").then(resp => {
				this.playerInfos = resp.data;
				console.log(resp);
			});
		}
	}
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
