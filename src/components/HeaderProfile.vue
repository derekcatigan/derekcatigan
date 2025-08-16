<script setup>
import { ref, watch, onMounted } from 'vue';
import ProfilePic from '../assets/images/Profile.jpg';
import {
  MapPinIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  DocumentTextIcon,
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
  <div class="flex flex-col md:flex-row justify-between gap-3">
    <!-- Left Section -->
    <div class="flex flex-col sm:flex-row gap-3 w-full">
      <!-- Avatar -->
      <div class="avatar-container flex-shrink-0">
        <img :src="ProfilePic" alt="Profile" class="shadow" />
      </div>

      <!-- Profile Info -->
      <div class="profile-container min-w-0 flex-1">
        <h1 class="text-3xl font-bold truncate">
          Derek Joshua Terante Catigan
        </h1>
        <p class="flex items-center gap-1 flex-wrap">
          <span><BriefcaseIcon class="size-3.5" /></span>
          Software Developer
        </p>
        <p class="flex items-center gap-1 flex-wrap">
          <span><MapPinIcon class="size-3.5" /></span>
          Sogod, Southern Leyte, Philippines
        </p>

        <div
          class="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4"
        >
          <button class="btn btn-sm w-auto">
            <span><EnvelopeIcon class="size-3.5" /></span>
            Send email
          </button>
          <button class="btn btn-sm resume-btn w-auto">
            <span><DocumentTextIcon class="size-3.5" /></span>
            Resume
          </button>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div>
      <!-- Toggle Theme -->
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
  </div>
</template>

<style scoped>
html[data-theme='light'] .resume-btn {
  background-color: black;
  color: white;
}
html[data-theme='dark'] .resume-btn {
  background-color: white;
  color: black;
}
.avatar-container {
  flex-shrink: 0;
}
.avatar-container img {
  width: 180px;
  height: auto;
  object-fit: cover;

  border-radius: 5px;
}

@media (max-width: 1030px) {
  .avatar-container img {
    width: 120px;
  }
  .profile-container h1 {
    font-size: medium;
  }
}
</style>
