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
    };
  },
  methods: {
    getProjects() {
      const url = this.api.baseUrl + this.api.endPoints;
      //   console.log(url);
      axios
        .get(url)
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
        <!-- passo le propos a componente CardProject -->
        <CardProject
          :name="project.name"
          :slug="project.slug"
          :description="project.description"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
