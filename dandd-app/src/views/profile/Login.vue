<template>
  <div class="login">
    <div class="top">
      <div class="overskrift"></div>
      <div class="filler"></div>
      <div class="knap"></div>
    </div>
    <div class="placement">
      <div class="outerBox">
        <form class="register" v-on:submit.prevent="validate()">
          <h3>REGISTRER</h3>
          <input v-model="rEmail" placeholder="Email" required />
          <input
            v-model="passwordR"
            placeholder="Password"
            type="password"
            required
          />
          <input
            v-model="bPassword"
            placeholder="Bekræft Password"
            type="password"
            required
          />
          <button class="btn-reg">Register</button>
          <button class="social">Facebook</button>
          <button class="social">Google</button>
        </form>
      </div>
      <div class="spacer"></div>
      <div class="outerBox">
        <form class="register" v-on:submit.prevent="loginUser()">
          <h3>LOGIN</h3>
          <input v-model="email" placeholder="Email" name="Email" required />
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            name="Password"
            required
          />
          <button class="btn-reg" name="login">Login</button>
          <button class="social">Facebook</button>
          <button class="social">Google</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthCon from "../../controller/authController";

export default {
  data: () => ({
    authCon: new AuthCon(),

    valid: true,
    show1: false,

    email: "",
    rEmail: "",
    checkbox: false,

    password: "",
    passwordR: "",
    bPassword: "",
  }),

  computed: {
    isLogged() {
      return this.$store.getters.getIsLogged;
    },
  },

  methods: {
    //validates user input and call registerUser()
    async validate() {
      if (this.passwordR != this.bPassword) {
        this.error = "Password does not match";
      } else {
        const response = await this.authCon.registerUser(
          this.rEmail,
          this.passwordR
        );
        if (response.error == null) {
          sessionStorage.setItem("tempID", response.data);
          sessionStorage.setItem("pass", this.passwordR);
          sessionStorage.setItem("email", this.rEmail);
          this.$router.push("Registrer");
        } else {
          alert(response.error);
        }
      }
    },

    //checks if username and password match a user from the database.
    async loginUser() {
      const response = await this.authCon.login(this.email, this.password);
      //sets logged in user and token in session.
      if (response.error == null) {
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("user", JSON.stringify(response.user));
        sessionStorage.setItem("user_id", response.id);
        const token = sessionStorage.getItem("token");
        const userID = sessionStorage.getItem("user_id");
        if (token != null && userID != null) {
          alert(this.email + " Has been logged in");
          this.$router.back();
        } else {
          alert("Something went wrong");
        }
      } else {
        alert(response.error);
      }
    },
  },

  created() {
    this.$store.dispatch("setIsLogged");
  },
};
</script>

<style scoped>
.placement {
  width: 65%;
  margin: 0 auto;
  display: flex;
}
.spacer {
  width: 50%;
}
.login {
  background-image: url(../../assets/profilebackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 90vh;
}
.outerBox {
  width: 25%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 10px;
}

.register {
  color: black;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  height: 350px;
}
input {
  margin-top: 5px;
  border-radius: 10px;
  height: 45px;
  font-family: charm, cursive;
  padding-left: 10px;
  font-size: 20px;
}
.btn-reg {
  background-color: #b93b3b;
  color: white;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: charm, cursive;
  font-weight: bold;
  font-size: 20px;
}

.social {
  margin: 2px;
  background-color: white;
  font-size: 20px;
}
button {
  height: 45px;
  border-radius: 12px;
}

@media screen and (max-width: 1500px) {
  .outerBox {
    width: 45%;
  }
}

@media screen and (max-width: 1500px) {
  .outerBox {
    width: 55%;
  }

  .placement {
    width: 95%;
  }
}

@media screen and (max-width: 600px) {
.outerBox {
    margin-top: 20px;
    width: 70%;
  }
  .placement {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 400px) {
.outerBox {
    
    width: 90%;
  }
  
}
</style>