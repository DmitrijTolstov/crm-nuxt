<script lang='ts' setup>

import { useMutation, useQuery } from '@tanstack/vue-query';
import { COLLECTION_CUSTOMERS, DB_ID } from '~/app.constants';
import type { ICustomer } from '~/types/deals.types';


interface ICustomerFormState extends Pick<ICustomer, 'email' | 'avatar_url' | 'name' | 'from_source'> { }

useSeoMeta({
	title: 'Редактирование компании'
})


const route = useRoute()

const customerId = route.params.id as string

const { handleSubmit, defineField, setFieldValue, setValues, values } = useForm<ICustomerFormState>()

const { data, isSuccess } = useQuery({
	queryKey: ['get customer', customerId],
	queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId)
})

watch(isSuccess, () => {
	const initalData = data.value as unknown as ICustomerFormState

	setValues({
		email: initalData.email,
		name: initalData.name,
		avatar_url: initalData.avatar_url,
		from_source: initalData.from_source || ''
	})
})


const [name] = defineField('name')
const [email] = defineField('email')
const [fromSource] = defineField('from_source')


const { mutate, isPending } = useMutation({
	mutationKey: ['update customer', customerId],
	mutationFn: (data: ICustomerFormState) => DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data)
})


const submit = handleSubmit(value => {
	mutate(value)
})

const title = data?.value?.name as unknown as ICustomerFormState['name']

</script>
<template>

	<div class='p-10'>
		<h1 class='font-bold text-2xl mb-10'>
			Редактирование: {{ title }}
		</h1>

		<form @submit='submit' class='form'>
			<UiInput placeholder='Наименование' v-model='name' type='text' class='input'></UiInput>
			<UiInput placeholder='Email' v-model='email' type='text' class='input'>
			</UiInput>
			<UiInput placeholder='Откуда пришел?' v-model='fromSource' type='text' class='input'>
			</UiInput>

			<UiButton :disabled='isPending' class='mt-3' variant='secondary'>
				{{ isPending ? 'Загрузка...' : 'Сохранить' }}
			</UiButton>
		</form>
	</div>
</template>
<style scoped>
.input {
	@apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}
</style>