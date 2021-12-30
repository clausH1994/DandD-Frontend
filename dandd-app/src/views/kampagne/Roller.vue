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
        <h2 class="title">{{ title }}</h2>
        <h3 class="del">Deltagere</h3>
        <p class="number">{{ numberOfPlayers }}/{{ maxPlayer }}</p>
      </div>
      <h3>Ejer</h3>
      <p>{{ ownerName }}</p>
      <div class="titleline">
        <h3 class="playerName">GM/DM</h3>

        <div class="chosen"></div>
        <div class="selectors">
          <p class="label">Rolle</p>
        </div>
        <div>
          <p class="label">GM/DM</p>
        </div>
        <div class="remove">
          <p class="label">Fjern</p>
        </div>
      </div>
      <div v-for="player in listOfPlayers" v-bind:key="player.playerID">
        <div v-if="player.role == 'GM'" class="textline">
          <p class="playerName">
            {{ player.playerName }}
          </p>
          <div class="chosen">
            <img
              v-if="player.role == 'GM'"
              class="role"
              :src="getImgUrl(player.role)"
            />
          </div>
          <div class="selectors">
            <img
              v-on:click="roleChange(player, 'barbarian')"
              class="roles"
              src="../../assets/classIcon/barbarian.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'bard')"
              class="roles"
              src="../../assets/classIcon/bard.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'cleric')"
              class="roles"
              src="../../assets/classIcon/cleric.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'druid')"
              class="roles"
              src="../../assets/classIcon/druid.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'fighter')"
              class="roles"
              src="../../assets/classIcon/fighter.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'monk')"
              class="roles"
              src="../../assets/classIcon/monk.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'paladin')"
              class="roles"
              src="../../assets/classIcon/paladin.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'ranger')"
              class="roles"
              src="../../assets/classIcon/ranger.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'rogue')"
              class="roles"
              src="../../assets/classIcon/rogue.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'sorcerer')"
              class="roles"
              src="../../assets/classIcon/sorcerer.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'warlock')"
              class="roles"
              src="../../assets/classIcon/warlock.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'wizard')"
              class="roles"
              src="../../assets/classIcon/wizard.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'artificer')"
              class="roles"
              src="../../assets/classIcon/artificer.svg"
              alt=""
            />
          </div>
          <img
            v-bind:class="{ picked: player.role == 'GM' }"
            class="roles crown"
            src="../../assets/classIcon/GM.svg"
            alt=""
          />
          <div class="remove">
            <button
              v-if="player.playerID != campaign.ownerID"
              class="btnRemove"
              v-on:click="removeUser(player)"
            >
              X
            </button>
            <div
              v-if="player.playerID == campaign.ownerID"
              class="btnRemove"
            ></div>
          </div>
        </div>
      </div>
      <h3>Players</h3>
      <div v-for="player in listOfPlayers" v-bind:key="player.playerID">
        <div v-if="player.role != 'GM'" class="textline">
          <p class="playerName">{{ player.playerName }}</p>
          <div class="chosen">
            <img class="role" :src="getImgUrl(player.role)" />
          </div>
          <div class="selectors">
            <img
              v-on:click="roleChange(player, 'barbarian')"
              v-bind:class="{ picked: player.role == 'barbarian' }"
              class="roles"
              src="../../assets/classIcon/barbarian.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'bard')"
              v-bind:class="{ picked: player.role == 'bard' }"
              class="roles"
              src="../../assets/classIcon/bard.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'cleric')"
              v-bind:class="{ picked: player.role == 'cleric' }"
              class="roles"
              src="../../assets/classIcon/cleric.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'druid')"
              v-bind:class="{ picked: player.role == 'druid' }"
              class="roles"
              src="../../assets/classIcon/druid.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'fighter')"
              v-bind:class="{ picked: player.role == 'fighter' }"
              class="roles"
              src="../../assets/classIcon/fighter.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'monk')"
              v-bind:class="{ picked: player.role == 'monk' }"
              class="roles"
              src="../../assets/classIcon/monk.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'paladin')"
              v-bind:class="{ picked: player.role == 'paladin' }"
              class="roles"
              src="../../assets/classIcon/paladin.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'ranger')"
              v-bind:class="{ picked: player.role == 'ranger' }"
              class="roles"
              src="../../assets/classIcon/ranger.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'rogue')"
              v-bind:class="{ picked: player.role == 'rogue' }"
              class="roles"
              src="../../assets/classIcon/rogue.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'sorcerer')"
              v-bind:class="{ picked: player.role == 'sorcerer' }"
              class="roles"
              src="../../assets/classIcon/sorcerer.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'warlock')"
              v-bind:class="{ picked: player.role == 'warlock' }"
              class="roles"
              src="../../assets/classIcon/warlock.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'wizard')"
              v-bind:class="{ picked: player.role == 'wizard' }"
              class="roles"
              src="../../assets/classIcon/wizard.svg"
              alt=""
            />
            <img
              v-on:click="roleChange(player, 'artificer')"
              v-bind:class="{ picked: player.role == 'artificer' }"
              class="roles"
              src="../../assets/classIcon/artificer.svg"
              alt=""
            />
          </div>
          <img
            v-on:click="roleChange(player, 'GM')"
            class="roles crown"
            src="../../assets/classIcon/GM.svg"
            alt=""
          />
          <div class="remove">
            <button
              v-if="player.playerID != campaign.ownerID"
              class="btnRemove"
              v-on:click="removeUser(player)"
            >
              X
            </button>
            <div
              v-if="player.playerID == campaign.ownerID"
              class="btnRemove"
            ></div>
          </div>
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

    <button class="btnSave" v-on:click="updateCampaign(campaign)">Gem</button>
  </div>
