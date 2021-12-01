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
            <p>4/5{{ numberOfplayers }}/{{ maxPlayers }}</p>
          </div>
          <h3>Ejer</h3>
          <p> {{ ownerName }}</p>
          <h3>GM/DM</h3>
          <p>SlayerFire22</p>
          <h3>Players</h3>
          <div class="textline">
            <p>anotherPlayer1</p>
          </div>
          <div class="textline">
            <p>anotherPlayer2</p>
          </div>
          <div class="textline">
            <p>anotherPlayer3</p>
          </div>
        </div>
        <div class="card bottomCards">
          <h3>Lokation</h3>
          <p v-if="!online"> {{ city }}, {{ zipcode }}</p>
          <p v-if="online"> online</p>
        </div>
      </div>

      <div class="cardHolder">
        <div class="card">
          <h2>{{titel}}</h2>
          <div class="textline">
            <h3>Edition:</h3>
            <p> {{ edition }} edition</p>
          </div>
          <div class="textline">
            <h3>Setting:</h3>
            <p> {{ setting }}</p>
          </div>

          <h3>Ønskede Classes:</h3>
        </div>
        <div class="card bottomCards">
          <h3>Regler:</h3>
          <p>{{ rules }}</p>
        </div>
      </div>

      <div class="cardHolder">
        <div class="card">
          <h3>Ekstra Noter::</h3>
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
export default {
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.getCampaign();
    } else {
      // this.$router.push("/")
    }
  },

  data() {
    return {
      id: null,
      titel: null,
      ownerName: null,
      city: null,
      zipcode: null,
      edition: null,
      maxPlayers: null,
      numberOfplayers: null,
      setting: null,
      rules: null,
      notes: null,
      tools: null,
      online: false
    };
  },

  methods: {
    //gets logged in user from database.
    getCampaign() {
      fetch("https://dandd-api.herokuapp.com/api/campaigns/" + this.id, {
        method: "GET",
      }).then((response) =>
        response
          .json()
          .then((data) => ({
            data: data,
            status: response.status,
          }))
          .then((response) => {
            if (response.data) {
              console.log(response.data);
              this.titel = response.data.titel;
              this.ownerName = response.data.ownerName;
              this.city = response.data.city;
              this.zipcode = response.data.zipcode;
              this.edition = response.data.edition;
              this.maxPlayers = response.data.maxPlayers;
              this.numberOfplayers = response.data.numberOfplayers;
              this.setting = response.data.setting;
              this.rules = response.data.rules;
              this.notes = response.data.notes;
              this.tools = response.data.rules;
              this.online = response.data.online;
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

.amountField {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 10px;
}

h2 {
  color: black;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: underline;
  text-align: left;
  text-transform: capitalize ;
}

h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-right: 30px;
  text-transform: capitalize ;
}

p {
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize ;
}
</style>