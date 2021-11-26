<template>
    <div class="login">
            <div class="top">
      <div class="overskrift">
      </div>
      <div class="filler"></div>
      <div class="knap">
      </div>
    </div>
        <div class="placement">
        <div class="outerBox">
        <div class="register">
            <h3>REGISTRER</h3>
           <input v-model="rEmail" :rules="emailRules" placeholder="Email">
            <input v-model="passwordR" :rules="passwordRules" placeholder="Password" type="password">
            <input v-model="bPassword" :rules="passwordRules" placeholder="Bekræft Password" type="password">
            <button class="btn-reg" @click="validate()">Register</button>
            <button class="social">Facebook</button>
            <button class="social">Google</button>
        </div>
        </div>
        <div class="spacer"></div>
        <div class="outerBox">
        <div class="register">
            <h3>LOGIN</h3>
           <input v-model="email" placeholder="Email" :rules="emailRules">
            <input v-model="password" placeholder="Password" :rules="passwordRules" type="password">
            <button class="btn-reg" @click="loginUser()">Login</button>
            <button class="social">Facebook</button>
            <button class="social">Google</button>
        </div>
        </div>
      </div>   
   </div> 
</template>

<script>
    export default {
        data:()=>({
            valid:true,
            show1: false,

    email: "",
    rEmail:"",
    emailRules: [
      (v) => !!v  || "E-mail is required",
      (v) => /.+@.+..+/.test(v) || "Wrong E-mail",
    ],
    checkbox: false,

    password: "",
    passwordR:"",
    bPassword:"",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length <= 6) || "password is incorrect, please try again",
    ],
        }),
        methods: {
            //validates user input and call registerUser()
    validate() {

        if (this.passwordR != this.bPassword) {
          this.error = "Password does not match";
        } else {

          this.registerUser();

        //  this.$router.push("Login");
        }
      
    },

//POST user in Database.
    registerUser() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.rEmail,
          password: this.passwordR,
        }),
      };
      fetch(
        "https://dandd-api.herokuapp.com/api/user/register",
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            alert("User Registered");
           this.$router.push("Registrer");
            //return response.json();
          } else {
            alert(
              "Server returned " +
                response.status +
                " : " +
                response.statusText,
              (this.error = "Something went wrong")
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

            //checks if username and password match a user from the database.
    loginUser() {

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      fetch(
        "https://dandd-api.herokuapp.com/api/user/Login",
        requestOptions
      ).then((response) =>
        response
          .json()
          .then((data) => ({
            data: data,
            status: response.status,
          }))
          .then((response) => {
            if (response.data) {

              if (!response.data.token) {
                alert("Email and Password does not match");
              } else {
                //sets logged in user and token in session.
                sessionStorage.setItem(
                  "token",
                  response.data.token
                );
                sessionStorage.setItem("user_id", response.data.id);
                const token = sessionStorage.getItem("token");
                const userID = sessionStorage.getItem("user_id");
                if (token != null && userID != null) {
                  alert(this.email + " Has been logged in");
                  //emit event tells parent(app) that token is set.
                  this.$emit('eventname', token)
                  this.$router.push( {name:'Home'});
                } else {
                  alert("Something went wrong");
                }
              }
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
        //checks if username and password match a user from the database.
    }
</script>

<style>
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
    height: 80.2vh;

}
.outerBox {
    width: 25%;
    background-color: #DEDBC4;
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
    margin-top: 5px ;
    border-radius: 10px;
    height: 45px;
    font-family: charm, cursive;
    padding-left: 10px;
    font-size: 20px;
}
.btn-reg {
    background-color: #B93B3B;
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


</style>