<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="max-w-7xl mx-auto">
    <div
      class="py-3 border-y border-gray-300 flex justify-center items-center gap-1">
      <i class="bx bx-copyright"></i>
      <h3>{{ currentYear }} Derek Catigan. All rights reserved.</h3>
    </div>
  </footer>
</template>
