<template>
  <div class="redigerkampagne">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <button class="okamp" onclick="history.back()">Tilbage</button>
      </div>
    </div>
    <form v-on:submit.prevent="updateCampaign()">
      <div class="container">
        <div class="card">
          <input
            class="input"
            type="text"
            placeholder="Titel"
            v-model="title"
            required
          />

          <select class="input" v-model="edition" required>
            <option value="" disabled hidden>Edition</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="3.5">3.5</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
          </select>

          <select
            class="input"
            v-model="setting"
            placeholder="Setting"
            required
          >
            <option value="" disabled selected hidden>Setting</option>
            <option value="Modern">Modern</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Homebrew">Homebrew</option>
          </select>

          <select class="input" v-model="maxPlayer" required>
            <option value="" disabled selected hidden>Antal Deltager</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div class="online">
            <input
              type="checkbox"
              name="online"
              v-model="online"
              class="checkbox"
            /><label for="online">Online</label>
          </div>
          <input
            v-if="!online"
            class="input"
            type="text"
            placeholder="By"
            v-model="city"
          />
          <input
            v-if="!online"
            class="input"
            id="zipcode"
            type="text"
            placeholder="Postnr"
            v-model="zipcode"
          />
        </div>
        <div class="cardHolder">
          <div class="card2">
            <textarea
              class="textArea"
              v-model="rules"
              rows="7"
              placeholder="Regler:"
            ></textarea>
          </div>
          <div class="card2">
            <textarea
              class="textArea"
              v-model="notes"
              rows="7"
              placeholder="Extra noter:"
            ></textarea>
          </div>
        </div>
        <div class="cardHolder">
          <div class="card2">
            <textarea
              class="textArea"
              v-model="tools"
              rows="3"
              placeholder="Værktøjer:"
            ></textarea>
          </div>

          <div class="card2">
            <h2>Søger GM/DM</h2>
            <div class="checkboxes-placement">
              <div>
                <input
                  type="checkbox"
                  v-model="gm"
                  name="gm"
                  class="checkboxes"
                /><label class="labels" for="gm">GM/DM</label>
              </div>
            </div>

            <h2>Søger Classes</h2>
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
      <button class="okamp btnCreate" style="cursor: pointer">Redigere</button>
    </form>
  </div>
</template>

<script>
import CampaignCon from "../../controller/campaignController";

