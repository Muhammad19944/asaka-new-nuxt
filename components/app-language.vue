<script setup>
// Core
import { onClickOutside } from '@vueuse/core'
// Reactive
const modalRef = ref(null)
const menu = ref(false)
const selectedLang = ref(null)
const languages = [
	{
		title: `O'zbek`,
		short: `O'zb`,
		image: '/images/flag-ru.svg',
		lang: 'uz'
	},
	{
		title: `Русский`,
		short: `Рус`,
		image: '/images/flag-ru.svg',
		lang: 'ru'
	},
	{
		title: `English`,
		short: `Eng`,
		image: '/images/flag-ru.svg',
		lang: 'en'
	},
]
// Composable
const route = useRoute()
const switchLocalePath = useSwitchLocalePath()
// Methods
const setLanguage = (language) => {
	selectedLang.value = language
	menu.value = false
}
onClickOutside(
	modalRef,
	(event) => {
		menu.value = false
	},
)
// Hooks
onMounted(() => {
	selectedLang.value = languages.find(language => language.lang === route.fullPath.slice(1, 3))
})
</script>

<template>
	<div class="app-language cursor-pointer relative">
		<div v-if="selectedLang" class="flex items-center gap-2 w-[90px]" @click.stop="menu = !menu">
			<div class="w-5 h-5">
				<img :src="selectedLang.image" alt="flags" />
			</div>

			<span class="text-light-2">{{ selectedLang.short }}</span>

			<i class="text-light-2" :class="menu ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"></i>
		</div>

		<Transition>
			<div
				ref="modalRef"
				v-if="menu"
				class="absolute shadow-xl p-1 rounded-lg w-[125px] top-[35px] left-[50%] translate-x-[-50%] bg-white border"
			>
				<template v-for="(language, index) in languages">
					<nuxt-link
						:to="switchLocalePath(language.lang)"
						:class="languages.length !== index + 1 ? 'mb-1' : ''"
						class="flex items-center gap-2 p-1 transition-all rounded hover:bg-light-5"
						@click="setLanguage(language)"
					>
						<div class="w-5 h-5">
							<img :src="language.image" alt="flags" />
						</div>

						<span class="text-light-2 text-sm">{{ language.title }}</span>
					</nuxt-link>
				</template>
			</div>
		</Transition>
	</div>
</template>

<style>

</style>
