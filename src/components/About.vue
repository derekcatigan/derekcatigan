<!-- src\components\About.vue -->
<script setup>
import Card from './Card.vue';
import { BriefcaseIcon } from '@heroicons/vue/24/outline';
</script>
<template>
  <Card :icon="BriefcaseIcon" title="About">
    <p class="text-justify">
      I'm a full-stack software developer developing solutions with PHP and the
      Laravel framework, specializing in building secure, scalable, and
      user-friendly web applications. I value clean and minimalist design
      principles, ensuring that every project is not only functional but also
      visually simple, intuitive, and easy to use.
    </p>
  </Card>
</template>
