<script setup>
import dayjs from 'dayjs';
import { overSlide } from '@/store/overSlide.store'

const store = overSlide()

</script>
<template>
	<div class='border-border bg-black/20 rounded p-3'>
		<div class='uppercase bold text-xl mb-4'>О сделке</div>
		<KanbanSliderOverLabel label-text='Наименование'>
			<h2>{{ store.card.name }}</h2>
		</KanbanSliderOverLabel>
		<KanbanSliderOverLabel label-text='Сумма'>
			<h2>{{ store.card.price || 0 }} ₽</h2>
		</KanbanSliderOverLabel>
		<KanbanSliderOverLabel label-text='Статус'>
			<UiBadge>
				<h2>{{ store.card.status }}</h2>
			</UiBadge>
		</KanbanSliderOverLabel>
		<KanbanSliderOverLabel label-text='Клиент'>
			<h2>{{ store.card.companyName }}</h2>
		</KanbanSliderOverLabel>
		<KanbanSliderOverLabel label-text='Дата создания'>
			<h2>{{ dayjs(store.card.$cratedAt).format('DD MMMM YYYY') }}</h2>
		</KanbanSliderOverLabel>
	</div>
</template>
<style scoped></style>