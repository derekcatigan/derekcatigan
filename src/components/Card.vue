<!-- src\components\Card.vue -->
<script setup>
defineProps({
  title: String,
  icon: {
    type: [Object, Function],
    default: null,
  },
  badge: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <div class="box-container shadow">
    <div class="box-body">
      <div class="box-title">
        <div class="flex items-center gap-2">
          <span v-if="icon">
            <component :is="icon" class="icon-component" />
          </span>
          <h1>{{ title }}</h1>
        </div>
        <span>
          <p v-if="badge" class="badge badge-ghost">
            {{ badge }}
          </p>
        </span>
      </div>
      <div class="text-sm mt-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-container {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(170, 170, 170);
  border-radius: 5px;
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.box-body {
  width: 100%;
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.box-title {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
}
.icon-component {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
}
.box-title h1 {
  font-size: 1rem;
  font-weight: 600;
}
</style>
