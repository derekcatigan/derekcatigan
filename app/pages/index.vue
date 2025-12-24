<template>
  <div class="p-3">
    <!-- Divider Profile Information -->
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="divider">
      PROFILE INFORMATION
    </div>

    <!-- Header Section -->
    <section data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <HeaderSection />
    </section>

    <!-- Divider Experience -->
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="divider">
      EXPERIENCE
    </div>

    <!-- Experience Section -->
    <section data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <ExperienceSection />
    </section>

    <!-- Divider Projects & Tech Stacks -->
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="divider">
      PROJECTS & TECH STACKS
    </div>

    <!-- Projects & Tech Stacks Section -->
    <section data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div class="flex flex-wrap items-stretch gap-1">
        <div class="flex-1 min-w-50">
          <ProjectSection />
        </div>

        <div class="flex-1 min-w-50">
          <TechSection />
        </div>
      </div>
    </section>

    <!-- Divider Contact -->
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="divider">
      CONTACT
    </div>

    <section data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <ContactSection />
    </section>
  </div>
</template>