export default {
  
  //check if user is logged in 
  //set data after selected campaign
  created() {
    // dispatch to set the state isLogged from the vuex store
    this.$store.dispatch("setIsLogged");

    this.token = sessionStorage.getItem("token");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if (this.$route.params.campaign != null) {
      this.campaign = JSON.parse(this.$route.params.campaign);
    }

    if (this.campaign == null) {
      this.campaign = JSON.parse(localStorage.getItem("campaign_campaign"));
    }

    if (this.token == null || this.user == null) {
      this.$router.push("Login");
    } else if (this.campaign == null) {
      this.$router.push("minekampagner");
    } else {
      localStorage.setItem("campaign_campaign", JSON.stringify(this.campaign));

      this.title = this.campaign.titel;
      this.edition = this.campaign.edition;
      this.setting = this.campaign.setting;
      this.maxPlayer = this.campaign.maxPlayer;
      this.city = this.campaign.city;
      this.zipcode = this.campaign.zipcode;
      this.rules = this.campaign.rules;
      this.notes = this.campaign.notes;
      this.tools = this.campaign.tools;
      this.online = this.campaign.online;
      this.private = this.campaign.private;

      this.wishedClasses = this.campaign.wishedClasses;
      this.listOfPlayers = this.campaign.listOfPlayers;
      this.dates = this.campaign.dates;

      this.wishedClasses.forEach((clas) => {
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

  data: () => ({
    campaignCon: new CampaignCon(),

    user: null,
    token: null,
    campaign: null,

    title: null,
    edition: "",
    setting: "",
    maxPlayer: "",
    city: null,
    zipcode: null,
    rules: null,
    notes: null,
    tools: null,
    online: false,
    wishedClasses: [],
    listOfPlayers: [],
    dates: [],
    private: null,

    gm: false,
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
  }),

  computed: {
    isLogged() {
      // getting the isLogged state from the vuex store
      return this.$store.getters.getIsLogged;
    },
  },

  methods: {
    //makes sure there is no null data
    //creates campaign object
    //call campaignCon.updateCampaign with id to update the campaign with the campaign object in database.
    async updateCampaign() {
      this.wishedClasses = [];

      if (this.rules == null) {
        this.rules = "";
      }

      if (this.notes == null) {
        this.notes = "";
      }

      if (this.tools == null) {
        this.tools = "";
      }

      if (this.city == null || this.city == "" || this.online == true) {
        this.city = "Online";
        this.online = true;
      }

      if (this.zipcode == null || this.zipcode == "" || this.online == true) {
        this.zipcode = 0;
        this.online = true;
      }

      if (this.gm == true) {
        this.wishedClasses.push("GM");
      }
      if (this.barbarian == true) {
        this.wishedClasses.push("barbarian");
      }
      if (this.bard == true) {
        this.wishedClasses.push("bard");
      }
      if (this.cleric == true) {
        this.wishedClasses.push("cleric");
      }
      if (this.druid == true) {
        this.wishedClasses.push("druid");
      }
      if (this.fighter == true) {
        this.wishedClasses.push("fighter");
      }
      if (this.monk == true) {
        this.wishedClasses.push("monk");
      }
      if (this.paladin == true) {
        this.wishedClasses.push("paladin");
      }
      if (this.sorcerer == true) {
        this.wishedClasses.push("sorcerer");
      }
      if (this.ranger == true) {
        this.wishedClasses.push("ranger");
      }
      if (this.rogue == true) {
        this.wishedClasses.push("rogue");
      }
      if (this.warlock == true) {
        this.wishedClasses.push("warlock");
      }
      if (this.wizard == true) {
        this.wishedClasses.push("wizard");
      }
      if (this.artificer == true) {
        this.wishedClasses.push("artificer");
      }

      if (this.token != null && this.user != null) {
        const campaign = {};

        campaign.ownerID = this.user._id;
        campaign.ownerName = this.user.username;
        campaign.titel = this.title;
        campaign.edition = this.edition;
        campaign.setting = this.setting;
        campaign.maxPlayer = this.maxPlayer;
        campaign.city = this.city;
        campaign.zipcode = this.zipcode;
        campaign.rules = this.rules;
        campaign.notes = this.notes;
        campaign.tools = this.tools;
        campaign.online = this.online;
        campaign.private = this.private;

        campaign.wishedClasses = this.wishedClasses;
        campaign.dates = this.dates;
        campaign.listOfPlayers = this.listOfPlayers;

        const response = await this.campaignCon.updateCampaign(
          this.token,
          campaign,
          this.campaign._id
        );

        if (response.message == "campaign was succesfully updated") {
          alert("Kampagnen er blevet opdateret");
          this.$router.push({
            name: "Kampagnedetails",
            params: { id: this.campaign._id },
          });
        } else {
          alert(response.message);
        }
      }
    },
  },
};
</script>

<style scoped>
.redigerkampagne {
  background-image: url(../../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
}

.cardHolder {
  width: 29%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  border-radius: 35px/90px;
  width: 25%;
  background-color: #dedbc4;
  color: black;
  font-size: 24px;
  padding: 20px;
}

.card2 {
  border-radius: 35px/90px;
  width: 100%;
  background-color: #dedbc4;
  color: black;
  font-size: 24px;
  padding: 20px;
  margin-top: 10px;
}

.input {
  width: 80%;
  height: 45px;
  margin-top: 30px;
  font-size: 24px;
  border-radius: 12px;
  border: 1px solid;
}

.checkbox {
  height: 30px;
  width: 30px;
}

.checkboxes {
  height: 20px;
  width: 20px;
}

.labels {
  font-size: 20px;
  margin-left: 5px;
}

.checkboxes-area {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}

.checkboxes-placement {
  text-align: left;
  margin-left: 25px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.online {
  display: flex;
  width: 80%;
  margin: 15px auto -15px auto;
  text-align: left;
}

.textArea {
  width: 97%;
  margin: 0 auto;
  padding-left: 15px;
  font-size: 24px;
  border-radius: 20px/90px;
  border: 1px solid;
}

.btnCreate {
  margin: 100px auto 100px auto;
  font-weight: bold;
}

#zipcode {
  margin-bottom: 25px;
}

h2 {
  color: black;
  text-align: left;
  margin: 0 0 0 25px;
  font-size: 24px;
}

@media screen and (max-width: 1700px) {
  .container {
    width: 85%;
  }

  .checkboxes-area {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    width: 90%;
  }

  .card {
    width: 30%;
  }

  .card2 {
    width: 90%;
  }

  .cardHolder {
    width: 29%;
  }
}

@media screen and (max-width: 1000px) {
  .checkboxes-area {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 40%;
  }
  .cardHolder {
    width: 40%;
  }

  .container {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .cmm {
    margin-top: 40px;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 80%;
  }
  .cardHolder {
    width: 90%;
  }
  .cm {
    margin-top: 40px;
  }
}
</style>