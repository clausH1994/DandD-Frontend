<template>
  <div class="makecampaign">
    <form v-on:submit.prevent="createCampaign()">
      <div class="top">
        <div class="overskrift">
          <h1>Kampagner</h1>
        </div>
        <div class="filler"></div>
        <div class="knap">
          <button
            class="okamp"
            onclick="history.back()"
            style="cursor: pointer"
          >
            Tilbage
          </button>
        </div>
      </div>
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
            placeholder="City"
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

          <div class="card2" >
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

      <button class="okamp btnCreate" style="cursor: pointer">Opret</button>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    this.token = sessionStorage.getItem("token");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if (this.token == null || this.user == null) {
      this.$router.push("Login");
    } else {
      //
    }
  },

  data: () => ({
    user: null,
    token: null,

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

  methods: {
    createCampaign() {
      if (this.rules == null) {
        this.rules = "";
      }

      if (this.notes == null) {
        this.notes = "";
      }

      if (this.tools == null) {
        this.tools = "";
      }

      if (this.city == null) {
        this.city = "";
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

      if(this.user)
      {
        var player = {}
        player.playerID = this.user._id;
        player.playerName = this.user.username;
        player.role = "GM";

        this.listOfPlayers.push(player);
      }

      if (this.token != null && this.user != null) {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": this.token,
          },
          body: JSON.stringify({
            ownerID: this.user._id,
            ownerName: this.user.username,
            titel: this.title,
            edition: this.edition,
            setting: this.setting,
            maxPlayer: this.maxPlayer,
            city: this.city,
            zipcode: this.zipcode,
            rules: this.rules,
            notes: this.notes,
            tools: this.tools,
            online: this.online,
            private: false,

            wishedClasses: this.wishedClasses,
            dates: this.dates,
            listOfPlayers: this.listOfPlayers,
          }),
        };
        fetch(
          "https://dandd-api.herokuapp.com/api/campaigns/",
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
                this.$router.push({
                  name: 'Kampagnedetails',
                  params: { id: response.data[0]._id }
                });
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
      }
    },
  },
};
</script>

<style scoped>
.makecampaign {
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
</style> 