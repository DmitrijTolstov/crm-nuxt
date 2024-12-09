<script setup>
</script>
<template>
	<section class="grid">
		<LayoutSidebar />
		<slot />
	</section>
</template>
<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 5fr;
	min-height: 100vh;
}
</style>