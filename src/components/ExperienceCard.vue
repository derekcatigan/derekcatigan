<script setup>
defineProps({
  title: String,
  description: String,
  badge: String,
});
</script>

<template>
  <div class="w-full mx-1 p-3 shadow rounded border border-gray-200">
    <div class="flex justify-between items-center gap-4">
      <h3 class="text-md font-semibold">{{ title }}</h3>
      <p class="text-xs text-nowrap badge badge-ghost border border-gray-200">
        {{ badge }}
      </p>
    </div>

    <p v-if="description" class="mt-2 text-xs whitespace-pre-line">
      {{ description }}
    </p>

    <ul v-else class="mt-2 list-disc ml-5">
      <slot />
    </ul>
  </div>
</template>
