<template>
  <div class="makecampaign">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <button class="okamp" onclick="history.back()" style="cursor: pointer">
          Tilbage
        </button>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <form action="">
          <input
            class="input"
            type="text"
            placeholder="Titel"
            v-model="title"
            required
          />

          <select class="input" v-model="edition">
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

          <select class="input" v-model="numberOfPlayers">
            <option value="" disabled selected hidden>Antal Deltager</option>
            <option v-for="n in 10" :key="n" value=n>{{ n }}</option>
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
            class="input"
            type="text"
            placeholder="City"
            v-model="city"
            required
          />
          <input
            class="input"
            id="zipcode"
            type="text"
            placeholder="Postnr"
            v-model="zipcode"
            required
          />
        </form>
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

    <button
      class="okamp btnCreate"
      style="cursor: pointer"
      @click="createCampaign()"
    >
      Opret
    </button>
  </div>
</template>

<script>
export default {
  created() {
    this.token = sessionStorage.getItem("token");
    this.userID = sessionStorage.getItem("user_id");
    if (this.token == null && this.userID == null) {
      this.$router.push("Login");
    } else {
      //this.getLoginUser();
    }
  },

  data: () => ({
    userID: null,
    token: null,
    title: null,
    edition: "",
    setting: "",
    numberOfPlayers: "",
    city: null,
    zipcode: null,
    rules: null,
    notes: null,
    tools: null,
    online: false,

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
      console.log("ID = " + this.userID);
      console.log("token = " + this.token);
      console.log("title = " + this.title);
      console.log("edition = " + this.edition);
      console.log("setting = " + this.setting);
      console.log("numberOfPlayers = " + this.numberOfPlayers);
      console.log("city = " + this.city);
      console.log("zipcode = " + this.zipcode);
      console.log("rules = " + this.rules);
      console.log("notes = " + this.notes);
      console.log("tools = " + this.tools);
      console.log("online = " + this.online);

      console.log("gm = " + this.gm);
      console.log("barbarian = " + this.barbarian);
      console.log("bard = " + this.bard);
      console.log("cleric = " + this.cleric);
      console.log("druid = " + this.druid);
      console.log("fighter = " + this.fighter);
      console.log("monk = " + this.monk);
      console.log("paladin = " + this.paladin);
      console.log("sorcerer = " + this.sorcerer);
      console.log("ranger = " + this.ranger);
      console.log("rogue = " + this.rogue);
      console.log("warlock = " + this.warlock);
      console.log("wizard = " + this.wizard);
      console.log("artificer = " + this.artificer);
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