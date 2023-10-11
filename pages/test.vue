<script setup lang="ts">
let menus = ref([
	{
		id: 1,
		title: "Физический лицам",
		icon: null,
		children: [],
		is_active: true,
		link: "/physical-persons/home"
	},
	{
		id: 2,
		title: "Корпоративным клиентам",
		icon: null,
		children: [],
		is_active: true,
		link: "/corporate-customers/home"
	},
	{
		id: 3,
		title: "Малый бизнес",
		icon: null,
		children: [],
		is_active: true,
		link: "/small-business/home"
	},
])
</script>

<template>
	<NuxtLinkLocale to="/physical/home" class="app-header-logo mb-2">
		<div>
			111111
		</div>
	</NuxtLinkLocale>

	<NuxtLinkLocale to="/small-business/home" class="app-header-logo">
		<div>
			22222
		</div>
	</NuxtLinkLocale>

	<ul>
		<template v-for="menu in menus">
			<nuxt-link-locale :to="menu.link">
				{{ menu.title }}
			</nuxt-link-locale>
		</template>
	</ul>
</template>

<style scoped>

</style>
