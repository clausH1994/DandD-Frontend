<template>
  <div>
    <form v-on:submit.prevent="updateUser()">
      <div class="registrer">
        <div class="top">
          <div class="overskrift"></div>
          <div class="filler"></div>
          <div class="knap"></div>
        </div>
        <div class="placement">
          <div class="outerBox">
            <div class="register">
              <h3>Opret Profil</h3>
              <input v-model="username" placeholder="Brugernavn" required />
              <input v-model="name" placeholder="Navn" />
              <input v-model="city" placeholder="By" required />
              <input v-model="postNr" placeholder="Post nr" required />
              <input
                type="date"
                v-model="dob"
                id="birthday"
                name="Date of Birth"
                required
              />
              <div class="setting-1">
                <input type="checkbox" v-model="gm" name="" id="" /><label
                  >GM/DM</label
                >
                <input type="checkbox" v-model="player" name="" id="" /><label
                  >Player</label
                >
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="outerBox-2">
            <div class="register">
              <h3>Præferencer</h3>
              <p>Foretrukne Settings</p>
              <div class="setting-1">
                <div class="setting-1">
                  <input type="checkbox" v-model="modern" name="" id="" /><label
                    >Modern</label
                  >
                </div>
                <div class="setting-1">
                  <input type="checkbox" v-model="scifi" name="" id="" /><label
                    >Sci-fi</label
                  >
                </div>
              </div>
              <div class="setting-1">
                <div class="setting-1">
                  <input
                    type="checkbox"
                    v-model="fantasy"
                    name=""
                    id=""
                  /><label>Fantasy</label>
                </div>
                <div class="setting-1">
                  <input
                    type="checkbox"
                    v-model="homebrew"
                    name=""
                    id=""
                  /><label>Homebrew</label>
                </div>
              </div>

              <p>Foretrukne Class</p>
              <div class="checkboxes-area">
                <div class="checkboxes-placement">
                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="barbarian"
                      name=""
                      id=""
                    /><label class="labels">Barbarian</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="druid"
                      name=""
                      id=""
                    /><label class="labels">Druid</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="paladin"
                      name=""
                      id=""
                    /><label class="labels">Paladin</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="sorcerer"
                      name=""
                      id=""
                    /><label class="labels">Sorcerer</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="artificer"
                      name=""
                      id=""
                    /><label class="labels">Artificer</label>
                  </div>
                </div>

                <div class="checkboxes-placement">
                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="bard"
                      name=""
                      id=""
                    /><label class="labels">Bard</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="fighter"
                      name=""
                      id=""
                    /><label class="labels">Fighter</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="ranger"
                      name=""
                      id=""
                    /><label class="labels">Ranger</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="warlock"
                      name=""
                      id=""
                    /><label class="labels">Warlock</label>
                  </div>
                </div>

                <div class="checkboxes-placement">
                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="cleric"
                      name=""
                      id=""
                    /><label class="labels">Cleric</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="monk"
                      name=""
                      id=""
                    /><label class="labels">Monk</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="rogue"
                      name=""
                      id=""
                    /><label class="labels">Rogue</label>
                  </div>

                  <div>
                    <input
                      class="checkboxes"
                      type="checkbox"
                      v-model="wizard"
                      name=""
                      id=""
                    /><label class="labels">Wizard</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="okamp" type="submit" style="cursor: pointer">
          Opret
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import UserCon from "../../controller/userController";

