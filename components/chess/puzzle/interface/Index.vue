<template>
  <div class="flex flex-row gap-4">
    <ChessPuzzleInterfaceCard>
      <span>Puzzle details go here</span>
    </ChessPuzzleInterfaceCard>
    <ChessPuzzleBoard :puzzle="puzzle" @solved="emit('solved')" />
    <ChessPuzzleInterfaceCard>
      <span>Current puzzle cycle details go here (e.g. with progress)</span>
      <UProgress :value="55" />
    </ChessPuzzleInterfaceCard>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  puzzle: Puzzle;
}>();

const emit = defineEmits<{
  (e: "solved"): void;
}>();
</script>
