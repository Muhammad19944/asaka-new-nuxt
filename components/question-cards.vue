<script setup>
// Props
const props = defineProps({
	items: {
		type: Array,
		default: () => []
	}
})

</script>

<template>
	<ui-container>
		<h1 class="text-[50px] font-extraBold text-dark-1 text-center">Как получить кредит?</h1>
		<p class="text-base text-dark-1 opacity-50 text-center">Несколько шагов до вашей мечты!</p>

		<div class="question-wrapper grid mt-11" :style="{ gridTemplateColumns: `repeat(${props.items.length}, 1fr 50px)` }">
			<template v-for="(item, index) in props.items">
				<div class="question-cards group py-7 px-10 rounded-xl border relative h-[350px] overflow-hidden cursor-pointer transition-all duration-[400ms] hover:bg-primary-color-500 hover:text-white">
					<div class="question-icon w-[50px] h-[50px] mb-6">
						<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<rect width="43" height="43" fill="url(#pattern1)"/>
							<defs>
								<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlink:href="#image0_283_299" transform="translate(-0.00233645) scale(0.0046729)"/>
								</pattern>
								<image id="image0_283_299" width="215" height="214" xlink:href="data:image/png;base64,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"/>
							</defs>
						</svg>
					</div>

					<h1 class="text-xl font-bold mb-6">{{ item.title }}</h1>
					<p class="text-base opacity-0 text-white group-hover:opacity-100">{{ item.description }}</p>

					<span class="text-[200px] font-extraBold absolute bottom-[-80px] right-0 opacity-[0.03]">{{ index + 1 }}</span>
				</div>

				<div class="flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</div>
			</template>
		</div>

		<div class="text-center mt-14">
			<UButton
				size="lg"
				color="primary"
				:ui="{ padding: { lg: 'px-8' }, rounded: 'rounded-lg' }"
			>
				<span class="text-base font-regular">Получить консультацию</span>
			</UButton>
		</div>
	</ui-container>
</template>

<style>
.question-wrapper > div:last-child {
	display: none;
}

.question-cards:hover .question-icon {
	filter: brightness(0) invert(1);
}
</style>
