<script setup>
import Card from './Card.vue';
import { BriefcaseIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <Card :icon="BriefcaseIcon" title="Experience">
    <!-- Graduated -->
    <div class="w-full border border-gray-200 shadow rounded p-2 mt-2">
      <div class="flex flex-col">
        <h4 class="text-md font-bold">
          Bachelor of Science in Information Technology Major in Programming
        </h4>
        <small>Aug 2021 - Jun 2025</small>
        <small
          >Graduated with a Bachelor’s degree in Information Technology</small
        >
      </div>
    </div>
    <!-- Software Developer Intern -->
    <div class="w-full border border-gray-200 shadow rounded p-2 mt-2">
      <div class="flex flex-col">
        <h4 class="text-md font-bold">Software Developer - Intern</h4>
        <small>Jan 2025 - Apr 2025</small>
        <small>Business Machine Technologies Inc.</small>
      </div>
    </div>
  </Card>
</template>
