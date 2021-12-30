<template>
  <div class="profile">
    <div class="top">
      <div class="overskrift">
        <h1>Profil</h1>
      </div>
      <div class="filler"></div>
      <div class="knap"></div>
    </div>
    <div class="container">
      <div class="placement">
        <div class="card">
          <div class="columm">
            <p>Brugernavn: {{ username }}</p>
            <p>Alder: {{ age }}</p>
            <div class="list">
              <p>roles:</p>
              <div v-for="item in roles" v-bind:key="item.id">
                <p>&nbsp; {{ item }},</p>
              </div>
            </div>
            <div class="list">
              <p>Class:</p>
              <div v-for="item in classes" v-bind:key="item.id">
                <p>&nbsp; {{ item }},</p>
              </div>
            </div>
          </div>

          <div class="columm">
            <p>Navn: {{ name }}</p>
            <p>By: {{ city }}</p>

            <div class="list">
              <p>setting:</p>
              <div v-for="item in setting" v-bind:key="item">
                <p>&nbsp; {{ item }},</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div>
        <button  v-if="this.user._id == this.userID">
          <router-link to="/minekampagner">Mine Kampagner</router-link>
        </button>
        <button v-if="this.user._id == this.userID">
          <router-link
            :to="{ name: 'Rediger', params: { user: JSON.stringify(user) } }"
            >Redigere Profil</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserCon from "../../controller/userController";

export default {
  // run when page is created and check if the user are logged in.
  
  async created() {
    this.token = sessionStorage.getItem("token");
    this.userID = sessionStorage.getItem("user_id");
    if (this.token == null || this.userID == null) {
      this.$router.push("/login");
    } 
    else {
      

      const theUser = await this.userCon.readUserById(this.token, this.userID);

      this.user = theUser;
      this.username = this.user.username;
      this.name = this.user.name;
      this.age = this.user.age;
      this.city = this.user.city;
      this.zipcode = this.user.zipcode;
      this.roles = this.user.roles;
      this.classes = this.user.classes;
      this.setting = this.user.setting;
    }
  },

  data: () => ({
    userCon: new UserCon(),

    userID: null,
    token: null,
    username: null,
    name: null,
    age: null,
    city: null,
    zipcode: null,
    roles: [],
    classes: [],
    setting: [],

    user: null,
  }),

  methods: {},
};
</script>

<style scoped>
.profile {
  background-image: url(../../assets/profilebackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 90vh;
}

.placement {
  display: flex;
  justify-content: center;
  align-content: center;
}

.card {
  background-color: #dedbc4;
  display: flex;
  width: 50%;
  color: black;
  border-radius: 35px/90px;
  padding-top: 70px;
  padding-bottom: 70px;
}

.columm {
  width: 50%;
  text-align: left;
  margin-left: 75px;
}

.list {
  display: flex;
  flex-wrap: wrap;
}

p {
  font-size: 30px;
  margin-top: 0;
}

button {
  font-family: "Charm", cursive;
  font-size: 30px;
  background-color: #b93b3b;
  color: white;
  margin: 50px 17.5px;
  border-radius: 12px;
  width: 300px;
}

button a {
  color: white;
  text-decoration: none;
}

@media screen and (max-width: 1200px) {
  .card {
    width: 80%;
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 90%;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>