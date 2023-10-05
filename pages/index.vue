<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
	<form>
		<NuxtLink :to="switchLocalePath('uz')">Uzbek</NuxtLink>
		<NuxtLink :to="switchLocalePath('ru')">Russia</NuxtLink>
		<NuxtLink :to="switchLocalePath('en')">English</NuxtLink>

		<p>{{ $t('welcome') }}</p>
	</form>

	<h1>123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis debitis deserunt dignissimos distinctio dolore, excepturi incidunt laborum mollitia natus non odio perspiciatis praesentium quam quo reprehenderit repudiandae, totam vel.</h1>
</template>
