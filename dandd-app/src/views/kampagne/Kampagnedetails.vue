<template>
  <div class="kampaigndetails">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <button class="okamp" onclick="history.back()">Tilbage</button>
      </div>
    </div>

    <div class="container">
      <div class="cardHolder">
        <div class="card">
          <div class="amountField">
            <p></p>
            <h3>Deltagere</h3>
            <p>{{ numberOfPlayers }}/{{ maxPlayer }}</p>
          </div>
          <h3>Ejer</h3>
          <p>{{ ownerName }}</p>
          <h3>GM/DM</h3>
          <div v-for="player in listOfPlayers" v-bind:key="player.playerID">
            <div v-if="player.role == 'GM'" class="textline2">
              <p class="playerName">
                {{ player.playerName }}
              </p>
              <img
                v-if="player.role == 'GM'"
                class="roles"
                :src="getImgUrl(player.role)"
              />
            </div>
          </div>
          <h3>Players</h3>
          <div v-for="player in listOfPlayers" v-bind:key="player.playerID">
            <div v-if="player.role != 'GM'" class="textline2">
              <p class="playerName">{{ player.playerName }}</p>
              <img class="roles" :src="getImgUrl(player.role)" />
            </div>
          </div>
        </div>
        <div class="card bottomCards">
          <h3>Lokation</h3>
          <p v-if="!online">{{ city }}, {{ zipcode }}</p>
          <p v-if="online">online</p>
        </div>
      </div>

      <div class="cardHolder">
        <div class="card">
          <h2>{{ titel }}</h2>
          <div class="textline">
            <h3>Edition:</h3>
            <p>{{ edition }} edition</p>
          </div>
          <div class="textline">
            <h3>Setting:</h3>
            <p>{{ setting }}</p>
          </div>

          <h3>Ønskede Classes:</h3>
          <div class="wishes">
            <div
              class="wishBox"
              v-for="wish in wishedClasses"
              v-bind:key="wish.id"
            >
              <img :src="getImgUrl(wish)" v-bind:alt="wish" />
            </div>
          </div>
        </div>
        <div class="card bottomCards">
          <h3>Regler:</h3>
          <p>{{ rules }}</p>
        </div>
      </div>

      <div class="cardHolder">
        <div class="card">
          <h3>Ekstra Noter:</h3>
          <p>
            {{ notes }}
          </p>
        </div>
        <div class="card bottomCards">
          <h3>Værktøjer:</h3>
          <p>{{ tools }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import CampaignCon from "../../controller/campaignController";

export default {
  //get campaign and set datas after the campaign's data
  async created() {
    // dispatch to set the state isLogged from the vuex store
    this.$store.dispatch("setIsLogged");

    this.id = this.$route.params.id;
    if (this.id == null) {
      this.id = localStorage.getItem("campaign_id");
    }

    if (this.id) {
      localStorage.setItem("campaign_id", this.id);

      const campaign = await this.campaignCon.readCampaignById(this.id);

      this.titel = campaign.titel;
      this.ownerName = campaign.ownerName;
      this.city = campaign.city;
      this.zipcode = campaign.zipcode;
      this.edition = campaign.edition;
      this.maxPlayer = campaign.maxPlayer;
      this.numberOfplayers = campaign.numberOfplayers;
      this.setting = campaign.setting;
      this.rules = campaign.rules;
      this.notes = campaign.notes;
      this.tools = campaign.tools;
      this.online = campaign.online;

      this.wishedClasses = campaign.wishedClasses;
      this.listOfPlayers = campaign.listOfPlayers;
      this.numberOfPlayers = this.listOfPlayers.length;
    } else {
      this.$router.push("/");
    }
  },

  data() {
    return {
      campaignCon: new CampaignCon(),
      id: null,
      titel: null,
      ownerName: null,
      city: null,
      zipcode: null,
      edition: null,
      maxPlayer: null,
      numberOfPlayers: null,
      setting: null,
      rules: null,
      notes: null,
      tools: null,
      online: false,

      wishedClasses: [],
      listOfPlayers: [],
    };
  },

  computed: {
    isLogged() {
      // getting the isLogged state from the vuex store
      return this.$store.getters.getIsLogged;
    },
  },

  methods: {
    //returns image which equals variable wish in name from assets
    getImgUrl(wish) {
      if (wish == "") {
        wish = "question-solid";
      }
      return require("../../assets/classIcon/" + wish + ".svg");
    },
  },
};
</script>

<style scoped>
.kampaigndetails {
  background-image: url(../../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 90vh;
}

.container {
  display: flex;
  margin: 0 auto;
  width: 75%;
}

.card {
  border-radius: 15px/80px;
  width: 80%;
  background-color: #dedbc4;
  color: black;
  font-size: 24px;
  padding: 10px;
  padding-left: 30px;
  min-height: 200px;
  max-height: 300px;
  overflow: auto;
  margin: 0 auto;
}

.bottomCards {
  margin: 15px auto 300px;
}

.cardHolder {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.textline {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.textline2 {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
}

.amountField {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 10px;
}

.wishes {
  display: flex;
}

.wishBox {
  margin-right: 5px;
  margin-top: 5px;
}

.roles {
  height: 25px;
  width: 25px;
}

.playerName {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
}

h2 {
  color: black;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: underline;
  text-align: left;
  text-transform: capitalize;
  word-break: break-all;
}

h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-right: 30px;
  text-transform: capitalize;
}

p {
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  text-transform: capitalize;
  word-break: break-all;
}

img {
  height: 25px;
  width: 25px;
}

@media screen and (max-width: 1500px) {
  .textline2 {
    width: 55%;
  }
  .container {
    width: 100%;
    justify-content: space-around;
  }
}

@media screen and (max-width: 1200px) {
  .textline2 {
    width: 65%;
  }
  .cardHolder {
    width: 40%;
  }
}

@media screen and (max-width: 700px) {
  .container {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .card {
    width: 95%;
  }

  .cardHolder {
    height: 500px;
  }

  p {
    margin-right: 5px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .cardHolder {
    height: 480px;
    margin: 0 auto;
    width: 70%;
  }
}

@media screen and (max-width: 400px) {
  .cardHolder {
    height: 480px;
    margin: 0 auto;
    width: 80%;
  }
}
</style>