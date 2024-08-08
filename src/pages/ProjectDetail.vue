<script>
import axios from "axios";
export default {
  name: "Details",
  data() {
    return {
      title: "Progetti",
      project: [],
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
        endPoints: "projects",
      },
      error: false,
    };
  },
  methods: {
    getProjects() {
      const url =
        this.api.baseUrl + this.api.endPoints + "/" + this.$route.params.slug;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          this.project = response.data.results;
        })
        .catch((error) => {
          this.error = true;
          conosle.log(error);
        });
    },
  },
  created() {
    this.getProjects();
  },
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
    <h1 class="py-3">Dettagli Progetto</h1>
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <!-- type -->
    <div>
      <h5>Tipo di progetto:</h5>
      <p>{{ project.type.name }}</p>
    </div>
    <!-- technologies -->
    <div>
      <h5>Tecnologie:</h5>
      <p>{{ project.technologies.name }}</p>
    </div>
    <router-link class="btn btn-primary my-3" :to="{ name: 'Project' }"
      >Torna ai progetti</router-link
    >
  </div>
</template>

<style></style>
