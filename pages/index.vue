<script lang='ts' setup>
import type { ICard, IColumn } from '~/components/kanban/kanban.types';
import { useKanbanQuery } from '~/components/kanban/UseKanbanQuery';
import dayjs from 'dayjs'
import CreateDeal from '~/components/kanban/CreateDeal.vue';
import type { EnumStatus } from '~/types/deals.types';
import { useMutation } from '@tanstack/vue-query';
import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
import { gradientFunction } from '~/components/kanban/gradient';
import { overSlide } from '@/store/overSlide.store';

useSeoMeta({
	title: 'Home | CRM System'
})


const dragCardRef = ref<ICard | null>()
const sourceColumnRef = ref<IColumn | null>()

const { data, isLoading, refetch } = useKanbanQuery()


type TMutationVariables = {
	docId: string,
	status: EnumStatus
}


const { mutate } = useMutation({
	mutationKey: ['move card'],
	mutationFn: ({ docId, status }: TMutationVariables) => DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
		status
	}),
	onSuccess() {
		refetch()
	},
})

function handleCardStart(card: ICard, column: IColumn) {

	dragCardRef.value = card
	sourceColumnRef.value = column

}

function handleDrop(targetColumn: IColumn) {

	if (dragCardRef.value && sourceColumnRef.value) {
		mutate({ docId: dragCardRef.value.id, status: targetColumn.id })
	}
}

const store = overSlide()

</script>
<template>
	<div class="p-10">
		<h1 class='font-bold text-2xl mb-10'>CRM SYSTEM</h1>
		<div v-if='isLoading'>Loading...</div>
		<div v-else>
			<div class='grid grid-cols-5 gap-16'>
				<div v-for='(column, ind) in data' @dragover.prevent @drop='handleDrop(column)'>
					<div class='rounded bg-slate-700 py-1 px-5 mb-2 text-center text-nowrap'
						:style='{ backgroundColor: gradientFunction(ind, data?.length) }'>
						{{ column.name }}
					</div>
					<CreateDeal :refetch='refetch' :status='column.id' />
					<div>
						<UiCard draggable='true' @dragstart='handleCardStart(card, column)'
							v-for='card in column.items ' class='mb-3'>
							<UiCardHeader role='button' @click='store.set(card)'>

								<UiCardTitle>{{ card.name }}</UiCardTitle>

								<UiCardDescription role='button'>{{ card.price }} ₽</UiCardDescription>
							</UiCardHeader>

							<UiCardContent> Компания: {{ card.companyName }}</UiCardContent>
							<UiCardFooter> {{ dayjs(card.$cratedAt).format('DD MMMM YYYY') }}</UiCardFooter>
						</UiCard>
					</div>
				</div>
			</div>
			<KanbanSliderOver />

		</div>
	</div>

</template>
<style scoped></style>