<script setup lang="ts">

</script>

<template>
	<div class="online-registration-form-view">
		<ui-container>
			<h1 class="text-dark-1 text-[50px] font-extraBold text-center">Запись онлайн</h1>
			<p class="max-w-[430px] w-full text-base font-regular text-light-4 text-center mx-auto">
				Если Вы устали стоять в очередях в филиалах, запишитесь на приём онлайн
			</p>

			<div class="mt-8 px-[112px]">
				<UForm :state="{}" class="flex gap-24">
					<div class="w-1/2">
						<UFormGroup name="email" class="mb-8">
							<UInput size="xl" placeholder="Ваше имя*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
						</UFormGroup>

						<UFormGroup name="email" class="mb-8">
							<UInput size="xl" placeholder="Мобильный телефон*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
						</UFormGroup>
					</div>

					<div class="w-1/2">
						<UFormGroup name="email" class="mb-8">
							<UInput size="xl" placeholder="Выберите филиал*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
						</UFormGroup>

						<UFormGroup name="email" class="mb-8">
							<UInput size="xl" placeholder="Время приёма*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
						</UFormGroup>
					</div>
				</UForm>

				<div class="flex items-center">
					<UButton
						size="lg"
						:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
					>
						<span class="font-regular text-base">Записаться</span>
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
