<script setup>


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