</template>
        
<script>
import CampaignCon from "../../controller/campaignController";
import userCon from "../../controller/userController";

export default {
  async created() {
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
      this.ownerName = this.campaign.ownerName;
      this.maxPlayer = this.campaign.maxPlayer;
      this.title = this.campaign.titel;

      this.listOfPlayers = this.campaign.listOfPlayers;
      this.numberOfPlayers = this.campaign.listOfPlayers.length;

      const users = await this.userCon.readUsers(this.token);
      this.filterUser(users);
    }
  },

  data() {
    return {
      campaignCon: new CampaignCon(),
      userCon: new userCon(),

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
      if (wish == "") {
        wish = "question-solid";
      }

      return require("../../assets/classIcon/" + wish + ".svg");
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
            this.numberOfPlayers = this.listOfPlayers.length;
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
          if (user._id != player.playerID) {
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
      var index = this.allUsers
        .map(function (user) {
          return user.username;
        })
        .indexOf(player.playerName);

      this.allUsers.splice(index, 1);
    },

    removeUser(player) {
      var index = this.listOfPlayers
        .map(function (user) {
          return user.playerID;
        })
        .indexOf(player.playerID);

      this.listOfPlayers.splice(index, 1);
      this.numberOfPlayers = this.listOfPlayers.length;
      var user = {};
      user.username = player.playerName;
      user._id = player.playerID;

      this.allUsers.push(user);
    },

    roleChange(player, role) {
      player.role = role;
    },

    async updateCampaign(campaign) {
      this.campaign.listOfPlayers = this.listOfPlayers;
      const response = await this.campaignCon.updateCampaign(
        this.token,
        campaign,
        campaign._id
      );
      if (response.message == "campaign was succesfully updated") {
        alert("Roller er blevet opdateret");
        this.$router.push({
          name: "Kampagnedetails",
          params: { id: campaign._id },
        });
      } else {
        alert(response.message);
      }
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
  min-height: 90vh;
}

.card {
  border-radius: 15px/80px;
  width: 50%;
  background-color: #dedbc4;
  color: black;
  font-size: 24px;
  padding: 10px;
  padding-left: 30px;
  margin: 0 auto;
}

.title {
  width: 33%;
}

.del {
  width: 33%;
  text-align: center;
}

.number {
  text-align: right;
  width: 33%;
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

  margin-bottom: 10px;

  /* justify-content: space-between; */
  /* width: 25%; */
}

.titleline {
  display: flex;
  align-items: center;
}

.role {
  height: 25px;
  width: 25px;
}

.roles {
  height: 25px;
  width: 25px;
  align-content: center;
  cursor: pointer;
}

.playerName {
  width: 20%;
}

.chosen {
  width: 5%;
}

.selectors {
  width: 60%;
}

.remove {
  width: 20%;
}

.label {
  text-align: center;
}

.btnRemove {
  border: none;
  background-color: #dedbc4;
  color: #b93b3b;
  font-size: 20px;
  cursor: pointer;
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
  width: 150px;
  font-family: "Charm", cursive;
  cursor: pointer;
}

.picked {
  /* color: #b93b3b !important; */
  filter: invert(24%) sepia(62%) saturate(2054%) hue-rotate(337deg)
    brightness(99%) contrast(84%);
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
  width: 25%;
}

@media screen and (max-width: 1200px) {
  .card {
    width: 80%;
  }
}

@media screen and (max-width: 1000px) {
  .card {
    width: 90%;
  }
}

@media screen and (max-width: 800px) {
  .chosen {
    display: none;
  }

  .selectors {
    width: 35%;
    display: flex;
    flex-wrap: wrap;
  }
  img{
    margin-top: 10px;
  }

  .crown
  {
    margin-left: 46px;
  }
}

@media screen and (max-width: 800px) {
  
  .playerName
  {
    width: 45%;
  }

  input
  {
    width: 40%;
  }
}
</style>