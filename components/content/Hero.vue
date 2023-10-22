<template>
  <!-- Hero -->
  <UContainer class="-mt-16 h-screen items-center flex justify-center">
    <div class="">
      <!-- Title -->
      <div class=" max-w-3xl text-center mx-auto">
        <h1 class="block">
          <ContentSlot :use="$slots.default" unwrap="p" /> <br />
          <span
            class="text-permadi-600 text-2xl dark:text-permadi-400 md:text-5xl"
            >
            <ContentSlot :use="$slots.warna" unwrap="p" />
          </span>
        </h1>
      </div>
      <!-- End Title -->
      <div class="mt-5 max-w-3xl text-center mx-auto">
        <p class="">
          <slot name="deskripsi" />
        </p>
      </div>
      <!-- Buttons -->
      <div class="mt-8 flex w-full sm:inline-flex justify-center">
       <UButton  label="Download CV" />
      </div>
      <!-- End Buttons -->
    </div>
  </UContainer>
  <!-- End Hero -->
</template>
