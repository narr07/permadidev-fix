<template>
  <!-- Hero -->
  <UContainer class=" ">
    <div class="">
      <!-- Title -->
      <div class="mt-5 max-w-2xl text-center mx-auto">
        <h1 class="block text-4xl md:text-5xl ">
          <ContentSlot :use="$slots.default" unwrap="p" />
          <span class="text-permadi-500" style="margin-left: 10px">
            <ContentSlot :use="$slots.warna" unwrap="p" />
          </span>
        </h1>
      </div>
      <!-- End Title -->
      <div class="mt-5 max-w-3xl text-center mx-auto">
        <p class="text-lg">
          <slot name="deskripsi" />
        </p>
      </div>
      <!-- Buttons -->
      <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
        <a
          class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
          href="#">
          Get started
          <svg
            class="w-3 h-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round" />
          </svg>
        </a>
      </div>
      <!-- End Buttons -->
      <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
        <span class="text-sm text-gray-600 dark:text-gray-400"
          >Package Manager:</span
        >
        <span class="text-sm font-bold text-gray-900 dark:text-white">npm</span>
        <svg
          class="h-5 w-5 text-gray-300 dark:text-gray-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
        </svg>
        <a
          class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
          href="#">
          Installation Guide
          <svg
            class="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round" />
          </svg>
        </a>
      </div>
    </div>
  </UContainer>
  <!-- End Hero -->
</template>
