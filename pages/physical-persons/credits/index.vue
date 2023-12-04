<script setup lang="ts">
const items = [
	{
		label: 'Требования к заёмщику',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
		slot: 'slot-1'
	},
	{
		label: 'Документы Банка',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
		slot: 'slot-2'
	},
	{
		label: 'Необходимые документы для получения кредита',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
		slot: 'slot-3'
	},
	{
		label: 'Частые вопросы',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
		slot: 'slot-4'
	},
]
</script>

<template>
	<div class="credits-view">
		<div class="bg-light-3 pt-20 pb-12">
			<ui-container>
				<h1 class="text-[50px] font-extraBold text-dark-1 text-center mb-8">Кредиты</h1>

				<ui-card v-for="item in 4" />
			</ui-container>
		</div>

		<div class="py-12">
			<ui-container>
				<h1 class="text-[50px] font-extraBold text-dark-1 text-center mb-8">Помощь по кредитам</h1>

				<UAccordion
					:items="items"
					:multiple="true"
					:ui="{ default: { class: 'accordion-button text-xl font-medium text-dark-1 border border-light-1 px-5 py-[14px] mb-5' } }"
				>
				</UAccordion>
			</ui-container>
		</div>
	</div>
</template>

<style scoped>

</style>
