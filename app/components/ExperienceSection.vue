<script setup>
const experiences = [
  {
    title: "Junior Software Developer",
    company: "Pinoy Pride Worldwide LLC",
    duration: "Sept 2025 - Present",
    description:
      "Worked remotely as a Junior Software Developer, rebuilding and modernizing the company’s legacy website and internal systems. Improved usability, design, and scalability of the platform, which manages logistics for balikbayan boxes. Collaborated with the team to implement new features, optimize workflows, and ensure a clean, user-friendly interface for both staff and clients.",
  },
  {
    title: "Software Developer",
    company: "Freelancer",
    duration: "May 2025 - Present",
    description:
      "Worked with clients and students to design, develop, and maintain custom web systems tailored to specific business and academic requirements. Delivered user-friendly and scalable solutions using modern web development practices, focusing on clean code, maintainability, and performance. Collaborated closely with stakeholders to understand requirements, implement features, and provide technical guidance throughout the development process.",
  },
  {
    title: "Intern - Software Developer",
    company: "Business Machine Technologies Inc.",
    duration: "Jan 2025 - April 2025",
    description:
      "Contributed to the development of backend features for internal company systems used to manage marketing data, including customer invoices, product records, and operational information. Collaborated with the development team to implement and maintain system functionalities that support day-to-day business processes.",
  },
];
</script>

<template>
  <CardSection title="EXPERIENCE" icon="bx-briefcase-alt-2">
    <!-- Experience Cards -->
    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="p-3 border border-gray-300 rounded-sm shadow mb-1">
      <!-- Header -->
      <div class="flex flex-wrap justify-between items-center mb-3">
        <div class="min-w-50">
          <h3 class="font-bold text-lg">{{ experience.title }}</h3>
          <p class="italic text-sm">{{ experience.company }}</p>
        </div>

        <div class="min-w-50">
          <p class="text-sm font-medium italic">{{ experience.duration }}</p>
        </div>
      </div>

      <!-- Description -->
      <div class="leading-5 text-justify">
        <p>
          {{ experience.description }}
        </p>
      </div>
    </div>
  </CardSection>
</template>
