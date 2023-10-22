<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})
// @ts-ignore
const { data: _articles } = await useAsyncData('articles', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())
const articles = computed(() => _articles.value || [])
</script>
<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="featured">
      <ArticlePage :article="articles[0]" :featured="true" />
    </div>
    <div class="layout">
      <ArticlePage v-for="(article, index) in articles.slice(1)" :key="index" :article="article" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no articles yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">creating</ProseA> one in the <ProseCodeInline>articles</ProseCodeInline> folder.
    </p>
  </div>
</template>
