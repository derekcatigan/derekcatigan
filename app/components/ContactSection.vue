<script setup>
import Facebook from "~/assets/icons/facebookIcon.png";
import LinkedIn from "~/assets/icons/linkedinIcon.png";
import Instagram from "~/assets/icons/instagramIcon.png";
import Github from "~/assets/icons/githubIcon.png";
import Gmail from "~/assets/icons/gmailIcon.png";
</script>
<template>
  <CardSection title="CONTACT" icon="bx-envelope">
    <p class="text-sm text-gray-600 mb-3">
      Feel free to reach out or connect with me through any of the platforms
      below.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/derek-joshua-catigan-703b25364/"
        target="_blank"
        class="flex items-center justify-between p-3 border border-gray-300 rounded-sm shadow hover:shadow-md transition">
        <div class="flex items-center gap-3">
          <img
            :src="LinkedIn"
            alt="LinkedIn Icon"
            class="w-10 h-auto object-cover" />
          <div>
            <p class="font-semibold text-sm">LinkedIn</p>
            <p class="text-xs text-gray-500">Professional Profile</p>
          </div>
        </div>
        <i class="bx bx-chevron-right text-xl text-gray-400"></i>
      </a>

      <!-- GitHub -->
      <a
        href="https://github.com/derekcatigan"
        target="_blank"
        class="flex items-center justify-between p-3 border border-gray-300 rounded-sm shadow hover:shadow-md transition">
        <div class="flex items-center gap-3">
          <img
            :src="Github"
            alt="GitHub Icon"
            class="w-10 h-auto object-cover" />
          <div>
            <p class="font-semibold text-sm">GitHub</p>
            <p class="text-xs text-gray-500">Code & Projects</p>
          </div>
        </div>
        <i class="bx bx-chevron-right text-xl text-gray-400"></i>
      </a>

      <!-- Instagram -->
      <a
        href="https://www.instagram.com/oshowacatigan/"
        target="_blank"
        class="flex items-center justify-between p-3 border border-gray-300 rounded-sm shadow hover:shadow-md transition">
        <div class="flex items-center gap-3">
          <img
            :src="Instagram"
            alt="Instagram Icon"
            class="w-10 h-auto object-cover" />
          <div>
            <p class="font-semibold text-sm">Instagram</p>
            <p class="text-xs text-gray-500">Personal Updates</p>
          </div>
        </div>
        <i class="bx bx-chevron-right text-xl text-gray-400"></i>
      </a>

      <!-- Facebook Page -->
      <a
        href="https://www.facebook.com/profile.php?id=61579774586115"
        target="_blank"
        class="flex items-center justify-between p-3 border border-gray-300 rounded-sm shadow hover:shadow-md transition">
        <div class="flex items-center gap-3">
          <img
            :src="Facebook"
            alt="Facebook Icon"
            class="w-10 h-auto object-cover" />
          <div>
            <p class="font-semibold text-sm">Facebook Page</p>
            <p class="text-xs text-gray-500">Business & Updates</p>
          </div>
        </div>
        <i class="bx bx-chevron-right text-xl text-gray-400"></i>
      </a>

      <!-- Gmail -->
      <a
        href="mailto:derekcatigan03@gmail.com"
        class="flex items-center justify-between p-3 border border-gray-300 rounded-sm shadow hover:shadow-md transition sm:col-span-2">
        <div class="flex items-center gap-3">
          <img :src="Gmail" alt="Gmail Icon" class="w-10 h-auto object-cover" />
          <div>
            <p class="font-semibold text-sm">Email</p>
            <p class="text-xs text-gray-500">derekcatigan03@gmail.com</p>
          </div>
        </div>
        <i class="bx bx-chevron-right text-xl text-gray-400"></i>
      </a>
    </div>
  </CardSection>
</template>