export default {
  userCon: new UserCon(),

  data() {
    return {
      username: null,
      name: null,
      city: null,
      postNr: null,
      dob: null,
      gm: false,
      player: false,

      modern: false,
      scifi: false,
      fantasy: false,
      homebrew: false,

      barbarian: false,
      bard: false,
      cleric: false,
      druid: false,
      fighter: false,
      monk: false,
      paladin: false,
      sorcerer: false,
      ranger: false,
      rogue: false,
      warlock: false,
      wizard: false,
      artificer: false,
      tempID: null,
      password: null,
      email: null,

      roles: [],
      classes: [],
      setting: [],
    };
  },

  created() {
    this.tempID = sessionStorage.getItem("tempID");
    this.email = sessionStorage.getItem("email");
    this.password = sessionStorage.getItem("pass");
    if (this.tempID == null) {
      this.$router.push("login");
    }
  },

  methods: {
    async updateUser() {
      if (this.dob != null) {
        var today = new Date();
        var birthdate = new Date(this.dob);
        var age = today.getFullYear() - birthdate.getFullYear();
        var m = today.getMonth() - birthdate.getMonth();
        if (m < 0 || (m == 0 && today.getDate() < birthdate.getDate())) {
          age--;
        }
      }

      if (this.name == null) {
        this.name = "";
      }

      if (this.gm == true) {
        this.roles.push("GM");
      }

      if (this.player == true) {
        this.roles.push("player");
      }

      if (this.modern == true) {
        this.setting.push("modern");
      }

      if (this.scifi == true) {
        this.setting.push("sci-fi");
      }

      if (this.fantasy == true) {
        this.setting.push("fantasy");
      }

      if (this.homebrew == true) {
        this.setting.push("homebrew");
      }

      if (this.barbarian == true) {
        this.classes.push("barbarian");
      }
      if (this.bard == true) {
        this.classes.push("bard");
      }
      if (this.cleric == true) {
        this.classes.push("cleric");
      }
      if (this.druid == true) {
        this.classes.push("druid");
      }
      if (this.fighter == true) {
        this.classes.push("fighter");
      }
      if (this.monk == true) {
        this.classes.push("monk");
      }
      if (this.paladin == true) {
        this.classes.push("paladin");
      }
      if (this.sorcerer == true) {
        this.classes.push("sorcerer");
      }
      if (this.ranger == true) {
        this.classes.push("ranger");
      }
      if (this.rogue == true) {
        this.classes.push("rogue");
      }
      if (this.warlock == true) {
        this.classes.push("warlock");
      }
      if (this.rogue == true) {
        this.classes.push("wizard");
      }
      if (this.artificer == true) {
        this.classes.push("artificer");
      }

      const user = {};

      user.name = this.name;
      user.age = age;
      user.city = this.city;
      user.postNr = this.postNr;

      user.roles = this.roles;
      user.classes = this.classes;
      user.setting = this.setting;

      const response = await this.userCon.updateUser(user, this.tempID);
      if (response.message == "User was succesfully updated") {
        alert("profil er blevet oprettet");
        this.loginUser();
      } else {
        alert(response.message);
      }
    },

    loginUser() {
      sessionStorage.clear();

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
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("user", response.data.user);
                sessionStorage.setItem("user_id", response.data.id);
                const token = sessionStorage.getItem("token");
                const userID = sessionStorage.getItem("user_id");
                if (token != null && userID != null) {
                  alert(this.email + " Has been logged in");
                  //emit event tells parent(app) that token is set.
                  this.$emit("eventname", token);
                  this.$router.push({ name: "Home" });
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
};
</script>

<style scoped>
.placement {
  width: 65%;
  margin: 0 auto;
  display: flex;
}

.spacer {
  width: 30%;
}

.container {
  display: flex;
  justify-content: space-between;
  /* flex-flow: row wrap; */
  flex-direction: column;
}

.registrer {
  background-image: url(../../assets/profilebackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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
  border-radius: 5px;
  height: 30px;
  font-family: charm, cursive;
  padding-left: 5px;
  font-size: 15px;
}

.outerBox {
  width: 35%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 10px;
  height: 350px;
}
.outerBox-2 {
  width: 35%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 10px;
  height: 450px;
}

.setting-1 {
  display: flex;
  font-size: 15px;
  align-items: center;
  margin-left: 3px;
}

p {
  text-align: left;
}

.okamp {
  margin-bottom: 30px;
}

.checkboxes {
  height: 15px;
  width: 15px;
}

.labels {
  font-size: 15px;
  margin-left: 5px;
}

.checkboxes-area {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}

.checkboxes-placement {
  text-align: left;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>