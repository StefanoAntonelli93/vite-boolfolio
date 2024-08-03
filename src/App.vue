<script>
// importo axios
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      title: "Progetti",
      projects: [],
    };
  },
  methods: {
    testLifeCycle() {
      console.log("prova ciclo");
    },
    getProjects() {
      const result = axios
        .get("http://127.0.0.1:8000/api/projects")
        .then((response) => {
          console.log(response);
          // se l'array è popolato restituisci qualcosa altrimenti messaggio errore
          if (response.data.results.data.length) {
            // console.log(response.data.results);
            this.projects = response.data.results;
          } else {
            console.log("errore chiamata api");
          }
        })
        .catch((error) => HTMLFormControlsCollection.log(error));
    },
  },
  created() {
    this.testLifeCycle();
    this.getProjects();
  },
};
</script>

<template>
  <header>header</header>
  <main>
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </main>
  <footer>footer</footer>
</template>

<style scoped lang="scss"></style>
