<script setup>
const projects = [
  {
    title: "Pinoy Pride Worldwide LLC Panel",
    description:
      "A centralized web application for Pinoy Pride Worldwide LLC where admins and branch admins manage logistics operations, including boxes, orders, users, containers, and tracking workflows.",
    link: "",
    techs: ["Laravel", "Vue", "Inertia", "MySQL", "TailwindCSS", "DaisyUI"],
  },
  {
    title: "Pinoy Pride Worldwide LLC Website",
    description:
      "A corporate website for Pinoy Pride Worldwide LLC that provides customers with information about the company, its services, and contact details through a clean and user-friendly interface.",
    link: "",
    techs: ["Laravel", "Vue", "Inertia", "MySQL", "TailwindCSS", "DaisyUI"],
  },
  {
    title: "Automated First Aid Kit Dispenser",
    description:
      "An IoT-based automated first aid kit dispenser integrated with a web-based system to monitor inventory, track usage, and provide real-time analytics for health workers.",
    link: "",
    techs: ["Laravel", "JQuery", "MySQL", "Arduino", "REST API", "DaisyUI"],
  },
  {
    title: "Havilah Polymedic Online Appointment with Queueing System",
    description:
      "A web-based appointment and queueing system that allows patients to schedule consultations and manage queues efficiently.",
    link: "",
    techs: ["Laravel", "MySQL", "JQuery", "TailwindCSS", "DaisyUI"],
  },
];
</script>

<template>
  <CardSection title="PROJECTS" icon="bx-terminal">
    <div class="space-y-2 max-h-80 overflow-y-auto">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white border border-gray-300 p-3 rounded-sm shadow">
        <h3 class="text-sm font-bold">
          {{ project.title }}
        </h3>

        <p class="text-sm text-justify text-gray-700 mb-2">
          {{ project.description }}
        </p>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            v-for="tech in project.techs"
            :key="tech"
            class="badge badge-soft border border-gray-300 bg-white shadow">
            {{ tech }}
          </span>
        </div>

        <NuxtLink
          :to="project.link"
          class="inline-flex items-center text-sm text-blue-600">
          More Info
          <i class="bx bx-chevron-right text-lg"></i>
        </NuxtLink>
      </div>
    </div>
  </CardSection>
</template>
