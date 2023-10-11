<script setup lang="ts">
const route = useRoute()

onMounted(() => {
	if(route && (route.fullPath === "/uz" || route.fullPath === "/ru" || route.fullPath === "/en")) {
		navigateTo("/uz/physical-persons/home")
	}
})
</script>

<template>
	<NuxtPage />
</template>
