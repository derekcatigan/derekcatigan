<script setup>
import AvatarImg from "~/assets/img/CatiganProfile.jpg";
</script>
<template>
  <div class="flex flex-wrap items-stretch gap-1">
    <!-- Profile Section -->
    <div class="flex-1 min-w-50">
      <ProfileCard :avatar="AvatarImg">
        <div>
          <h1 class="text-3xl font-bold">
            DEREK JOSHUA <span class="text-blue-500">CATIGAN</span>
          </h1>
          <p class="flex items-center gap-1 text-gray-500 font-medium">
            <i class="bx bx-location-pin"></i>
            Sogod, Southern Leyte, Philppines
          </p>
          <p class="flex items-center gap-1 text-gray-500 font-medium">
            <i class="bx bx-laptop"></i>
            Software Developer
          </p>
          <div class="rating rating-xs">
            <div
              class="mask mask-star-2 bg-orange-400"
              aria-label="1 star"></div>
            <div
              class="mask mask-star-2 bg-orange-400"
              aria-label="2 star"></div>
            <div
              class="mask mask-star-2 bg-orange-400"
              aria-label="3 star"></div>
            <div
              class="mask mask-star-2 bg-orange-400"
              aria-label="4 star"></div>
            <div
              class="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
              aria-current="true"></div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-1">
          <a href="mailto:derekcatigan03@gmail.com" class="btn btn-sm">
            <i class="bx bx-envelope text-xl"></i>
            Send Email
          </a>
          <a
            href="/documents/Resume(Catigan).pdf"
            target="_blank"
            class="flex-1 btn btn-sm btn-neutral">
            <i class="bx bx-form text-xl"></i>
            Resume
          </a>
        </div>
      </ProfileCard>
    </div>

    <!-- About Section -->
    <div class="flex-1 min-w-50">
      <CardSection title="ABOUT" icon="bx-briefcase-alt-2" link="/about">
        <!-- Description -->
        <div class="leading-relaxed text-justify">
          <p>
            I am a Software Developer and a graduate of Southern Leyte State
            University with a Bachelor of Science in Information Technology,
            majoring in Programming. I am most comfortable working with PHP,
            Laravel, Inertia, and Vue, and I specialize in building clean,
            minimalist, and user-friendly interfaces backed by scalable and
            maintainable systems.
          </p>
        </div>
      </CardSection>
    </div>
  </div>
</template>
