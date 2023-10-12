<script setup lang="ts">

</script>

<template>
	<div class="app-service-view">
		<ui-container>
			<div class="bg-primary-color-500 rounded-lg relative h-[568px] py-14 pl-20">
				<div class="max-w-[515px] flex flex-col h-full">
					<h1 class="font-extraBold text-[50px] leading-[1.3em] text-white">Все услуги Банка у Вас под рукой</h1>
					<p class="text-white text-sm mt-6">Новое мобильное приложение Asakabank!</p>
					<p class="text-white text-sm mt-1">Скачивайте, устанавливайте и наслаждайтесь комфортом!</p>

					<div class="flex gap-5 mt-auto">
						<img src="/images/qr-code.webp" alt="App qr code" />

						<div>
							<a href="https://apps.apple.com/uz/app/asakabank/id1574165416" class="block" target="_blank">
								<img src="/images/appstore.webp" alt="appstore" class="block mb-3" />
							</a>

							<a href="https://play.google.com/store/apps/details?id=uz.asakabank.myasaka" class="block" target="_blank">
								<img src="/images/google-play.webp" alt="google play" class="block" />
							</a>
						</div>
					</div>
				</div>

				<img src="/images/mobile-app.png" alt="mobile app" class="absolute bottom-0 right-0" />
			</div>
		</ui-container>
	</div>
</template>

<style scoped>

</style>
