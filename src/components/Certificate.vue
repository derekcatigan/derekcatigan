<script setup>
import Card from './Card.vue';
import { NewspaperIcon } from '@heroicons/vue/24/outline';
</script>
<template>
  <Card title="Certificates & Achievements" :icon="NewspaperIcon">
    <div class="w-full border border-gray-200 shadow rounded p-2 mt-2">
      <div class="flex flex-col">
        <h4 class="text-md font-bold">
          Participant, Eastern Visayas – Regional Pitching Competition
          Philippine Startup Challenge 8
        </h4>
        <small>October 2023</small>
        <small>
          Collaborated with a team to design and pitch a web-based platform
          aimed at connecting new homeowners with skilled blue-collar workers.
          The project focused on improving livelihood opportunities and making
          home service hiring easier, safer, and more accessible for
          communities.
        </small>
      </div>
    </div>
  </Card>
</template>
