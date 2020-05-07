<template>
	<div>
		<form class="w-full max-w-sm mx-auto">
			<div class="flex items-center border-b border-b-2 border-teal-500 py-2">
				<input
					class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="NBA Player"
					aria-label="Full name"
					v-model="searchField"
				/>
				<button
					class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
					type="button"
					@click="getPlayers()"
				>Get infos</button>
			</div>
		</form>
		<!-- <div v-for="data in playerInfos">{{data.first_name}}{{data.last_name}}</div> -->
		<table class="table-auto my-5 mx-auto" v-if="playerInfos && playerInfos.length > 0">
			<thead>
				<tr>
					<th class="px-4 py-2" v-for="col in columns">{{col.label}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in playerInfos" class="text-center">
					<td class="border border-black px-4 py-2">{{row.first_name}}</td>
					<td class="border border-black px-4 py-2">{{row.last_name}}</td>
					<td class="border border-black px-4 py-2" v-if="row.height_feet && row.height_inches">{{row.height_feet}}, {{row.height_inches}}</td>
					<td class="border border-black px-4 py-2" v-else>-</td>
					<td class="border border-black px-4 py-2">{{row.position}}</td>
					<td class="border border-black px-4 py-2">{{row.team.name || '-'}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- <ul>
		<li v-for="item in playerInfos">{{ item.first_name }}</li>
	</ul>-->
</template>

<script>
import { getPlayersInfos } from "../services/rapidapi.service.js";
export default {
	data: () => ({
		count: 0,
		columns: [
			{
				id: "first_name",
				label: "First name"
			},
			{
				id: "last_name",
				label: "Last name"
			},	
			{
				id: "heigth",
				label: "Heigth"
			},	
			{
				id: "position",
				label: "Position"
			},
			{
				id: 'team.name',
				label: 'Team'
			}
		],

		playerInfos: [
		],
		searchField: ""
	}),
	methods: {
		getPlayers() {
			if (this.searchField) {
				getPlayersInfos(this.searchField).then(resp => {
					if (!resp || !resp.data || !resp.data.data) {
						console.log("no data");
						return;
					}
					this.playerInfos = resp.data.data;
					console.log(resp.data.data);
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
p {
	font-family: Arial, Helvetica, sans-serif;
}
</style>
