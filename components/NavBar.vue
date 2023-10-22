<template>
  <nav>
    <div class="fixed w-full top-2 z-50">
      <UContainer>
        <div
          class="dark:bg-permadi-900 bg-permadi-100 boder ring-1 ring-gray-200 dark:ring-gray-800 rounded-md p-2">
          <ContentNavigation class="flex" v-slot="{ navigation }">
            <div class="flex justify-between">
              <ul class="flex space-x-2">
                <li v-for="link of navigation" :key="link._path">
                  <UButton
                    :variant="link._path === $route.path ? 'solid' : 'ghost'"
                    :to="link._path">
                    {{ link.title }}
                  </UButton>
                </li>
              </ul>
              <ColorModeButton />
            </div>
          </ContentNavigation>
        </div>
      </UContainer>
    </div>
  </nav>
</template>
<script setup>
  const varButton = ref("solid");
</script>
