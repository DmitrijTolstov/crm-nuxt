<script lang='ts' setup>
import type { ICard, IColumn } from '~/components/kanban/kanban.types';
import { useKanbanQuery } from '~/components/kanban/UseKanbanQuery';
import dayjs from 'dayjs'
import CreateDeal from '~/components/kanban/CreateDeal.vue';

useSeoMeta({
	title: 'Home | CRM System'
})


const dragCardRef = ref<ICard | null>
const dsourceColumnRef = ref<IColumn | null>

const { data, isLoading, refetch } = useKanbanQuery()
</script>
<template>
	<div class="p-10">
		<h1 class='font-bold text-2xl mb-10'>CRM SYSTEM</h1>
		<div v-if='isLoading'>Loading...</div>
		<div v-else>
			<div class='grid grid-cols-5 gap-16'>
				<div v-for='(column) in data'>
					<div class='rounded bg-slate-700 py-1 px-5 mb-2 text-center text-nowrap'>
						{{ column.name }}
					</div>
					<CreateDeal :refetch='refetch' :status='column.id' />
					<div>
						<UiCard v-for='card in column.items ' class='mb-3' draggable='true'>
							<UiCardHeader role='button'>
								<UiCardTitle>{{ card.name }}</UiCardTitle>

								<UiCardDescription role='button'>{{ card.price }} ₽</UiCardDescription>
							</UiCardHeader>

							<UiCardContent> Компания: {{ card.companyName }}</UiCardContent>
							<UiCardFooter> {{ dayjs(card.$cratedAt).format('DD MMMM YYYY') }}</UiCardFooter>
						</UiCard>
					</div>
				</div>
			</div>

		</div>
	</div>

</template>
<style scoped></style>