<script setup lang="ts">

</script>

<template>
	<div class="money-transfer-view">
		<ui-container>
			<h1 class="text-dark-1 text-[50px] font-extraBold text-center mb-8">Денежные переводы онлайн</h1>

			<div class="px-[106px]">
				<div class="flex items-center">
					<div class="max-w-[500px] w-full shadow-shadow-1 pt-11 pr-[55px] pb-[53px] pl-[47px] rounded-xl bg-white">
						<div class="mb-9">
							<p class="text-base font-bold text-dark-1 mb-3">Номер карты отправителя*</p>

							<UInput size="xl" placeholder="0000 0000 0000 0000" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
						</div>

						<div class="flex gap-10">
							<div class="w-1/2">
								<p class="text-base font-bold text-dark-1 mb-3">Срок действия</p>

								<UInput size="xl" placeholder="ММ / ГГ" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
							</div>

							<div class="w-1/2">
								<p class="text-base font-bold text-dark-1 mb-3">CVV/CVC</p>

								<UInput size="xl" placeholder="123" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
							</div>
						</div>
					</div>

					<div class="px-[68px]">
						<img src="/images/reload.webp" alt="Transfer reload" />
					</div>

					<div class="max-w-[500px] w-full shadow-shadow-1 pt-11 pr-[55px] pb-[53px] pl-[47px] rounded-xl bg-white">
						<div class="mb-[118px]">
							<p class="text-base font-bold text-dark-1 mb-3">Номер карты получателя*</p>

							<UInput size="xl" placeholder="0000 0000 0000 0000" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
						</div>
					</div>
				</div>

				<div class="flex gap-8 mt-[63px] mb-[50px]">
					<div class="w-1/3">
						<p class="text-base font-bold text-dark-1 mb-3">Сумма перевода*</p>

						<UInput size="xl" placeholder="500 000 000" variant="none" class="border border-light-1 bg-white rounded-lg">
							<template #trailing>
								<span class="text-base text-light-4">Сум</span>
							</template>
						</UInput>
					</div>

					<div class="w-1/3">
						<p class="text-base font-bold text-dark-1 mb-3">Комиссия*</p>

						<UInput size="xl" placeholder="Комиссия" variant="none" class="border border-light-1 bg-white rounded-lg">
							<template #trailing>
								<span class="text-base text-light-4">Сум</span>
							</template>
						</UInput>
					</div>

					<div class="w-1/3">
						<p class="text-base font-bold text-dark-1 mb-3">Итого*</p>

						<UInput size="xl" placeholder="Итого" variant="none" class="border border-light-1 bg-white rounded-lg">
							<template #trailing>
								<span class="text-base text-light-4">Сум</span>
							</template>
						</UInput>
					</div>
				</div>

				<div class="flex items-center">
					<UButton
						size="lg"
						trailing
						icon="i-heroicons-arrow-long-right"
						:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
					>
						<span class="font-regular text-base">Продолжить</span>
					</UButton>

					<UCheckbox name="notifications" :ui="{ base: 'w-5 h-5', border: 'border border-light-4', rounded: 'rounded-none' }" class="ml-[50px]">
						<template #label>
							<span class="text-base font-regular text-dark-1">Ознакомлен и принимаю условия оферты</span>
						</template>
					</UCheckbox>
				</div>
			</div>
		</ui-container>
	</div>
</template>

<style scoped>

</style>
