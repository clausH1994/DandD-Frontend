<template>
  <div id="nav">
    Logo
    <router-link to="/">Kampagner</router-link>
    <router-link to="/forumforside">Forum</router-link>
    <router-link to="/minekampagner">Mine Kampagner</router-link>
    <router-link to="/chat">Chat</router-link>
    <router-link to="/profil">Profil</router-link>
    <router-link to="/logud">Log ud</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
#nav {
  background-color: #A05353;
  color: white;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>