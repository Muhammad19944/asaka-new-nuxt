<script setup lang="ts">
</script>

<template>
	<div class="default-layout-view">
		<div id="layout-header" class="layout-header">
			<the-header />

			<app-navigation />
		</div>

		<slot />

		<the-footer />
	</div>
</template>

<style scoped>

</style>
