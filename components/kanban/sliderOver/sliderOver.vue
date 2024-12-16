<script lang='ts' setup>

import { overSlide } from '@/store/overSlide.store';

const store = overSlide()


const localIsOpen = computed(({
	get: () => store.isOpen,
	set: value => store.isOpen = value
}))

</script>
<template>
	<div>

		<USlideover :ui='{ overlay: { background: "bg-overlay" } }' v-model='localIsOpen' class=''>

			<UCard :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-border ' }"
				class='flex flex-col flex-1 overflow-y-auto bg-background rounded-none'>

				<template #header>
					<KanbanSliderOverTop />
				</template>
				<KanbanSliderOverComments />

			</UCard>
		</USlideover>

	</div>
</template>
<style scoped></style>