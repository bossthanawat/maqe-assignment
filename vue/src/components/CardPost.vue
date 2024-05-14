<script setup lang="ts">
import dayjs from "dayjs";
defineProps<{
  post: {
    title: string;
    body: string;
    image_url: string;
    created_at: string;
    author:{
      name: string;
      avatar_url: string;
    }
  };
  index: number;
}>();

const handleFormatDatePost = (datetime: string) => {
  return dayjs(datetime).format("dddd, MMMM D, YYYY, HH:mm");
};
</script>

<template>
  <div
    :class="index % 2 === 0 ? 'bg-white' : 'bg-blue-100'"
    class="shadow-md rounded-sm"
  >
    <div class="px-4 py-2 border-b-[1px] border-gray-300">
      <div class="flex gap-1 text-sm items-center">
        <img
          :src="post?.author?.avatar_url"
          alt="avatar"
          class="w-5 h-5 rounded-full"
          loading="lazy"
        />
        <span class="text-orange-600 font-medium">{{
          post?.author?.name
        }}</span>
        <span class="text-gray-500"
          >posted on {{ handleFormatDatePost(post.created_at) }}</span
        >
      </div>
    </div>
    <div class="p-4">
      <div class="flex gap-4 items-start">
        <img
          :src="post?.image_url"
          alt="post image"
          class="w-[240px] object-contain"
          loading="lazy"
        />
        <div>
          <p class="text-lg font-medium">{{ post.title }}</p>
          <p class="mt-2 text-sm">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
