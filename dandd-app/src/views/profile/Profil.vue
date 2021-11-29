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
            <p>Role: {{ role }}</p>
            <div style="display: flex">
              <p>Class:</p>
              <div v-for="item in classes" v-bind:key="item.id">
                <p>&nbsp; {{ item }},</p>
              </div>
            </div>
          </div>

          <div class="columm">
            <p>Navn: {{ name }}</p>
            <p>By: {{ city }}</p>

            <div style="display: flex">
              <p>setting:</p>
              <div v-for="item in setting" v-bind:key="item.id">
                <p>&nbsp; {{ item }},</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div>
        <button>
          <router-link to="/minekampagner">Mine Kampagner</router-link>
        </button>
        <button>
          <router-link to="/rediger">Redigere Profil</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // run when page is created and check if the user are logged in.
  // calls getLoginUser()
  created() {
    this.token = sessionStorage.getItem("token");
    this.userID = sessionStorage.getItem("user_id");
    if (this.token == null && this.userID == null) {
      this.$router.push("Login");
    } else {
      this.getLoginUser();
    }
  },

  data: () => ({
    userID: null,
    token:null,
    username: null,
    name: null,
    age: null,
    city: null,
    zipcode: null,
    role: null,
    classes: null,
    setting: null,
  }),

  methods: {
    //gets logged in user from database.
    getLoginUser() {
      this.userID;
      fetch("https://dandd-api.herokuapp.com/api/users/" + this.userID, {
        method: "GET",
        headers: { "auth-token": this.token },
      }).then((response) =>
        response
          .json()
          .then((data) => ({
            data: data,
            status: response.status,
          }))
          .then((response) => {
            if (response.data) {
              this.user = response.data;
              this.username = response.username;
              this.name = this.user.name;
              this.age = this.user.age;
              this.city = this.user.city;
              this.zipcode = this.user.zipcode;
              this.role = this.user.role;
              this.classes = this.user.class;
              this.setting = this.user.setting;
            } else {
              alert(
                "Server returned " +
                  response.status +
                  " : " +
                  response.statusText
              );
            }
          })
      );
    },
  },
};
</script>

<style scoped>
.profile {
  background-image: url(../../assets/profilebackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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

p {
  font-size: 30px;
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

.container {
  height: 67vh;
}
</style>