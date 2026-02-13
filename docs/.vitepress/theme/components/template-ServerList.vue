<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardGrid from "./content/CardGrid.vue";
import Card from "./content/Card.vue";

const serverData = ref(null);

onMounted(async () => {
  const res = await fetch(
    "https://mcbetools.com/api/v2/search?tagSearchMode=all&tags=SERVER,LEAF",
    {
      headers: {
        //   "Access-Control-Allow-Origin": "https://mcbetools.com",
      },
    }
  );
  serverData.value = await res.json();
});
</script>

<template>
  <h1>Leaf Essentials Server List</h1>
  <p>
    Want to add something here? Go to <a href="https://mcbetools.com">mcbetools.com</a> and submit a
    new server with BOTH the "server" and "leaf" tags. Wait for it to be accepted
  </p>
  <h3 v-if="!serverData || !serverData.length">Nothing here yet...</h3>
  <CardGrid>
    <Card
      v-for="server in serverData"
      :key="server._id"
      :link="`https://mcbetools.com/s/${server.url}`"
      :title="server.title"
      :banner="`https://mcbetools.com/api${server.bannerURL}`"
    >
      {{ server.shortDescription }}
    </Card>
  </CardGrid>
</template>
