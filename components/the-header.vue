<script setup>
// Store
import { useMenuStore } from '~/store/menu.store'
import SearchMenu from "~/components/search-menu.vue";
// Composable
const route = useRoute()
const menuStore = useMenuStore()
// Reactive
const headerRef = ref(null)
const collapsedMenuRef = ref(null)
const menusMoreCount = ref(1)
const lastScrollTop = ref(0)
// Computed
const isMoreOpen = computed(() => menusMoreCount.value & 1)
const menusCollapsed = computed(() => isMoreOpen.value ? menuStore.menus.slice(0, 3) : menuStore.menus)
// Watch
watch(() => route.fullPath, () => {
	menuStore.setCurrentRoute()
})
// Methods
const handleScroll = (ref) => {
	const currentScrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop

	if (currentScrollTop > lastScrollTop.value) {
		ref.header.classList.add('scrolling-down')
	} else {
		ref.header.classList.remove('scrolling-down')
	}

	lastScrollTop.value = currentScrollTop

	if(lastScrollTop.value > ref.layoutHeader.clientHeight) {
		ref.collapseMenu.classList.add('!block')
		ref.containers.forEach(container => {
			container.classList.add('fluid-container')
		})
	} else {
		ref.collapseMenu.classList.remove('!block')
		ref.containers.forEach(container => {
			container.classList.remove('fluid-container')
		})
	}
}
// Hooks
onMounted(async () => {
	await menuStore.getMenu()
	if(process.client) {
		const _headerRef = unref(headerRef)
		const _collapsedMenuRef = unref(collapsedMenuRef)
		const layoutHeader = document.querySelector('#layout-header')
		const containers = document.querySelectorAll('div[data-type]')
		window.addEventListener("scroll", () => handleScroll({
			header: _headerRef,
			collapseMenu: _collapsedMenuRef,
			layoutHeader,
			containers
		}));
	}
})
</script>

<template>
	<header ref="headerRef" class="app-header transition-all duration-[400ms] bg-white fixed top-0 w-full z-[99]">
		<div class="app-header-top py-6">
			<ui-container data-type="container">
				<div class="flex items-center">
					<div class="flex items-center">
						<img src="/images/logo.svg" alt="Logo" class="mr-2" />
						<img src="/images/logo-text.svg" alt="Logo text" />
					</div>

					<div class="flex-1 flex items-center gap-8 justify-end">
						<app-language />

						<user-dropdown />

						<search-menu />
					</div>
				</div>
			</ui-container>
		</div>

		<div class="bg-light-3">
			<ui-container data-type="container">
				<div class="flex items-center gap-[18px] py-[30px]">
					<template v-if="menuStore.menuLoading">
						<USkeleton class="rounded-xl w-[150px] h-[40px] bg-gray-200" />
						<USkeleton class="rounded-xl w-[150px] h-[40px] bg-gray-200" />
						<USkeleton class="rounded-xl w-[150px] h-[40px] bg-gray-200" />
						<USkeleton class="rounded-xl w-[150px] h-[40px] bg-gray-200" />
					</template>

					<template v-else>
						<template v-for="menu in menusCollapsed">
							<nuxt-link-locale
								:to="`${menu.config.link}/home`"
								class="top-level-link text-dark-1 py-[10px] px-[18px] rounded-xl border-2 border-transparent transition-all hover:border-danger-color hover:text-danger-color"
							>
								{{ menu.title }}
							</nuxt-link-locale>
						</template>

						<button type="button" class="group flex items-center" @click="menusMoreCount = menusMoreCount + 1">
							<span class="text-light-2 mr-2 group-hover:text-danger-color">Eщё</span>
							<UIcon
								:name="isMoreOpen ? 'i-heroicons-chevron-double-right' : 'i-heroicons-chevron-double-left'"
								class="text-light-2 group-hover:text-danger-color"
							/>
						</button>
					</template>
				</div>

				<div ref="collapsedMenuRef" class="fixed mt-6 hidden">
					<div class="block-item-wrapper w-[72px] max-h-[650px] overflow-y-auto rounded-lg bg-white shadow-[0_0_9px_0_rgba(0,0,0,0.1)] transition-all hover:w-[350px]">
						<UAccordion :items="menuStore.currentRoute.children">
							<template #default="{ item, index, open }">
								<div class="block-item-link group w-full h-[72px] flex items-center rounded-lg px-5 cursor-pointer transition-all hover:shadow-[0_0_9px_0_rgba(0,0,0,0.1)]">
									<div v-if="item.icon" class="w-8 mr-2">
										<img :src="item.icon" :alt="item.title" class="block opacity-50 group-hover:opacity-100" />
									</div>

									<span class="text-light-6 text-xl font-bold hidden truncate whitespace-nowrap">{{ item.title }}</span>

									<i :class="open ? 'i-heroicons-chevron-up' :'i-heroicons-chevron-down'" class="ml-auto hidden"></i>
								</div>
							</template>
							<template #item="{ item }">
								<pre>{{ item }}</pre>
							</template>
						</UAccordion>
					</div>
				</div>
			</ui-container>
		</div>
	</header>

	<div class="h-[187px]"></div>
</template>

<style>
.app-header.scrolling-down {
	transform: translateY(-100%);
	transition-delay: 300ms;
}

.app-header-top {
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.top-level-link.router-link-active {
	border-color: rgb(232 68 86 / 1);
	color: rgb(232 68 86 / 1);
}

.block-item-wrapper:hover span {
	color: #333232;
	display: block;
}

.block-item-wrapper:hover .block-item-link i {
	display: block !important;
}
</style>
