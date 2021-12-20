<template>
  <div id="nav">
    <div class="navLogo">
    <router-link to="/"> 
    <img class="logo" src="..\assets\logo.svg" alt="">
    </router-link>
    </div>
    <div class="navleft">
    <router-link to="/">Kampagner</router-link>
    <router-link to="/forumforside">Forum</router-link>
    </div>
    <div class="navright">
    <router-link to="/minekampagner">Mine Kampagner</router-link>
    <router-link to="/profil">Profil</router-link>
    <router-link to="/login" v-if="!isLogged">Login</router-link>
    <button class="logout" v-else v-on:click="logout()">Log ud</button>
    </div>
  </div>
  <router-view/>
</template>

<script>
//import { mapActions } from 'vuex'

export default {
    name: 'Navbar',

  data() {
    return {
    //isLogged: false,
    }
  },

  methods: {
    logout(){
      sessionStorage.clear();
      alert("successfuld logout")
      this.$router.push("/")
    },

/*     ...mapActions(['setIsLogged']),
    checkIsLogged() {
    this.setIsLogged();
    } */
/*     checkIsLogged() {
      this.$store.dispatch("getIsLogged")
    } */
  },

  computed: {
    isLogged() {
      return this.$store.getters.getIsLogged;
    }
  },

/*   mounted() {
    this.isLogged = this.$store.getters.getIsLogged;
  }, */

/*   created() {
    this.token = sessionStorage.getItem("token");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if (this.token == null || this.user == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  } */
}
</script>

<style>

.logo {
  width: 220px;
  height: 60px;
}

#nav {
  background-color: #A05353;
  color: white;
  padding: 15px;
  font-size: 25px;
  text-decoration: none;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: white;
  padding: 30px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
}

.navLogo {
  margin-left: 5%;
}

.navleft {
  display: inline-block;
  margin-top: 15px;
}

.navright {
  display: inline-block;
  position: absolute;
  right: 10%;
  margin-top: 15px;
}

.logout {
  background-color: #A05353;
  color: white;
  border: none;
  font-size: 25px;
  cursor: pointer;
  font-family: 'charm', cursive;
  font-weight: bold;
}

</style>