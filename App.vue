<template>
	<div class="bg-gray-100 h-screen h-100">
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<router-link to="/">
								<img class="h-auto w-10" src="/img/logos/logo_nba.png" alt="Nba logo" />
							</router-link>
							
						</div>
						<div class="hidden md:block">
							<div class="ml-10 flex items-baseline">
								<router-link
									v-for="(link, i) in links"
									:key="i"
									:to="link.to"
									v-slot="{ navigate, href, isExactActive }"
								>
									<a
										:href="href"
										@click="navigate"
										class="px-3 py-2 rounded-md text-sm font-medium"
										:class="[
                      isExactActive
                        ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                      i > 0 && 'ml-4',
                    ]"
									>{{ link.text }}</a>
								</router-link>
							</div>
						</div>
					</div>
					<div class="hidden md:block"></div>

					<div class="-mr-2 flex md:hidden">
						<!-- Mobile menu button -->
						<button
							class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
							@click="showMenu = !showMenu"
						>
							<!-- Menu open: "hidden", Menu closed: "block" -->
							<svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<!-- Menu open: "block", Menu closed: "hidden" -->
							<svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!--
      Mobile menu, toggle classes based on menu state.
      Open: "block", closed: "hidden"
			-->
			<div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
				<div class="px-2 pt-2 pb-3 sm:px-3">
					<router-link
						v-for="(link, i) in links"
						:key="i"
						:to="link.to"
						v-slot="{ navigate, href, isExactActive }"
					>
						<a
							:href="href"
							@click="navigate().then(() => (showMenu = false))"
							class="block px-3 py-2 rounded-md text-base font-medium"
							:class="[
                isExactActive
                  ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                i > 0 && 'mt-1',
              ]"
						>{{ link.text }}</a>
					</router-link>
				</div>
			</div>
		</nav>

		<header class="bg-white shadow" v-if="$route.meta.title">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold leading-tight text-gray-900">{{ $route.meta.title }}</h1>
			</div>
		</header>
		<div class="container mx-auto my-10 bg-grey-1">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		showMenu: false,
		showProfileMenu: false,
		links: [
			{ text: "Home", to: "/" },
			{ text: "Counter", to: "/counter" },
			{ text: "Players", to: "/players" }
		]
	})
};
</script>

<style lang="scss" scoped>
.container {

}
</style>
