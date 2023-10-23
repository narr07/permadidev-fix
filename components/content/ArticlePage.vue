<script setup lang="ts">
  type Article = {
    _path: string;
    title: string;
    date: string;
    description: string;
    badges?: { bg: string; text: string; content: string }[];
  };
  const props = defineProps({
    article: {
      type: Object,
      required: true,
      validator: (value: Article) => {
        if (value?._path && value.title) {
          return true;
        }
        return false;
      },
    },
    featured: {
      type: Boolean,
      default: false,
    },
  });
  const id = computed(() => {
    // @ts-ignore
    return process.dev || useContentPreview()?.isEnabled()
      ? props.article?._id
      : undefined;
  });
</script>
<template>
  <article v-if="article._path && article.title" :data-content-id="id">
    <UContainer class="content">
      <NuxtLink :to="article._path" class="headline">
        <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <NuxtImg
            :src="article.image"
            height="300"
            width="600"
            class="bg-cover h-40 md:h-64 w-full object-cover rounded-md object-center"
            format="webp" />
          <h1>
            {{ article.title }}
          </h1>
          <p class="description">
            {{ article.description }}
          </p>
        </UCard>
      </NuxtLink>
    </UContainer>
  </article>
</template>
