<script setup>

</script>

<template>
	<div class="physical-home-view">
		<section class="py-[140px]">
			<exchange-rates />
		</section>

		<section class="pb-[120px]">
			<app-service />
		</section>

		<section class="mb-[180px]">
			<slider-promotions-offers />
		</section>

		<section class="pb-[77px]">
			<ui-container>
				<h1 class="text-dark-1 text-[50px] font-extraBold text-center mb-8">Это полезно</h1>

				<div class="flex gap-10">
					<div class="flex-1">
						<div class="flex py-10 px-[50px] bg-light-3 rounded-[20px] mb-10">
							<div class="flex-1 flex flex-col">
								<div class="max-w-[315px]">
									<h1 class="text-[35px] font-bold text-dark-1 leading-[1.3em] mb-2">О нашем Банке</h1>
									<p class="text-base text-light-4">27 лет уверенных позиций на рынке. Мы - дравер прогресса!</p>
								</div>

								<div class="mt-auto">
									<UButton
										color="white"
										size="xl"
										:ui="{ padding: { xl: 'px-8' }, rounded: 'rounded-lg' }"
									>
										Подробнее
									</UButton>
								</div>
							</div>

							<div>
								<img src="/images/bank.webp" alt="About bank" />
							</div>
						</div>

						<div class="flex gap-10">
							<div class="flex flex-col bg-light-5 rounded-[20px] w-1/2 pt-11 pl-[50px] pb-[50px] pr-[120px] relative">
								<h1 class="text-[35px] font-bold text-dark-1 leading-[1.2em] mb-2">Свежие новости</h1>
								<p class="text-base text-light-4">Будьте в курсе последних новостей о нашем Банке и мировом рынке!</p>

								<div class="mt-auto">
									<UButton
										color="white"
										size="xl"
										:ui="{ padding: { xl: 'px-8' }, rounded: 'rounded-lg' }"
									>
										Читать новости
									</UButton>
								</div>

								<img src="/images/bell.webp" alt="News image" class="absolute right-[26px] bottom-[43px] block" />
							</div>

							<div class="bg-light-3 rounded-[20px] w-1/2 pt-11 pl-[50px] pb-[50px] pr-[140px] relative">
								<h1 class="text-[35px] font-bold text-dark-1 leading-[1.2em] mb-2">Акционерам и инвесторам</h1>
								<p class="text-base text-light-4">Основные показатели и достижения Банка</p>

								<div class="mt-12">
									<UButton
										color="white"
										size="xl"
										:ui="{ padding: { xl: 'px-8' }, rounded: 'rounded-lg' }"
									>
										Ознакомиться
									</UButton>
								</div>

								<img src="/images/angle-up.webp" alt="Shareholders and investors image" class="absolute right-0 bottom-0 block" />
							</div>
						</div>
					</div>

					<div class="max-w-[350px] w-full bg-light-5 rounded-[20px]">
						<div class="pt-11 px-[50px]">
							<h1 class="text-[35px] font-bold text-dark-1 leading-[1.3em] mb-2">Карьера в Банке</h1>
							<p class="text-base text-light-4">Станьте членом нашей команды</p>
						</div>

						<img src="/images/target.webp" alt="Career bank image" class="block my-6" />

						<div class="p-[50px] pt-6">
							<UButton
								color="white"
								size="xl"
								:ui="{ padding: { xl: 'px-8' }, rounded: 'rounded-lg' }"
							>
								Подробнее
							</UButton>
						</div>
					</div>
				</div>
			</ui-container>
		</section>

		<section class="bg-light-3 pt-11 pb-14">
			<money-transfer />

			<ui-container>
				<div class="bg-white shadow-shadow-2 rounded-[23px] pt-[64px] px-[108px] pb-[54px] relative mt-[134px]">
					<div class="max-w-[430px] w-full">
						<h1 class="text-[50px] font-extraBold text-dark-1 leading-[1.2em] mb-5">Стань ближе к своей мечте!</h1>
						<p class="text-base text-light-4">Мы стремимся делать Вашу жизнь лучше, поэтому наши специалисты подготовили для Вас персональное предложение! Не упустите шанс!</p>

						<UForm class="mt-8">
							<UFormGroup name="email" class="mb-7">
								<UInput size="xl" placeholder="Ваше имя*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
							</UFormGroup>

							<UFormGroup name="password" class="mb-7">
								<UInput size="xl" placeholder="Мобильный телефон*" variant="none" class="border border-light-1 bg-light-3 rounded-lg" />
							</UFormGroup>

							<UButton
								type="submit"
								size="lg"
								:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
							>
								<span class="font-regular">Получить кредит</span>
							</UButton>
						</UForm>

						<img src="/images/gift.webp" alt="Gift image" class="absolute top-0 right-0" />
					</div>
				</div>
			</ui-container>
		</section>

		<section class="pt-[62px] pb-[139px]">
			<online-registration-form />
		</section>

		<the-footer />
	</div>
</template>

<style scoped>

</style>
