<script setup lang="ts">

</script>

<template>
	<div class="ui-card flex gap-14 bg-white rounded-xl px-12 py-8 mb-8">
		<div class="flex items-center justify-center w-[298px] h-[292px]">
			<img src="/tempo/wallet.webp" alt="wallet" class="object-contain" />
		</div>

		<div class="flex-1">
			<h1 class="text-[35px] text-dark-1 font-bold mb-1">Микрозайм 2.3</h1>
			<p class="text-base text-dark-1 opacity-50">Самый удобный способ получить необходимые деньги!</p>

			<div class="flex mt-8 pb-6">
				<div class="flex-1">
					<h1 class="text-[25px] text-dark-1 font-bold">15 минут</h1>
					<p class="text-base text-dark-1 opacity-50">получение кредита</p>
				</div>

				<div class="flex-1">
					<h1 class="text-[25px] text-dark-1 font-bold">До 50 млн. сум</h1>
					<p class="text-base text-dark-1 opacity-50">сумма кредита</p>
				</div>

				<div class="flex-1">
					<h1 class="text-[25px] text-dark-1 font-bold">От 1 до 3 лет</h1>
					<p class="text-base text-dark-1 opacity-50">срок кредитования</p>
				</div>
			</div>

			<UDivider />

			<div class="flex justify-end gap-4 mt-8">
				<UButton
					size="lg"
					color="gray"
					:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
					class="!bg-light-500"
				>
					<span class="text-base font-regular">Подробнее</span>
				</UButton>

				<UButton
					size="lg"
					color="primary"
					:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
				>
					<span class="text-base font-regular">Получить кредит</span>
				</UButton>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
