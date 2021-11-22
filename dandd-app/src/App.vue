<template>
<Navbar />

<Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Home',
  components: { Navbar, Footer }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Charm&display=swap');
#app {
  font-family: 'Charm', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    margin: 0;
    padding: 0;
}


</style>
