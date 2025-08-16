<script setup>
import { ref, watch, onMounted } from 'vue';
import Profile from '../src/assets/Profile.jpg';
import ExperienceCard from '../src/components/ExperienceCard.vue';
import {
  MapPinIcon,
  BriefcaseIcon,
  ServerStackIcon,
} from '@heroicons/vue/24/outline';

const theme = ref(localStorage.getItem('theme') || 'light');

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value);
});

watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
</script>

<template>
  <main class="h-screen mx-30">
    <header class="w-full p-5 flex justify-between">
      <div class="flex gap-4">
        <!-- Profile Avatar -->
        <div>
          <img
            :src="Profile"
            alt="Derek Joshua Profile"
            class="w-[150px] rounded-2xl shadow"
          />
        </div>

        <!-- Profile Information: Fullname, Address, Email, Phone Number, Profile Links -->
        <div>
          <div class="mb-7">
            <h3 class="font-semibold text-2xl">Derek Joshua Terante Catigan</h3>
            <p class="flex items-center gap-1.5">
              <span><BriefcaseIcon class="size-3.5" /></span>Software Developer
            </p>
            <p class="text-sm flex items-center gap-1.5">
              <span><MapPinIcon class="size-3.5" /></span>Sogod, Southern Leyte,
              Philippines
            </p>
          </div>

          <div class="flex items-center gap-2">
            <button class="btn btn-sm">Send email</button>
            <button class="btn btn-sm resume-btn">Resume</button>
          </div>
        </div>
      </div>

      <div>
        <label class="toggle text-base-content">
          <input
            type="checkbox"
            value="dark"
            class="theme-controller"
            @change="theme = theme === 'light' ? 'dark' : 'light'"
            :checked="theme === 'dark'"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </header>
    <section class="aboutSection mt-5 mb-1">
      <!-- About Card -->
      <div class="card w-full border border-gray-200 card-sm shadow-sm">
        <div class="card-body">
          <h2 class="card-title">
            <span><BriefcaseIcon class="size-3.5" /></span>About
          </h2>
          <p>
            I'm a full-stack software developer developing solutions with PHP
            and the Laravel framework, specializing in building secure,
            scalable, and user-friendly web applications. I am currently engaged
            in freelance projects, creating tailored solutions for clients to
            meet their unique business needs. I value clean and minimalist
            design principles, ensuring that every project is not only
            functional but also visually simple, intuitive, and easy to use.
          </p>
        </div>
      </div>
    </section>

    <section class="techSection">
      <!-- Tech Stack Card -->
      <div class="card w-full border border-gray-200 card-sm shadow-sm p-2">
        <div class="card-body">
          <h2 class="card-title">
            <span><ServerStackIcon class="size-3.5" /></span>Tech Stack
          </h2>
          <div>
            <!-- Frontend Stack -->
            <div class="flex justify-center-center flex-col mb-2">
              <h2 class="text-md font-bold">Front-end</h2>
              <div class="flex flex-wrap items-center gap-1.5">
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  HTML5
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  CSS
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  Javascript
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  jQuery
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  Vuejs
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  TailwindCss
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  Bootstrap
                </div>
              </div>
            </div>
            <!-- Backend Stack -->
            <div class="flex justify-center-center flex-col mb-2">
              <h2 class="text-md font-bold">Back-end</h2>
              <div class="flex flex-wrap items-center gap-1.5">
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  PHP
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  C#
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  NodeJs
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  Laravel
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  MySQL
                </div>
              </div>
            </div>
            <!-- Tools & Environment Stack -->
            <div class="flex justify-center-center flex-col">
              <h2 class="text-md font-bold">Tools & Environment</h2>
              <div class="flex flex-wrap items-center gap-1.5">
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  Xampp
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  MySQL Workbench
                </div>
                <div class="badge badge-ghost badge-sm border border-gray-400">
                  Composer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Card -->
      <div class="card w-full border border-gray-200 card-sm shadow-sm">
        <div class="card-body">
          <h2 class="card-title">
            <span><BriefcaseIcon class="size-3.5" /></span> Experience
          </h2>
          <ExperienceCard
            title="Bachelor of Science in Information Technology Major in Programming"
            badge="June 2025"
            description="Graduated from Southern Leyte State University - Main Campus"
          />
          <ExperienceCard
            title="Software Developer - Intern"
            badge="Jan 2025 - Apr 2025"
          >
            <li>
              Developed a web-based application to streamline customer
              transaction management using PHP and Laravel
            </li>
            <li>
              Implemented secure user authentication, complete CRUD operations,
              and dynamic report generation features
            </li>
            <li>
              Utilized MySQL for backend data storage and jQuery for client-side
              interactivity
            </li>
          </ExperienceCard>

          <ExperienceCard title="Capstone Lead Programmer" badge="Academic">
            <h2 class="text-sm font-semibold">
              Web-Based Information Management System for MSWD with GIS
              Integration
            </h2>
            <li>
              Led the development of an information system tailored for local
              social welfare offices, integrating Laravel and Leaflet.js for
              real-time geospatial data visualization
            </li>
            <li>
              Designed and implemented a role-based access control system, an
              interactive analytics dashboard, and map-based views for service
              monitoring and planning
            </li>
            <li>
              Prioritized data security, user-friendly interfaces, and
              performance optimization in a collaborative academic environment.
            </li>
          </ExperienceCard>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Custom Style resume-btn */
html[data-theme='light'] .resume-btn {
  background-color: black;
  color: white;
}

html[data-theme='dark'] .resume-btn {
  background-color: white;
  color: black;
}

.techSection {
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
}

.techSection > div {
  flex: 1;
}

.aboutSection {
  display: block;
}
.aboutSection > div {
  flex: none;
  width: 100%;
}

@media (max-width: 1030px) {
  main {
    width: 100%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .techSection {
    flex-direction: column;
  }
}
</style>
