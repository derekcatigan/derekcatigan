<!-- src\App.vue -->
<script setup>
import HeaderProfile from './components/HeaderProfile.vue';
import About from './components/About.vue';
import TechStack from './components/TechStack.vue';
import Experience from './components/Experience.vue';
import Certificate from './components/Certificate.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main class="min-h-screen mx-auto px-4">
    <header class="p-3">
      <HeaderProfile />
    </header>

    <section class="mt-5">
      <div class="flex flex-col lg:flex-row gap-1">
        <div class="flex-1">
          <!-- About -->
          <About />
        </div>
        <div class="flex-1">
          <!-- Tech Stack -->
          <TechStack />
        </div>
      </div>

      <div class="mt-2">
        <!-- Experience -->
        <Experience />
      </div>

      <div class="flex flex-col lg:flex-row gap-1 mt-2">
        <div class="flex-1">
          <!-- Certificates -->
          <Certificate />
        </div>
        <div class="flex-1">
          <!-- Projects -->
          <Projects />
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<style scoped>
section {
  width: 100%;
}
@media (max-width: 1030px) {
  main {
    width: 100%;
    margin: 0;
  }
}
</style>
