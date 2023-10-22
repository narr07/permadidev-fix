<script setup>
  const items = [
    {
      label: "Pendidikan",
      slot: "pendidikan",
    },
    {
      label: "Teknologi",
      slot: "teknologi",
    },
    {
      label: "Seni",
      slot: "seni",
    },
  ];
  const route = useRoute();
  const router = useRouter();
  const selected = computed({
    get() {
      const index = items.findIndex((item) => item.label === route.query.tab);
      if (index === -1) {
        return 0;
      }
      return index;
    },
    set(value) {
      // Hash is specified here to prevent the page from scrolling to the top
      router.replace({
        query: { tab: items[value].label },
        hash: "#control-the-selected-index",
      });
    },
  });
</script>
<template>
  <UContainer>
    <UTabs v-model="selected" :items="items">
      <!-- pendidikan -->
      <template #pendidikan="{ item }">
        <UCard
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-gray-100 shadow dark:bg-gray-900 py-2 rounded-md">
          <div class="w-full flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 items-center justify-center flex">
              <SvgGuru />
            </div>
            <div class="w-full md:w-1/2 items-center justify-center flex">
              Saya adalah seorang guru SD lulusan Universitas Pendidikan
              Indonesia (UPI). Saya memiliki pengalaman mengajar selama 3 tahun
              setelah lulus kuliah. Saya memiliki komitmen untuk memberikan
              pendidikan yang berkualitas kepada anak-anak dan membantu mereka
              mencapai potensi penuh mereka.
            </div>
          </div>
        </UCard>
      </template>
      <!-- teknologi -->
      <template #teknologi="{ item }">
        <UCard
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-gray-100 shadow dark:bg-gray-900 py-2 rounded-md">
          <div class="w-full flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 items-center justify-center flex">
              <SvgProgrammer />
            </div>
            <div class="w-full md:w-1/2 items-center justify-center flex">
              Saya menguasai framework Nuxt.js, bahasa pemrograman Python, dan
              framework Flutter. Saya memiliki pengalaman mengembangkan berbagai
              aplikasi web, mobile, dan desktop. Saya selalu mencari cara untuk
              meningkatkan keterampilan saya dan mengikuti perkembangan
              teknologi terbaru.
            </div>
          </div>
        </UCard>
      </template>
      <!-- seni -->
      <template #seni="{ item }">
        <UCard
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-gray-100 shadow dark:bg-gray-900 py-2 rounded-md">
          <div class="w-full flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 items-center justify-center flex">
              <SvgDesigner />
            </div>
            <div class="w-full md:w-1/2 items-center justify-center flex">
              Saya menguasai desain grafis, terutama produk Adobe. Saya memiliki
              pengalaman membuat berbagai karya desain, termasuk logo, brosur,
              dan desain website. Saya memiliki selera estetika yang tinggi dan
              selalu berusaha untuk menciptakan karya yang kreatif dan menarik.
            </div>
          </div>
        </UCard>
      </template>
    </UTabs>
  </UContainer>
</template>
