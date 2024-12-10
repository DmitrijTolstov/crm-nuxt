<script lang='ts' setup>
import { MENU_DATA } from './menu.data';

</script>
<template>
	<div>
		<nuxt-link v-for='{ name, icon, url } in MENU_DATA' :key='name' :to='url' class='flex items-center py-1 px-3 rounded-lg w-full
		hover:bg-gray-700 hover:shadow transition-all ms-2.5'>
			<Icon :name='icon' class='mr-3'>
			</Icon>
			<span>{{ name }}</span>
		</nuxt-link>

	</div>
</template>
<style scoped></style>