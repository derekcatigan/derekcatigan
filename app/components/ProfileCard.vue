<script setup>
defineProps({
  avatar: { type: String, required: true },
});
</script>
<template>
  <div
    class="w-full h-full rounded-sm shadow border border-gray-300 bg-white p-3">
    <div class="w-full flex flex-wrap lg:flex-nowrap">
      <!-- Profile Image -->
      <img
        :src="avatar"
        alt="Derek Joshua Catigan Profile"
        class="w-32 h-auto lg:w-52 object-cover rounded shadow" />

      <!-- Profile Information -->
      <div class="w-full flex flex-col justify-between gap-3 p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
