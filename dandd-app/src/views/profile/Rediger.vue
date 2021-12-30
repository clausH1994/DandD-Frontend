<template>
  <div>
    <form v-on:submit.prevent="updateUser()">
      <div class="registrer">
        <div class="top">
          <div class="overskrift"><h1>Redigere Profil</h1></div>
          <div class="filler"></div>
          <div class="knap"></div>
        </div>
        <div class="placement">
          <div class="outerBox">
            <div class="register">
              <h3>Rediger Profil</h3>
              <input v-model="username" placeholder="Brugernavn" required />
              <input v-model="name" placeholder="Navn" />
              <input v-model="city" placeholder="By" required />
              <input v-model="postNr" placeholder="Post nr" required />
              <!--     <input
                type="date"
                v-model="dob"
                id="birthday"
                name="Date of Birth"
                required
              /> -->
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
                    v-model="bard"
                    name=""
                    id=""
                  /><label class="labels">Bard</label>
                </div>

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
                    v-model="druid"
                    name=""
                    id=""
                  /><label class="labels">Druid</label>
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
              </div>

              <div class="checkboxes-placement">
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
                    v-model="paladin"
                    name=""
                    id=""
                  /><label class="labels">Paladin</label>
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
                    v-model="rogue"
                    name=""
                    id=""
                  /><label class="labels">Rogue</label>
                </div>
              </div>

              <div class="checkboxes-placement">
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
                    v-model="warlock"
                    name=""
                    id=""
                  /><label class="labels">Warlock</label>
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
              </div>
            </div>
          </div>
        </div>
        <button class="okamp" type="submit" style="cursor: pointer">
          Rediger
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import UserCon from "../../controller/userController";

export default {
  // run when page is created and check if the user are logged in.
  // calls getLoginUser()
  created() {
    if (this.$route.params.user != null) {
      this.user = JSON.parse(this.$route.params.user);
    }

    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem("user_user"));
    }

    this.token = sessionStorage.getItem("token");
    this.userID = sessionStorage.getItem("user_id");
    if (this.token == null && this.userID == null) {
      this.$router.push("Login");
    } else {
      //
      localStorage.setItem("user_user", JSON.stringify(this.user));
      this.username = this.user.username;
      this.checkUsername = this.user.username;
      this.name = this.user.name;
      this.city = this.user.city;
      this.postNr = this.user.zipcode;

      this.user.roles.forEach((role) => {
        if (role == "GM") {
          this.gm = true;
        }

        if (role == "player") {
          this.player = true;
        }
      });

      this.user.setting.forEach((setting) => {
        if (setting == "modern") {
          this.modern = true;
        }

        if (setting == "sci-fi") {
          this.scifi = true;
        }

        if (setting == "fantasy") {
          this.fantasy = true;
        }

        if (setting == "homebrew") {
          this.homebrew = true;
        }
      });

      this.user.classes.forEach((clas) => {
        if (clas == "GM") {
          this.gm = true;
        }

        if (clas == "barbarian") {
          this.barbarian = true;
        }

        if (clas == "bard") {
          this.bard = true;
        }
        if (clas == "cleric") {
          this.cleric = true;
        }
        if (clas == "druid") {
          this.druid = true;
        }
        if (clas == "fighter") {
          this.fighter = true;
        }
        if (clas == "monk") {
          this.monk = true;
        }
        if (clas == "paladin") {
          this.paladin = true;
        }
        if (clas == "sorcerer") {
          this.sorcerer = true;
        }
        if (clas == "ranger") {
          this.ranger = true;
        }
        if (clas == "rogue") {
          this.rogue = true;
        }

        if (clas == "warlock") {
          this.warlock = true;
        }

        if (clas == "wizard") {
          this.wizard = true;
        }

        if (clas == "artificer") {
          this.artificer = true;
        }
      });
    }
  },

  data() {
    return {
      userCon: new UserCon(),

      user: null,
      username: null,
      checkUsername: null,
      name: null,
      city: null,
      postNr: null,
      // dob:null,
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

  methods: {
    async updateUser() {
      // if (this.dob != null) {
      //   var today = new Date();
      //   var birthdate = new Date(this.dob);
      //   var age = today.getFullYear() - birthdate.getFullYear();
      //   var m = today.getMonth() - birthdate.getMonth();
      //   if (m < 0 || (m == 0 && today.getDate() < birthdate.getDate())) {
      //     age--;
      //   }
      // }

      this.roles = [];
      this.classes = [];
      this.setting = [];

      var age = this.user.age;

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

      if(this.username == this.checkUsername)
      {
        this.username = null
      }

      const user = {};

      user.username = this.username;
      user.name = this.name;
      user.age = age;
      user.city = this.city;
      user.postNr = this.postNr;

      user.roles = this.roles;
      user.classes = this.classes;
      user.setting = this.setting;

      const response = await this.userCon.updateUser(user, this.userID);
      if (response.message == "User was succesfully updated") {
        alert("profil er blevet redigeret");
        this.$router.push("profil");
      } else {
        alert(response.message);
      }
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
  min-height: 90vh;
}

.register {
  color: black;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
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
  margin-top: 50px;
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
  flex-wrap: wrap;
}

.checkboxes-placement {
  text-align: left;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media screen and (max-width: 1200px) {
  .outerBox {
    width: 50%;
  }

  .outerBox-2 {
    width: 50%;
  }

  .spacer {
    width: 10%;
  }

  .placement {
    width: 80%;
  }
}

@media screen and (max-width: 1000px) {
  .outerBox {
    width: 50%;
  }

  .outerBox-2 {
    width: 50%;
  }

  .spacer {
    width: 5%;
  }

  .placement {
    width: 90%;
  }
}

@media screen and (max-width: 800px) {
  .placement {
    flex-wrap: wrap;
    justify-content: center;
  }

  .spacer {
    display: none;
  }

  .outerBox {
    margin-bottom: 20px;
     width: 80%;
  }

  .outerBox-2 {
    width: 80%;
  }
}


@media screen and (max-width: 800px) {
  
  .outerBox {
   
     width: 90%;
  }

  .outerBox-2 {
    width: 90%;
  }
}
</style>