<script setup>
// Store
import { useMenuStore } from '~/store/menu.store'
// Composable
const menuStore = useMenuStore()
// Reactive
const items = ref([
	[
		{
			label: 'Settings'
		}
	]
])
</script>

<template>
	<footer class="app-footer">
		<div class="bg-dark-1 shadow-shadow-3 py-8 text-white">
			<ui-container>
				<div class="flex items-start justify-between">
					<div>
						<div class="flex mb-12">
							<img src="/images/logo.svg" alt="Logo" class="mr-2" />
							<img src="/images/logo-text-white.svg" alt="Logo text Asakabank" />
						</div>

						<p class="text-base text-white mb-1">Мы в социальных сетях:</p>

						<div class="flex gap-4 mt-2">
							<a href="#">
								<img src="/images/telegram-icon.svg" alt="Telegram icon" />
							</a>
							<a href="#">
								<img src="/images/facebook-icon.svg" alt="Facebook icon" />
							</a>
							<a href="#">
								<img src="/images/instagram-icon.svg" alt="Instagram icon" />
							</a>
						</div>
					</div>

					<div class="text-right">
						<p class="text-base text-light-4 mb-1">Круглосуточный контакт центр:</p>
						<h1 class="text-[45px] font-extraBold text-primary-color-500 leading-none mb-3">1152</h1>

						<p class="text-base text-light-4 mb-1">Телефон доверия:</p>
						<h1 class="text-[25px] font-extraBold leading-none">(+998 71) 200-55-22</h1>
					</div>
				</div>
			</ui-container>
		</div>

		<div class="bg-dark-2 py-14 text-white">
			<ui-container>
				<div class="flex flex-wrap gap-10 pb-[78px]">
					<template v-if="menuStore.menuLoading">
						<template v-for="col in 6">
							<div class="w-[calc(25%-30px)]">
								<template v-for="item in 7">
									<USkeleton
										class="rounded w-[200px] h-[22px] bg-[#ffffff0d]"
										:class="{ 'w-[250px]' : item === 1, 'mb-[10px]': item !== 7 }"
									/>
								</template>
							</div>
						</template>
					</template>

					<template v-else>
						<template v-for="menu in menuStore.menus">
							<div class="w-[calc(25%-30px)]">
								<router-link :to="menu.config.link" class="inline-block mb-1">
									{{ menu.title }}
								</router-link>

								<template v-for="child in menu.children">
									<div>
										<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
											<div class="inline-block text-light-2 mb-2 text-[15px]">
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
					</template>
				</div>

				<div class="flex justify-between items-end text-light-4 text-sm">
					<p>
						Все права защищены. Услуги лицензированы. <br> При использовании материалов сайта "Асакабанк", ссылка на сайт обязательна.
					</p>

					<p>© 2023 АО «Асакабанк»</p>
				</div>
			</ui-container>
		</div>
	</footer>
</template>

<style scoped>

</style>
