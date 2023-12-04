import { defineStore } from 'pinia'
export const useMenuStore = defineStore('menu', () => {
	// Reactive
	let menus = ref([])
	let currentRoute = ref([])
	let menuLoading = ref(true)

	// Methods
	const getMenu = async () => {
		const runtimeConfig = useRuntimeConfig()

		try {
			menuLoading.value = true
			const { results } = await $fetch(`${runtimeConfig.public.apiBase}/menu/v1/list/`, {
				method: 'GET',
				headers: {
					'Accept-Language': 'uz'
				}
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
		const route = useRoute()
		const parent = route.fullPath.split('/')[2]

		return currentRoute.value = menus.value.find(menu => menu?.config.link.includes(parent))
	}

	return {
		menus,
		currentRoute,
		menuLoading,
		getMenu,
		setCurrentRoute
	}
})
