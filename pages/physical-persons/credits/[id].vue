<script setup lang="ts">
// Composable
const route = useRoute()
// Reactive
const questions = ref([
	{
		title: 'Заполните заявку на сайте',
		description: '11111 asdasdasd',
		icon: null
	},
	{
		title: 'Заполните заявку на сайте',
		description: '22222 asdasdasd',
		icon: null
	},
	{
		title: 'Заполните заявку на сайте',
		description: '33333 asdasdasd',
		icon: null
	},
	{
		title: 'Консультация по получению кредита',
		description: 'Чтобы оставить заявку на консультацию специалиста по кредиту, заполните форму, это займет не более 2 минут!',
		icon: null
	},
])
const property = ref([
	{
		title: '15 минут',
		description: 'получение кредита',
		icon: null
	},
	{
		title: 'До 50 млн. сум',
		description: 'сумма кредита',
		icon: null
	},
	{
		title: 'От 1 до 3 лет',
		description: 'срок кредитования',
		icon: null
	},
	{
		title: 'От 30%',
		description: 'процентная ставка',
		icon: null
	},
])
const credit = ref([
	{
		label: 'Кредитный калькулятор',
		slot: 'credit-calc'
	},
	{
		label: 'Условия и требования',
		slot: 'terms-conditions'
	},
	{
		label: 'Документы',
		slot: 'documents'
	},
])
</script>

<template>
	<div class="credits-detail-view">
		<div class="bg-light-3 pb-[64px]">
			<ui-container>
				<div class="flex items-center">
					<div class="flex-1">
						<div class="w-[500px]">
							<h1 class="text-[50px] font-extraBold text-dark-1 mb-3">Микрозайм 2.3</h1>

							<div class="text-base text-dark-1 opacity-50">
								Микрозайм выдается на личные нужды гражданам
								Республики Узбекистан, при условии официального
								трудоустройства, до пенсионного возраста.
								Максимальная сумма кредита определяется
								в зависимости от платежеспособности Заемщика.

								Есть страхование кредитования, со списком страховых
								компаний Вы можете ознакомиться по ссылке.
							</div>

							<UButton
								size="lg"
								color="primary"
								:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
								class="mt-10"
							>
								<span class="text-base font-regular">Получить кредит</span>
							</UButton>
						</div>
					</div>

					<div class="w-[600px]">
						<img src="/tempo/wallet.webp" alt="wallet" class="object-contain" />
					</div>
				</div>

				<ui-property-card :items="property" class="gap-[66px]" />

				<div class="mt-[118px]">
					<h1 class="text-[50px] font-extraBold text-dark-1 text-center mb-7">Всё о кредите:</h1>

					<UTabs :items="credit" class="app-tabs">
						<template #credit-calc>
							<calc-credit />
						</template>

						<template #terms-conditions>terms-conditions</template>

						<template #documents>documents</template>
					</UTabs>
				</div>
			</ui-container>
		</div>

		<div class="pt-[54px] pb-[148px]">
			<question-cards :items="questions" />
		</div>
	</div>
</template>

<style scoped>

</style>
