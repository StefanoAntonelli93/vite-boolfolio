<script>
import axios from "axios";
import CardProject from "../components/CardProject.vue";

export default {
  name: "Project",
  components: {
    CardProject,
  },
  data() {
    return {
      title: "Progetti",
      projects: [],
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
        endPoints: "projects",
      },
      currentPage: 1,
    };
  },
  methods: {
    prevPage() {
      console.log("pagina precedente");
      this.currentPage--;
      this.getProjects();
    },
    nextPage() {
      console.log("pagina seguente");
      this.currentPage++;
      this.getProjects();
    },
    getProjects() {
      const url = this.api.baseUrl + this.api.endPoints;
      //   console.log(url);
      axios
        .get(url, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          //   console.log(response);
          // se l'array è popolato restituisci qualcosa altrimenti messaggio errore
          if (response.data.results.data.length) {
            // console.log(response.data.results);
            this.projects = response.data.results.data;
            // console.log(response.data.results.data);
          } else {
            console.log("errore chiamata api");
          }
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="container vh-100">
    <h1 class="py-3">{{ title }}</h1>
    <div class="row">
      <div class="col-6" v-for="project in projects">
        <!-- passo le props a componente CardProject -->
        <CardProject
          :name="project.name"
          :slug="project.slug"
          :description="project.description"
        />
      </div>
    </div>
    <nav class="py-4 d-flex justify-content-between">
      <button class="btn btn-primary" @click="prevPage">prev</button>
      <button class="btn btn-primary" @click="nextPage">next</button>
    </nav>
  </div>
</template>

<style></style>
