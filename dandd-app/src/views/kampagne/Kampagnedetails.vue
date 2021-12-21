<template>
  <div class="kampaigndetails">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap"></div>
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
  async created() {
    
    //
    this.id = this.$route.params.id;
    //this.id = "61a77f6258295764f502c78c";
    if (this.id) {
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

  methods: {
   

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
  width: 40%;
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
}

img {
  height: 40px;
  width: 40px;
}
</style>