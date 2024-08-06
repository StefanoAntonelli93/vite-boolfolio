<script>
export default {
  name: "Details",
};
</script>

<template>
  <div class="utilities p-3">
    <router-link class="" :to="{ name: 'Project' }">Progetti</router-link> >
    <router-link class="" :to="{ name: 'Details' }"
      >Dettagli Progetto</router-link
    >
  </div>

  <div class="container py-3 vh-100">
    <h1>Dettagli Progetto</h1>
    <h2>titolo</h2>
    <p>descrizione</p>
    <router-link class="btn btn-primary" :to="{ name: 'Project' }"
      >Torna ai progetti</router-link
    >
  </div>
</template>

<style></style>
