<template>
  <div id="nav">
    <div class="navLogo">
      <router-link to="/">
        <img class="logo" src="..\assets\logo.svg" alt="" />
      </router-link>
    </div>
    <div class="navleft">
      <router-link to="/">Kampagner</router-link>
      <router-link to="/forum" :class="{ 'link-active': subIsActive('/forum') }"
        >Forum</router-link
      >
    </div>
    <div class="navright">
      <router-link to="/minekampagner" v-if="isLogged">Mine Kampagner</router-link>
      <router-link to="/profil" v-if="isLogged">Profil</router-link>
      <router-link to="/login" v-if="!isLogged">Login</router-link>
      <button class="logout" v-else v-on:click="logout()">Log ud</button>
    </div>
    <div class="burgerMenu">
      <div
        class="hamburger"
        @click="hamburgerOpen = !hamburgerOpen"
        :class="hamburgerOpen ? 'hamburger--is-open' : ''"
      >
        <div class="hamburger__item hamburger__item--first"></div>
        <div class="hamburger__item hamburger__item--middle"></div>
        <div class="hamburger__item hamburger__item--last"></div>
      </div>
    </div>
    <div class="row dropdown" :class="{ 'dropdown-after': hamburgerOpen }">
      <ul class="navlist">
        <li class="navlistitem">
          <router-link to="/">Kampagner</router-link>
        </li>
        <li class="navlistitem">
          <router-link
            to="/forum"
            :class="{ 'link-active': subIsActive('/forum') }"
            >Forum</router-link
          >
        </li>
        <li class="navlistitem">
          <router-link to="/minekampagner">Mine Kampagner</router-link>
        </li>
        <li class="navlistitem">
          <router-link to="/profil">Profil</router-link>
        </li>
        <li class="navlistitem" v-if="!isLogged">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="navlistitem" v-if="isLogged">
          <button class="logout" v-on:click="logout()">Log ud</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import { mapActions } from 'vuex'

export default {
  name: "Navbar",

  data() {
    return {
      hamburgerOpen: false,
      //isLogged: false,
    };
  },

  methods: {
    logout() {
      // logs out the user by clearing the sessionstorage
      sessionStorage.clear();
      alert("successfuld logout");
      this.$router.push('/login');
    },

    subIsActive(input) {
      // function to display mainpage active on navbar from the forum if a subpage is the current page it still shows forum as active in navbar
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },

    // commented out as this were used to test and problem solve the issues with the state management
    /*     ...mapActions(['setIsLogged']),
    checkIsLogged() {
    this.setIsLogged();
    } */
    // commented out as this were used to test and problem solve the issues with the state management
    /*     checkIsLogged() {
      this.$store.dispatch("getIsLogged")
    } */
  },

  computed: {
    isLogged() {
      // getting the isLogged state from the vuex store
      return this.$store.getters.getIsLogged;
    },
  },

  watch: {
    // test to force updated on change of the state isLogged - not working
    isLogged: function () {
      this.$forceUpdate();
    },
  },

  created() {
    // dispatch to set the state isLogged from the vuex store
    this.$store.dispatch("setIsLogged");
  },

  // commented out as this were used to test and problem solve the issues with the state management
  /*   mounted() {
    this.isLogged = this.$store.getters.getIsLogged;
  }, */

};
</script>

<style scoped>
.logo {
  width: 220px;
  height: 60px;
}

#nav {
  background-color: #a05353;
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
  background-color: #a05353;
  color: white;
  border: none;
  font-size: 25px;
  cursor: pointer;
  font-family: "charm", cursive;
  font-weight: bold;
}

.link-active {
  color: black !important;
}

@media screen and (min-width: 1200px) {
  .burgerMenu {
    display: none;
  }
  .dropdown {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .navleft {
    display: none;
  }

  .navright {
    display: none;
  }

  .logout {
    padding-left: 30px;
  }

  .burgerMenu {
    display: inline-block;
    position: absolute;
    right: 10%;
    margin-top: 15px;
  }

  .bg-blue-bright {
    background-color: white;
  }

  .hamburger {
    height: 30px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hamburger:hover {
    cursor: pointer;
  }
  .hamburger__item {
    height: 6px;
    width: 100%;
    background: white;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
      opacity 300ms linear;
  }
  .hamburger--is-open .hamburger__item--first {
    transform: translate(0, 12px) rotate(45deg);
  }
  .hamburger--is-open .hamburger__item--middle {
    opacity: 0;
  }
  .hamburger--is-open .hamburger__item--last {
    transform: translate(0, -12px) rotate(-45deg);
  }

  .dropdown {
    margin-top: 50px;
    height: 0px;

    background-color: #a05353;
    transition: height 0.2s ease;
    display: inline-block;
    position: absolute;
    right: 0;
    overflow: hidden;
  }

  .dropdown-after {
    height: calc(40vh - 50px);
    transition: height 0.2s ease;
  }

  .navlist {
    list-style: none;
  }

  .navlistitem {
    text-transform: uppercase;
    text-align: left;
    padding: 20px;
  }

  .navlistitem a {
    color: #ffffff;
  }
}

@media screen and (max-width: 600px) {
  .dropdown {
    width: 100%;
  }
}

@media screen and (max-width: 370px) {
  .navLogo {
    margin-left: 5px;
  }

  #nav {
    padding-left: 2px;
  }

  #nav a {
    padding: 0;
  }
}
</style>