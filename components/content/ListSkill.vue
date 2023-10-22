<template>
  <UCard
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="w-full h-full">
    <div class="flex items-center justify-between">
      <div class="items-center flex gap-x-4">
        <UIcon :name="icon" class="w-10 h-10 text-permadi-600" />
        {{ title }}
      </div>
      <UButton
        :to="link"
        target="_blank"
        size="md"
        color="gray"
        variant="ghost"
        icon="i-ph-arrow-circle-right-duotone" />
    </div>
  </UCard>
</template>
<script setup>
  const { icon, name, link } = defineProps({
    icon: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true },
  });
</script>
