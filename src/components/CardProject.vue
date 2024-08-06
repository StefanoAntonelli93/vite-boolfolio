<script>
export default {
  name: "CardProject",
  props: ["name", "slug", "description"],
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <router-link
        class="btn btn-primary"
        :to="{ name: 'Details', params: { slug: slug } }"
        >Dettaglio</router-link
      >
      <!-- <a href="/project/{{ slug }}" class="btn btn-primary">Dettagli</a> -->
    </div>
  </div>
</template>

<style></style>
