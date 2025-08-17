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
const showResumeModal = ref(false);
const emailHref = ref('');

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value);

  if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    emailHref.value = 'mailto:derekcatigan03@gmail.com';
  } else {
    emailHref.value =
      'https://mail.google.com/mail/?view=cm&fs=1&to=derekcatigan03@gmail.com';
  }
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
          <a
            :href="emailHref"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-sm w-auto"
          >
            <span><EnvelopeIcon class="size-3.5" /></span>
            Send email
          </a>
          <button
            class="btn btn-sm resume-btn w-auto"
            @click="showResumeModal = true"
          >
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

  <!-- Resume Modal -->
  <div
    v-if="showResumeModal"
    class="fixed inset-0 flex items-center backdrop-blur-sm bg-black/20 justify-center z-50"
    @click.self="showResumeModal = false"
  >
    <div
      class="bg-white p-4 rounded-lg shadow-xl w-[90%] md:w-[70%] lg:w-[60%] h-[85%] relative"
    >
      <!-- Close Button -->
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        @click="showResumeModal = false"
      >
        ✕
      </button>

      <!-- PDF Preview -->
      <embed
        src="/Catigan_Derek_Joshua(Resume).pdf#toolbar=0&navpanes=0&scrollbar=0"
        type="application/pdf"
        class="w-full h-[90%]"
      />

      <!-- Download Button -->
      <div class="flex justify-end mt-2">
        <a
          href="/public/Catigan_Derek_Joshua(Resume).pdf"
          download="Derek_Joshua_Catigan_Resume.pdf"
          class="btn btn-sm bg-black text-white dark:bg-white dark:text-black"
        >
          Download
        </a>
      </div>
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
