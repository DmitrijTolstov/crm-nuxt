<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(
    'rounded-lg border bg-card text-card-foreground animation border-transparent hover:border-[#4a1c5f]',
    props.class,
  )
    ">
    <slot />
  </div>
</template>

<style scoped>
@keyframes show {

  from {
    @apply border-[#a252c8];
    transform: scale(.6) translateY(-30px);
    opacity: .4;
  }

  80% {
    @apply border-[#a252c8];
  }

  to {

    @apply border-transparent;
    transform: scale(1) translateY(0);
    opacity: 1;

  }


}

.animation {
  transition: border-color .3s ease-in-out;
  animation: .3s linear show;
}
</style>
