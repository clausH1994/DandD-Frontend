<template>
  <div id="nav">
    <div class="navleft">
    <img class="logo" src="..\assets\logo.svg" alt="">
    <router-link to="/">Kampagner</router-link>
    <router-link to="/forumforside">Forum</router-link>
    </div>
    <div class="navright">
    <router-link to="/minekampagner">Mine Kampagner</router-link>
    <router-link to="/chat">Chat</router-link>
    <router-link to="/profil">Profil</router-link>
    <button class="logout" v-on:click="logout()">Log ud</button>
    <router-link to="/login">Login</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
    name: 'Navbar',
  methods: {
    logout(){
      sessionStorage.clear();
      alert("successfuld logout")
    }
  },  
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
  padding: 30px;
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

.navleft {
  display: inline-block;
  margin-left: 5%;
}

.navright {
  display: inline-block;
  position: absolute;
  right: 5%;
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