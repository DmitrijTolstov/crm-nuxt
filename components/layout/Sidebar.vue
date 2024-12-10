<script setup>

import { useAuthStore, isLoading } from '@/store/auth.store'
import { account } from '@/utils/appwrite';


const loading = isLoading()
const authStore = useAuthStore()
const router = useRouter()


const logout = async () => {
	loading.set(true)
	await account.deleteSession('current')
	authStore.clear()
	await router.push('/login')
	loading.set(false)
}


</script>
<template>
	<aside class='px-5 py-8 bg-sidebar h-full relative w-full'>
		<nuxt-link to="/">
			<NuxtImg src='/logo.svg' class='mx-auto' width='100' />
		</nuxt-link>
		<button class='absolute top-2 right-3 transition-colors hover:text-primary'>
			<Icon size='22' name='line-md:logout' @click='logout' />
		</button>
		<LayoutMenu class='mt-6' />
	</aside>
</template>
<style scoped></style>