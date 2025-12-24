<script setup>
const Techs = {
  frontendTechs: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "Vite",
    "JQuery",
    "React",
    "Vue.js",
    "Inertia",
    "DaisyUI",
    "Bootstrap",
  ],
  backendTechs: [
    "PHP",
    "Laravel",
    "Javascript",
    "Node.js",
    "MySQL",
    "PostgreSQL",
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "MS Teams",
    "Figma",
    "MySQL Workbench",
    "Xampp",
  ],
};
</script>

<template>
  <CardSection title="TECH STACKS" icon="bx-layers">
    <div class="space-y-3">
      <span class="font-semibold">Frontend & Libraries:</span>
      <div class="flex flex-wrap items-center gap-3 mt-2">
        <span
          v-for="(tech, index) in Techs.frontendTechs"
          :key="index"
          class="badge badge-soft border border-gray-300 bg-white shadow">
          {{ tech }}
        </span>
      </div>
      <span class="font-semibold">Backend:</span>
      <div class="flex flex-wrap items-center gap-3 mt-2">
        <span
          v-for="(tech, index) in Techs.backendTechs"
          :key="index"
          class="badge badge-soft border border-gray-300 bg-white shadow">
          {{ tech }}
        </span>
      </div>
      <span class="font-semibold">Developer Tools:</span>
      <div class="flex flex-wrap items-center gap-3 mt-2">
        <span
          v-for="(tech, index) in Techs.tools"
          :key="index"
          class="badge badge-soft border border-gray-300 bg-white shadow">
          {{ tech }}
        </span>
      </div>
    </div>
  </CardSection>
</template>
