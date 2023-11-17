import { defineStore } from 'pinia'
import { useRoute } from "#app"
// Composable
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
export const useMenuStore = defineStore('menu', () => {
	// Reactive
	let menus = ref([])
	let currentRoute = ref([])
	let menuLoading = ref(true)

	// Methods
	const getMenu = async () => {
		try {
			menuLoading.value = true
			const { results } = await $fetch(`${runtimeConfig.public.apiBase}/menu/v1/list/`, {
				method: 'GET'
			})
			menus.value = results
			setCurrentRoute()
		}
		finally {
			setTimeout(() => {
				menuLoading.value = false
			}, 500)
		}
	}

	const setCurrentRoute = () => {
		return currentRoute.value = menus.value.find(menu => menu?.config.link === route.fullPath.slice(3))
	}

	return {
		menus,
		currentRoute,
		menuLoading,
		getMenu,
		setCurrentRoute
	}
})
