<script lang='ts' setup>

import { useComments } from './useComments';
import { useCommentCreate } from './useCommentCreate';
import type { IDeals } from '~/types/deals.types';
import dayjs from 'dayjs';

const { data, refetch, isLoading } = useComments()

const { commentRef, writeComment } = useCommentCreate({ refetch })

const card = data as unknown as IDeals


</script>
<template>
	<UiInput placeholder='Оставьте комментарий' v-model='commentRef' @keyup.enter='writeComment'></UiInput>

	<UiSkeleton v-if="isLoading" class='w-full h-[75px] rounded mt-5' />
	<div v-if="card">
		<div v-for='comment in card.comments' :key='comment.$id' class='flex items-start mt-5'>
			<Icon name='radix-icons:chat-bubble' class='mr-3 mt-1' size=20 />
			<div class='border-border bg-black/20 rounded p-3 w-full'>
				<div class='mb-2 text-sm'>
					комментарий: {{ dayjs(comment.$createdAt).format('HH:mm') }}
				</div>
				{{ comment.text }}
			</div>
		</div>
	</div>
</template>
<style scoped></style>