<script setup>
// Store
const route = useRoute()
import { useMenuStore } from '~/store/menu.store'
// Composable
const menuStore = useMenuStore()
// Reactive
const currentCategoryIndex = ref(0)
// Methods
const openCategory = (index) => {
	currentCategoryIndex.value = index
}
</script>

<template>
	<div v-if="route.fullPath.includes('/home')" class="app-navigation">
		<div class="bg-light-3 h-[770px] pt-9">
			<ui-container data-type="container">
				<div class="flex">
					<div class="w-[385px] -mr-[30px] mt-[23px]">
						<template v-if="menuStore.menuLoading">
							<template v-for="item in 9">
								<USkeleton class="rounded-xl w-full bg-gray-200 h-[60px] mb-1" />
							</template>
						</template>

						<template v-else>
							<template v-for="(menu, index) in menuStore.currentRoute.children">
								<div
									class="top-level-link-category group flex items-center py-4 px-[22px] rounded-[17px] mb-1 cursor-pointer transition-all hover:bg-white hover:shadow-[0_0_9px_0_rgba(0,0,0,0.1)]"
									:class="{ 'active' : currentCategoryIndex === index }"
									@click="openCategory(index)"
								>
									<div v-if="menu.icon" class="w-8 mr-2">
										<img :src="menu.icon" :alt="menu.title" class="block opacity-50 group-hover:opacity-100" />
									</div>

									<span class="text-light-6 text-xl font-bold transition-all group-hover:text-dark-1">{{ menu.title }}</span>
								</div>
							</template>
						</template>
					</div>

					<div class="flex-1 flex flex-col relative rounded-[17px] bg-white shadow-[0_0_9px_0_rgba(0,0,0,0.1)] p-[30px] h-[764px]">
						<template v-if="menuStore.menuLoading">
							<div class="flex flex-wrap flex-1 gap-8">
								<USkeleton class="rounded-xl w-full bg-gray-200" />
								<USkeleton class="rounded-xl flex-1 bg-gray-200" />
								<USkeleton class="rounded-xl flex-1 bg-gray-200" />
							</div>
						</template>

						<template v-else>
							<div class="flex flex-wrap flex-1 gap-8">
								<div class="group w-full bg-light-3 rounded-2xl py-[33px] px-12 relative overflow-hidden">
									<div class="max-w-[350px] flex flex-col h-full relative z-10">
										<h1 class="text-[35px] font-bold text-dark-1 mb-3">Автокредит 2.3</h1>
										<p class="text-light-2">
											Быстрый автокредит на все автомобили!
											Первоначальный взнос - от 10%
										</p>

										<div class="mt-auto">
											<UButton size="lg" color="primary" :ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }">
												<span class="text-base font-regular">Подробнее</span>
											</UButton>
										</div>
									</div>

									<div class="absolute top-0 right-0">
										<img src="/tempo/avtokredit.png" alt="Kredit" class="transition-all group-hover:scale-110">
									</div>
								</div>

								<div class="group flex-1 bg-light-3 rounded-2xl py-[33px] px-12 relative overflow-hidden transition-all">
									<div class="max-w-[350px] flex flex-col h-full relative z-10">
										<h1 class="text-[35px] font-bold text-dark-1 mb-3">Микрозайм 2.3</h1>
										<p class="text-light-2">
											Самый удобный способ
											получить необходимые деньги!
										</p>

										<div class="mt-auto">
											<UButton size="lg" color="primary" :ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }">
												<span class="text-base font-regular">Подробнее</span>
											</UButton>
										</div>
									</div>
								</div>

								<div class="group flex-1 bg-light-3 rounded-2xl py-[33px] px-12 relative overflow-hidden transition-all">
									<div class="max-w-[350px] flex flex-col h-full relative z-10">
										<h1 class="text-[35px] font-bold text-dark-1 mb-3">Автокредит 2.3</h1>
										<p class="text-light-2">
											Быстрый автокредит на все автомобили!
											Первоначальный взнос - от 10%
										</p>

										<div class="mt-auto">
											<UButton size="lg" color="primary" :ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }">
												<span class="text-base font-regular">Подробнее</span>
											</UButton>
										</div>
									</div>
								</div>
							</div>

							<div class="mt-[30px]">
								<div class="text-right">
									<nuxt-link-locale to="/physical-persons/credits">
										<UButton
											size="lg"
											color="primary"
											:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
											icon="i-heroicons-arrow-long-right"
											trailing
										>
											<span class="text-base font-regular">Все кредиты</span>
										</UButton>
									</nuxt-link-locale>
								</div>
							</div>
						</template>
					</div>
				</div>
			</ui-container>
		</div>
	</div>
</template>

<style>
.top-level-link-category.active {
	background: white;
	box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.1);
}

.top-level-link-category.active img {
	opacity: 1;
}

.top-level-link-category.active span {
	color: #333232;
}
</style>
