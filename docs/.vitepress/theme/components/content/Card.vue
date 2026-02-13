<script setup lang="ts">
import WikiImage from "./WikiImage.vue";

const props = defineProps<{
  title: string;
  link?: string;
  image?: string | { light: string; dark: string };
  banner?: string | { light: string; dark: string };
}>();
</script>

<template>
  <div class="card">
    <img v-if="props.banner !== undefined" :src="banner" alt="" class="card-banner" />
    <div class="card-inner">
      <header>
        <WikiImage v-if="props.image !== undefined" :src="image" alt="" width="60" height="60" />
        <h2 v-if="props.link">
          <a :href="props.link">{{ title }}</a>
        </h2>
        <h2 v-else>
          {{ title }}
        </h2>
      </header>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.card-inner {
  padding: 1em;
  width: 100%;
  height: 100%;
}
.card-banner {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.card {
  overflow: hidden;
  background-color: var(--light-bg-color);
  border: var(--border);
  border-radius: var(--border-radius);

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  & > header {
    display: flex;
    align-items: center;
    gap: 1em;

    .wiki-image {
      margin: 0;
    }

    h2 {
      line-height: 1;
    }
  }
}
</style>
