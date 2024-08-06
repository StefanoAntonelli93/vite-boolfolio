<script>
// importo axios
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "Projects",
  data() {
    return {
      title: "Progetti",
      projects: [],
    };
  },
  components: {
    AppHeader,
    AppFooter,
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
            this.projects = response.data.results.data;
            console.log(response.data.results.data);
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
  <AppHeader />

  <main>
    <div class="conteiner">
      <router-view></router-view>
    </div>
  </main>

  <AppFooter />
</template>

<style scoped lang="scss"></style>
