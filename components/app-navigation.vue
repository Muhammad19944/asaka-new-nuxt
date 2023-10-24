<script setup>
// Reactive
const menus = ref([
	{
		title: "Физический лицам",
		icon: null,
		is_active: true,
		link: "/physical-persons/home",
		children: [
			{
				title: "Кредиты",
				icon: "/tempo/money.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Вклады",
				icon: "/tempo/deposit.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Карты",
				icon: "/tempo/cards.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Денежные переводы",
				icon: "/tempo/money-transfer.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Офисы и банкоматы",
				icon: "/tempo/branches.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Курс валют",
				icon: "/tempo/currency.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Переводы онлайн",
				icon: "/tempo/online-transfer.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Акции",
				icon: "/tempo/star.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Запись онлайн",
				icon: "/tempo/calendar.svg",
				is_active: true,
				link: null,
				children: []
			},
		]
	},
	{
		title: "Малый бизнес",
		icon: null,
		is_active: true,
		link: "/small-business/home",
		children: [
			{
				title: "Кредиты 222",
				icon: "/tempo/money.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Вклады 222",
				icon: "/tempo/deposit.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Карты 222",
				icon: "/tempo/cards.svg",
				is_active: true,
				link: null,
				children: []
			},
		]
	},
	{
		title: "Корпоративным клиентам",
		icon: null,
		children: [],
		is_active: true,
		link: "/corporate-customers/home"
	},
	{
		title: "Пресс-центр",
		icon: null,
		is_active: true,
		link: "/small-business/home",
		children: [
			{
				title: "Кредиты 222",
				icon: "/tempo/money.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Вклады 222",
				icon: "/tempo/deposit.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Карты 222",
				icon: "/tempo/cards.svg",
				is_active: true,
				link: null,
				children: []
			},
		]
	},
	{
		title: "Акционерам и инвесторам",
		icon: null,
		is_active: true,
		link: "/small-business/home",
		children: [
			{
				title: "Кредиты 222",
				icon: "/tempo/money.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Вклады 222",
				icon: "/tempo/deposit.svg",
				is_active: true,
				link: null,
				children: []
			},
			{
				title: "Карты 222",
				icon: "/tempo/cards.svg",
				is_active: true,
				link: null,
				children: []
			},
		]
	},
])
const menusMoreCount = ref(0)
const currentCategoryIndex = ref(0)
// Composable
const route = useRoute()
// Computed
const isMoreOpen = computed(() => menusMoreCount.value & 1)
const menusCollapsed = computed(() => isMoreOpen.value ? menus.value.slice(0, 3) : menus.value)
const parentRoute = computed(() => menus.value.find(menu => menu.link === route.fullPath.slice(3)))
// Methods
const openCategory = (index) => {
	currentCategoryIndex.value = index
}
</script>

<template>
	<div class="app-navigation">
		<div class="bg-light-3 h-[770px]">
			<ui-container>
				<div class="flex items-center gap-[18px] py-[30px]">
					<template v-for="menu in menusCollapsed">
						<nuxt-link-locale
							:to="menu.link"
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
				</div>

				<div class="flex">
					<div class="w-[385px] -mr-[30px] mt-[23px]">
						<template v-for="(menu, index) in parentRoute.children">
							<div
								class="top-level-link-category group flex items-center py-4 px-[22px] rounded-[17px] mb-1 cursor-pointer transition-all hover:bg-white hover:shadow-[0_0_9px_0_rgba(0,0,0,0.1)]"
								:class="{ 'active' : currentCategoryIndex === index }"
								@click="openCategory(index)"
							>
								<div class="w-8">
									<img :src="menu.icon" :alt="menu.title" class="block opacity-50 group-hover:opacity-100" />
								</div>
								<span class="text-light-6 text-xl font-bold ml-2 transition-all group-hover:text-dark-1">{{ menu.title }}</span>
							</div>
						</template>
					</div>

					<div class="flex-1 flex flex-col rounded-[17px] bg-white shadow-[0_0_9px_0_rgba(0,0,0,0.1)] p-[30px] h-[764px]">
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
								<UButton
									size="lg"
									color="primary"
									:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
									icon="i-heroicons-arrow-long-right"
									trailing
								>
									<span class="text-base font-regular">Все кредиты</span>
								</UButton>
							</div>
						</div>
					</div>
				</div>
			</ui-container>
		</div>
	</div>
</template>

<style>
.top-level-link.router-link-active {
	border-color: rgb(232 68 86 / 1);
	color: rgb(232 68 86 / 1);
}

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
