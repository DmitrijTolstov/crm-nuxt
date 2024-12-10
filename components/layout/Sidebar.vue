<script setup>

</script>
<template>
	<aside class='px-5 py-8 bg-sidebar h-full relative w-full'>
		<nuxt-link to="/">
			<NuxtImg src='/logo.svg' class='mx-auto' width='100' />
		</nuxt-link>
		<button class='absolute top-2 right-3 transition-colors hover:text-primary'>
			<Icon size='22' name='line-md:logout' />
		</button>
		<LayoutMenu class='mt-6' />
	</aside>
</template>
<style scoped></style>