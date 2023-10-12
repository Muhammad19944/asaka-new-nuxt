<script setup>
// Reactive
const thumbsSwiper = ref(null)
const slides = ref([
	{
		title: "Ипотека",
		shortDescription: "На рыночных условиях",
		description: "Самый удобный способ получить необходимые деньги!",
		image: "/tempo/ipoteka.png"
	},
	{
		title: "Микрозайм 2.3",
		shortDescription: "Самый удобный способ получить деньги!",
		description: "Самый удобный способ получить необходимые деньги!",
		image: "/tempo/wallet.webp"
	},
	{
		title: "Приложение “Asakabank”",
		shortDescription: "Банк у Вас в руках!",
		description: "Банк у Вас в руках!",
		image: "/tempo/mobile-app.png"
	},
	{
		title: "Автокредит 2.3",
		shortDescription: "На все автомобили!",
		description: "На все автомобили!",
		image: "/tempo/avtokredit.png"
	},
])
</script>

<template>
	<div class="promotions-offers-view">
		<h1 class="text-dark-1 text-[50px] font-extraBold text-center mb-8">Акции и предложения</h1>

		<div class="bg-light-3 h-[568px]">
			<Swiper
				:modules="[SwiperAutoplay, SwiperEffectFade, SwiperThumbs]"
				:slides-per-view="1"
				:thumbs="{ swiper: thumbsSwiper }"
				:loop="true"
				:autoplay="{
		      delay: 8000,
		      disableOnInteraction: false
		    }"
				class="h-full"
			>
				<SwiperSlide v-for="slide in slides" :key="slide" class="bg-light-3">
					<ui-container class="flex items-center h-full">
						<div class="w-1/2 px-[106px]">
							<h1 class="font-extraBold text-[50px] bg-light-color-500">{{ slide.title }}</h1>
							<p class="text-[25px] text-light-2 font-light">{{ slide.description }}</p>

							<div class="flex gap-3 mt-[100px]">
								<UButton size="lg" :ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }">
									<span class="text-base font-regular">Получить кредит</span>
								</UButton>

								<UButton size="lg" color="light" :ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }">
									<span class="text-base font-regular text-black">Подробнее</span>
								</UButton>
							</div>
						</div>

						<div class="w-1/2 relative h-full">
							<img :src="slide.image" alt="wallet" class="w-full h-full object-contain" />
						</div>
					</ui-container>
				</SwiperSlide>
			</Swiper>

			<div class="swiper-pagination-wrapper">
				<ui-container>
					<div class="swiper-pagination-container rounded-[10px] -mt-[60px] relative overflow-hidden">
						<Swiper
							:modules="[SwiperAutoplay, SwiperEffectFade, SwiperThumbs, SwiperMousewheel]"
							:slides-per-view="4"
							:watch-slides-progress="true"
							:mousewheel="true"
							:loop="true"
							:autoplay="{
					      delay: 8000,
					      disableOnInteraction: false
					    }"
							@swiper="(swiper) => thumbsSwiper = swiper"
						>
							<SwiperSlide
								v-for="slide in slides"
								:key="slide"
								class="border-r border-r-light-1 hover:cursor-pointer"
							>
								<div class="flex bg-white relative">
									<div class="flex-1 py-5 pl-6">
										<h1 class="font-extraBold text-[20px] leading-[28px] text-dark-1 mb-1">{{ slide.title }}</h1>
										<p class="text-sm text-light-2">{{ slide.shortDescription }}</p>
									</div>

									<div class="w-[120px] h-[120px]">
										<img :src="slide.image" alt="wallet" class="w-full h-full object-contain" />
									</div>

									<div class="progress-line absolute bottom-0 h-[2px] bg-primary-color-500 animate-[line_8.2s_infinite]"></div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</ui-container>
			</div>
		</div>
	</div>
</template>

<style>
.swiper-pagination-container {
	box-shadow: 0 0 17px rgba(0, 0, 0, 0.1);
}

.swiper-slide .progress-line {
	display: none;
}

.swiper-slide.swiper-slide-thumb-active .progress-line {
	display: block;
}
</style>
