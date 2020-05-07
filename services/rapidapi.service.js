export const getPlayersInfos = (lastName) => {
	const url = `https://free-nba.p.rapidapi.com/players`;
	const token = "";
	return axios({
		method: "GET",
		url: url,
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "free-nba.p.rapidapi.com",
			"x-rapidapi-key": token
	},
		params: {
			page: "0",
			per_page: "25",
			search: lastName
		}
	})
}