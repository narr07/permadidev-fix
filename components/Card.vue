<script setup>
const isOpen = ref(false)
</script>
<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />
    <UModal v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          header
        </template>
      isi
        <template #footer>
        Footer
        </template>
      </UCard>
    </UModal>
  </div>
</template>
