<script lang='ts' setup>
import { useMutation } from '@tanstack/vue-query';
import { v4 as uuid } from 'uuid'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
import type { IDeals } from '~/types/deals.types';


const isOpenForm = ref(false)

interface IDealFormState extends Pick<IDeals, 'name' | 'price'> {
	customers: {
		email: string,
		name: string
	},
	status: String,
}

const props = defineProps({
	status: {
		type: String,
		default: ''
	},
	refetch: {
		type: Function
	}
})

const { handleSubmit, defineField, handleReset } = useForm<IDealFormState>({
	initialValues: {
		status: props.status
	}
})

const [name] = defineField('name')
const [price] = defineField('price')
const [customerEmail] = defineField('customers.email')
const [customerName] = defineField('customers.name')


const { mutate, isPending } = useMutation({
	mutationKey: ['create a new deal'],
	mutationFn: (data: IDealFormState) => DB.createDocument(DB_ID, COLLECTION_DEALS, uuid(), data),
	onSuccess(data) {
		console.log(data, 'data');

		props.refetch && props.refetch()
		handleReset()
	},
})


const onSubmit = handleSubmit(values => {
	mutate(values)
})

</script>

<template>
	<div class='text-center mb-2'>
		<button class='transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]'
			@click='isOpenForm = !isOpenForm'>
			<Icon name='ep:top' size='25' class='fade-in-100 fade-out-0' v-if='isOpenForm' />

			<Icon name='ep:circle-plus' size='25' class='fade-in-100 fade-out-0' v-else />


		</button>
	</div>

	<form v-if='isOpenForm' @submit='onSubmit' class='form'>
		<UiInput placeholder='Наименование' v-model='name' type='text' class='input'></UiInput>
		<UiInput placeholder='Сумма' v-model='price' type='text' class='input'></UiInput>
		<UiInput placeholder='Email' v-model='customerEmail' type='text' class='input'>
		</UiInput>
		<UiInput placeholder='Компания' v-model='customerName' type='text' class='input'>
		</UiInput>

		<button class='btn' :disabled='isPending'>
			{{ isPending ? 'Загрузка...' : 'Добавить' }}
		</button>
	</form>
</template>
<style scoped>
.input {
	@apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}

.btn {
	@apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white;
}

.form {
	@apply mb-3 block;
	animation: show .3s ease-in-out;
}


@keyframes show {
	from {
		@apply border-[#a252c83d];
		transform: translateY(-20px);
		opacity: .4;
	}

	90% {
		@apply border-[#a252c83d]
	}

	to {
		@apply border-transparent;
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
