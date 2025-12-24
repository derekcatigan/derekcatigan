<script setup>
defineProps({
  title: { type: String, required: true },
  link: { type: String, required: false },
  icon: { type: String, required: true },
});
</script>

<template>
  <div
    class="w-full h-full rounded-sm shadow border border-gray-300 bg-white p-3">
    <div class="flex justify-between items-center mb-3">
      <h2 class="inline-flex items-center gap-1 text-lg font-bold">
        <i :class="['bx', icon]"></i>
        {{ title }}
      </h2>

      <NuxtLink v-if="link" :to="link" class="flex items-center text-sm">
        More Info <i class="bx bx-chevron-right text-xl"></i>
      </NuxtLink>
    </div>

    <slot />
  </div>
</template>
