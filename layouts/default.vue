<script setup>
import { account } from '@/utils/appwrite';
import { useAuthStore, isLoading } from '@/store/auth.store';

const loading = isLoading()
const authStore = useAuthStore()
const router = useRouter()

onMounted(async () => {
	try {
		const user = await account.get()

		if (user) {
			console.log(user);
			authStore.set(user)
		}

	} catch (err) {
		router.push('/login')
	} finally {
		loading.set(false)
	}
})

</script>
<template>
	<LayoutLoader v-if="loading.loading" />
	<section v-else :class="{ 'grid': authStore.isAuth }">
		<LayoutSidebar v-if='authStore.isAuth' />
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