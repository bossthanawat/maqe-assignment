<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { ref, onMounted } from "vue";
import { getPosts, getAuthors } from "./service";

import CardPost from "./components/CardPost.vue";

const timezone = ref("");

onMounted(() => {
  timezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
});

const { data: posts } = useQuery({
  queryKey: ["getPosts"],
  queryFn: async () => {
    const { data: posts } = await getPosts();
    const { data: authors } = await getAuthors();
    return posts.map((post) => {
      const author = authors.find((author) => author.id === post.author_id);
      return {
        ...post,
        author,
      };
    });
  },
});
</script>
<template>
  <div class="container mt-8">
    <h1 class="text-2xl font-medium">MAQE Forum</h1>
    <p class="mt-6">Your current timezone is: {{ timezone }}</p>
    <div class="flex flex-col gap-4 my-4">
      <CardPost
        v-for="(post, index) in posts"
        :key="post.id"
        :post="{
          ...post,
          author: {
            name: post.author?.name || '',
            avatar_url: post.author?.avatar_url || '',
          },
        }"
        :index="index"
      />
    </div>
  </div>
</template>
<style scoped></style>
