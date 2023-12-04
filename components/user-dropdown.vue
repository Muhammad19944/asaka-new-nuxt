<script setup>
// Reactive
const credit = ref([
	{
		label: 'Логин',
		slot: 'login'
	},
	{
		label: 'ЭЦП',
		slot: 'eri-key'
	}
])
const authModal = ref(false)
// Non-reactive
const items = [
	[
		{
			label: 'Internet banking',
			icon: 'i-heroicons-megaphone'
		},
		{
			label: 'Логин',
			icon: 'i-heroicons-book-open',
			click: () => {
				authModal.value = !authModal.value
			}
		},
		{
			label: 'Профиль',
			icon: 'i-heroicons-signal'
		}
	],
	[
		{
			label: 'Выйти',
			icon: 'i-heroicons-arrow-left-on-rectangle'
		}
	]
]
const currency = ['USD', 'GBP', 'CHF', 'EUR', 'RUB', 'JPY']
</script>

<template>
	<div class="user-dropdown-view">
		<UDropdown
			:items="items"
			:ui="{ item: { disabled: 'cursor-text select-text' } }"
			:popper="{ placement: 'bottom-start' }"
			class="flex"
		>
			<div class="flex items-center gap-2">
				<img src="/images/user-icon.svg" alt="user-icon" class="w-4" />
				<span class="text-light-2">Интернет банк</span>
			</div>

			<template #item="{ item }">
				<span class="truncate">{{ item.label }}</span>

				<UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
			</template>
		</UDropdown>
	</div>

	<!-- Auth modal -->
	<UModal
		v-model="authModal"
		:ui="{ wrapper: 'z-[99]', base: '!max-w-[1400px] !bg-light-3 pt-10 pb-8 px-[110px] rounded-xl', overlay: { background: 'bg-[#0000004d]' } }"
	>
		<h1 class="font-extraBold text-[50px]">Авторизация</h1>
		<p class="text-light-2">Войдите в свою учетную запись</p>

		<div class="flex relative mt-10 -mb-20">
			<div class="max-w-[600px] w-full">
				<UTabs :items="credit" class="app-tabs app-tabs--shadow">
					<template #login>
						<div class="p-[26px]">
							<div class="mb-8">
								<UInput size="xl" placeholder="Введите свой логин*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
							</div>

							<div class="mb-8">
								<UInput size="xl" placeholder="Введите пароль*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
							</div>

							<div class="flex flex-wrap mb-9">
								<div class="w-1/2 gap-10">
									<a href="#" class="inline-block text-primary-color-500 underline">Зарегистрироваться</a>
								</div>

								<div class="w-1/2 gap-10">
									<a href="#" class="inline-block underline">Забыли пароль?</a>
								</div>

								<div class="w-full gap-10 mt-3">
									<a href="#" class="inline-block underline">
										Верификация учетной записи
									</a>
								</div>
							</div>

							<UButton
								size="lg"
								color="primary"
								:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
							>
								<span class="text-base font-regular">Войти</span>
							</UButton>
						</div>
					</template>

					<template #eri-key>
						<div class="p-[26px]">
							<div class="mb-8">
								<USelectMenu
									:options="currency"
									size="xl"
									variant="none"
									placeholder="Выберите свой ЭЦП"
									class="border border-light-1 bg-light-3 rounded-lg"
								/>
							</div>

							<UButton
								size="lg"
								color="primary"
								:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
							>
								<span class="text-base font-regular">Войти</span>
							</UButton>
						</div>
					</template>
				</UTabs>
			</div>

			<img src="/images/auth-image.svg" alt="auth-image" class="relative -top-[50px] -right-[90px]" />
		</div>

		<call-banner />
	</UModal>
	<!-- /Auth modal -->
</template>

<style scoped>

</style>
