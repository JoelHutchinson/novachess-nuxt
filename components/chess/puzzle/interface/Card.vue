<template>
  <UCard
    :ui="{
      base: 'w-80 shadow-lg dark:shadow-gray-600',
      body: { base: 'h-full w-full' },
      rounded: 'rounded-none',
    }"
  >
    <slot />
  </UCard>
</template>

<script setup lang="ts"></script>
