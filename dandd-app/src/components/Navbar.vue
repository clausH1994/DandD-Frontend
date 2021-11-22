<template>
  <div id="nav">
    <div class="navleft">
    Logo
    <router-link to="/">Kampagner</router-link>
    <router-link to="/forumforside">Forum</router-link>
    </div>
    <div class="navright">
    <router-link to="/minekampagner">Mine Kampagner</router-link>
    <router-link to="/chat">Chat</router-link>
    <router-link to="/profil">Profil</router-link>
    <router-link to="/logud">Log ud</router-link>
    </div>
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

</style>