<template>
  <div class="roller">
    <div class="top">
      <div class="overskrift">
        <h1>Brugere</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <button class="okamp" onclick="history.back()" style="cursor: pointer">
          Tilbage
        </button>
      </div>
    </div>

    <div class="card">
      <div class="amountField">
        <h2>{{ title }}</h2>
        <h3>Deltagere</h3>
        <p>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ numberOfPlayers }}/{{
            maxPlayer
          }}
        </p>
      </div>
      <h3>Ejer</h3>
      <p>{{ ownerName }}</p>
      <h3>GM/DM</h3>
      <div v-for="player in listOfPlayers" v-bind:key="player.playerID">
        <div v-if="player.role == 'GM'" class="textline">
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
        <div v-if="player.role != 'GM'" class="textline">
          <p class="playerName">{{ player.playerName }}</p>
          <img
            v-if="player.role != ''"
            class="roles"
            :src="getImgUrl(player.role)"
          />
        </div>
      </div>
      <form v-on:submit.prevent="addUser()">
        <div class="textline">
          <button class="btnAdd" type="submit">+ Tilføj spiller</button>
        </div>
        <div class="textline">
          <!--  <input type="text" /> -->
          <input list="allUsers" v-model="pickedUser" />
          <datalist id="allUsers">
            <option
              v-for="user in allUsers"
              v-bind:key="user._id"
              :value="user.username"
            >
              {{ user.username }}
            </option>
          </datalist>
        </div>
      </form>
    </div>

    <button class="btnSave">Gem</button>
  </div>
</template>
        
<script>
export default {
  created() {
    this.token = sessionStorage.getItem("token");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.campaign = JSON.parse(this.$route.params.campaign);
    if (this.token == null || this.user == null) {
      this.$router.push("Login");
    } else if (this.campaign == null) {
      this.$router.push("minekampagner");
    } else {
      this.ownerName = this.campaign.ownerName;
      this.maxPlayer = this.campaign.maxPlayer;
      this.title = this.campaign.titel;

      this.listOfPlayers = this.campaign.listOfPlayers;
      this.numberOfPlayers = this.campaign.listOfPlayers.length;

      this.getUsers();
    }
  },

  data() {
    return {
      token: null,
      user: null,
      campaign: null,
      title: null,
      ownerName: null,
      maxPlayer: null,
      numberOfPlayers: null,

      pickedUser: null,

      listOfPlayers: [],
      allUsers: [],
    };
  },

  methods: {
    getImgUrl(wish) {
      return require("../../assets/classIcon/" + wish + ".svg");
    },

    getUsers() {
      this.userID;
      fetch("https://dandd-api.herokuapp.com/api/users/", {
        method: "GET",
        headers: { "auth-token": this.token },
      }).then((response) =>
        response
          .json()
          .then((data) => ({
            data: data,
            status: response.status,
          }))
          .then((response) => {
            if (response.data) {
              this.filterUser(response.data);
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

    addUser() {
      if (this.pickedUser == "" || this.pickedUser == null) {
        //
      } else {
        this.allUsers.forEach((user) => {
          if (user.username == this.pickedUser) {
            const player = {};
            player.playerName = user.username;
            player.playerID = user._id;
            player.role = "";

            this.listOfPlayers.push(player);
            this.pickedUser = "";
            this.removeFromList(player);
          }
        });
      }
    },

    filterUser(users) {
      var i = 0;

      users.forEach((user) => {
        this.listOfPlayers.forEach((player) => {
          if (user.username != player.playerName) {
            i++;
         
          }
        });
        if (i == this.listOfPlayers.length) {
          this.allUsers.push(user);
          
        }
        i = 0;
      });
    },

    removeFromList(player) {
  
     var index = this.allUsers.map(function (user) { return user.username; }).indexOf(player.playerName);
    
      this.allUsers.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.roller {
  background-image: url(../../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-bottom: 100px;
}

.card {
  border-radius: 15px/80px;
  width: 30%;
  background-color: #dedbc4;
  color: black;
  font-size: 24px;
  padding: 10px;
  padding-left: 30px;
  margin: 0 auto;
}

.amountField {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 10px;
}

.textline {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 25%;
}

.roles {
  height: 25px;
  width: 25px;
}

.playerName {
  width: 100%;
}

.btnAdd {
  background-color: #b93b3b;
  color: white;
  border-radius: 12px;
  font-size: 20px;
  font-family: "Charm", cursive;
  margin-top: 20px;
}

.btnSave {
  margin: 20px auto;
  background-color: #b93b3b;
  color: white;
  border-radius: 12px;
  font-size: 30px;
  width: 10%;
  font-family: "Charm", cursive;
}

h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-right: 30px;
  text-transform: capitalize;
}

h2 {
  text-decoration: underline;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
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
  margin-bottom: 0;
  text-transform: capitalize;
}

input {
  width: 100%;
}
</style>