<script setup>
// Reactive
const selected = ref('USD')
// Non-reactive
const currency = ['USD', 'GBP', 'CHF', 'EUR', 'RUB', 'JPY']
</script>

<template>
	<div class="exchange-rates-view">
		<ui-container>
			<div class="border-2 border-light-1 rounded-xl p-[50px]">
				<h1 class="text-dark-1 text-[50px] font-extraBold text-center">Курс валют</h1>
				<p class="text-center text-light-2">Актуально на 13:05, 23 августа 2023 г.</p>

				<div class="flex mt-10">
					<div class="flex-1 border-b border-b-light-1">
						<template v-for="item in 3">
							<div class="flex mb-4">
								<div class="w-16 flex items-end">
									<p class="text-[22px] mb-[3px]">$</p>
								</div>

								<div class="w-32 flex items-end">
									<p class="text-[22px] mb-[3px]">USD</p>
								</div>

								<div class="flex-1">
									<h6 class="text-light-2 mb-2">Покупка</h6>

									<div class="flex">
										<p class="font-bold text-[30px]">12 030</p>
										<span class="text-base text-success-color self-end mb-[6px] ml-2">+30,5</span>
									</div>
								</div>

								<div class="">
									<h6 class="text-light-2 mb-2">Продажа</h6>

									<div class="flex">
										<p class="font-bold text-[30px]">12 100</p>
										<span class="text-base text-danger-color self-end mb-[6px] ml-2">-10,0</span>
									</div>
								</div>
							</div>
						</template>
					</div>

					<div class="w-32"></div>

					<div class="max-w-[550px] w-full bg-light-3 rounded-2xl py-9 px-12">
						<p class="text-base text-light-4 mb-3">Хочу продать:</p>

						<div class="bg-white flex rounded-lg py-[10px] pl-4 border border-light-1 mb-8">
							<input value="1 000" class="flex-1 outline-none" />

							<USelectMenu
								v-model="selected"
								:options="currency"
								size="xl"
								variant="none"
								:ui.select="{ ring: null, padding: { xl: 'p-0' } }"
							/>
						</div>

						<p class="text-base text-light-4 mb-3">Получу:</p>

						<div class="bg-white flex rounded-lg py-[10px] pl-4 border border-light-1">
							<input value="1 000" class="flex-1 outline-none" />

							<USelectMenu
								v-model="selected"
								:options="currency"
								size="xl"
								variant="none"
								:ui.select="{ ring: null, padding: { xl: 'p-0' } }"
							/>
						</div>
					</div>
				</div>

				<h1 class="text-base text-primary-color-500 mt-3">Все валюты</h1>
			</div>
		</ui-container>
	</div>
</template>

<style scoped>

</style>
