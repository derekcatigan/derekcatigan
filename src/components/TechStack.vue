<!-- src\components\TechStack.vue -->
<script setup>
import Card from './Card.vue';
import { ServerStackIcon } from '@heroicons/vue/24/outline';
</script>
<template>
  <Card :icon="ServerStackIcon" title="Tech Stack">
    <!-- Frontend -->
    <div class="w-full mb-3">
      <h3 class="text-md font-semibold">Front-End & Libraries</h3>
      <ul class="flex flex-wrap items-center gap-1">
        <li>
          <p class="badge badge-ghost border border-gray-200">HTML5</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">CSS</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">Javascript</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">VueJs</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">jQuery</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">TailwindCss</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">Bootstrap</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">DaisyUI</p>
        </li>
      </ul>
    </div>
    <!-- Backend -->
    <div class="w-full mb-3">
      <h3 class="text-md font-semibold">Back-End</h3>
      <ul class="flex flex-wrap items-center gap-1">
        <li>
          <p class="badge badge-ghost border border-gray-200">PHP</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">C#</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">Laravel</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">NodeJS</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">MySQL</p>
        </li>
      </ul>
    </div>
    <!-- Tools & Environtment -->
    <div class="w-full mb-3">
      <h3 class="text-md font-semibold">Tools & Environment</h3>
      <ul class="flex flex-wrap items-center gap-1">
        <li>
          <p class="badge badge-ghost border border-gray-200">VSCode</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">Xampp</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">
            MySQL Workbench
          </p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">Figma</p>
        </li>
        <li>
          <p class="badge badge-ghost border border-gray-200">Composer</p>
        </li>
      </ul>
    </div>
  </Card>
</template>
