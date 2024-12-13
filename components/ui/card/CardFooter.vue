<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('p-3 text-xs pt-0 opacity-70 italic', props.class)">
    <slot />
  </div>
</template>
