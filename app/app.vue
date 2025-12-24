<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
    easing: "ease-out-cubic",
  });
});
</script>
<template>
  <main class="max-w-7xl mx-auto min-h-screen">
    <NuxtPage />
  </main>
  <AppFooter />
</template>
