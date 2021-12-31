<template>
  <Navbar />

  <router-view />

  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
//import { mapActions } from 'vuex'

export default {
  name: "Home",
  components: { Navbar, Footer },

  /* methods: {
    ...mapActions (["setIsLogged"])
  }, */

  created() {
    this.$store.dispatch("setIsLogged");
  },

  /* updated() {
    this.$store.dispatch("setIsLogged");
}, */

  computed: {
    isLogged() {
      return this.$store.getters.getIsLogged;
    },
  },

  /* watch: {
   isLogged: function() {
     this.$forceUpdate();
   }
}, */
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Charm&display=swap");
#app {
  font-family: "Charm", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

h1 {
  color: White;
  font-size: 50px;
}

h2 {
  color: white;
}

body {
  margin: 0;
  padding: 0;
}

.top {
  display: flex;
  height: 250px;
}

.overskrift {
  text-align: left;
  margin: auto;
  width: 20%;
}

.knap {
  margin: auto;
  width: 10%;
}

.filler {
  width: 30%;
}

button.okamp {
  background-color: #b93b3b;
  color: white;
  font-family: "Charm", cursive;
  font-size: 20px;
  height: 55px;
  width: 150px;
  border-radius: 12px;
  border: none;
}

button {
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .top {
    display: block;
    padding-top: 1px;
  }

  .overskrift {
    text-align: center;
    margin: auto;
    width: 100%;
  }

  .knap {
    margin: auto;
    width: 100%;
  }

 
}
</style>
