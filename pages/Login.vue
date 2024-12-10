<script setup>

import { v4 as uuid } from 'uuid'

useHead({
	title: "Login"
})

const email = ref('')
const password = ref('')
const name = ref('')


const isLoadingStore = isLoading()
const authStore = useAuthStore()
const router = useRouter()


const login = async () => {
	isLoadingStore.set(true)
	await account.createEmailPasswordSession(email.value, password.value)
	const response = await account.get()

	if (response) {
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status
		})
	}

	email.value = '',
		password.value = '',
		name.value = ''

	await router.push('/')

	isLoadingStore.set(false)
}

const register = async () => {
	await account.create(uuid(), email.value, password.value, name.value)

	await login()
}


</script>
<template>
	<div class='flex items-center justify-center min-h-screen w-full'>
		<div class='rounded bg-sidebar w-1/4 p-5'>
			<h1 class='text-2xl font-bold text-center mb-5'>Login</h1>
			<form>
				<UiInput v-model='email' placeholder='email' type='email' class='mb-3' />
				<UiInput v-model='password' placeholder='password' type='password' class='mb-3' />
				<UiInput v-model='name' placeholder='name' type='text' class='mb-3' />
			</form>
			<div class="flex items-center justify-center gap-5">
				<UiButton type='button' @click='login'> Login</UiButton>
				<UiButton type='button' @click='register'> Register</UiButton>
			</div>
		</div>

	</div>
</template>
<style scoped></style>