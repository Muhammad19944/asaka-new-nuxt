<script setup>
// Composable
const route = useRoute()
// Store
import { useMenuStore } from '~/store/menu.store'
// Composable
const menuStore = useMenuStore()
// Reactive
const searchModal = ref(false)
const items = ref([
	[
		{
			label: 'Settings'
		}
	]
])
// Watch
watch(() => route.fullPath, () => {
	searchModal.value = false
})
</script>

<template>
	<div class="search-menu-view">
		<img
			src="/images/search-icon.svg"
			alt="search-icon"
			class="w-[32px] cursor-pointer"
			@click="searchModal = !searchModal"
		/>
	</div>

	<!-- Search modal -->
	<UModal
		v-model="searchModal"
		:ui="{ wrapper: 'z-[99]', base: '!max-w-[1400px] pt-10 pb-8 px-[110px] rounded-xl', overlay: { background: 'bg-[#0000004d]' } }"
	>
		<h1 class="font-extraBold text-[50px] text-dark-1">Поиск по сайту</h1>

		<div class="mt-[37px] mb-[41px]">
			<UInput size="xl" placeholder="Что ищете?" variant="none" class="border border-light-1 bg-light-3 rounded-lg">
				<template #trailing>
					<button type="button" class="text-danger-color font-medium">Найти</button>
				</template>
			</UInput>
		</div>

		<div class="flex flex-wrap gap-10">
			<template v-for="menu in menuStore.menus">
				<div class="w-[calc(25%-30px)]">
					<nuxt-link-locale :to="`${menu.config.link}/home`" class="inline-block mb-1">
						{{ menu.title }}
					</nuxt-link-locale>

					<template v-for="child in menu.children">
						<div>
							<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
								<div class="inline-block text-light-2 mb-2 text-[15px] hover:text-primary-color-500">
									{{ child.title }}
								</div>

								<template #item="{ item }">
									{{ child.title }}
								</template>
							</UDropdown>
						</div>
					</template>
				</div>
			</template>
		</div>

		<div class="border-t my-10"></div>

		<call-banner />
	</UModal>
	<!-- /Search modal -->
</template>

<style scoped>

</style>
