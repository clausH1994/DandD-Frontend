<template>
  <div class="minekampagner">
    <div class="top">
      <div class="overskrift">
        <h1>Mine Kampagner</h1>
      </div>

      <div class="filler"></div>

      <div class="knap">
        <button class="okamp" onclick="history.back()">Tilbage</button>
      </div>
    </div>

    <div class="bar">
      <button
        class="bar-item tst-button tablink"
        v-on:click="openKam($event, 't-kam')"
      >
        Tilmeldte Kampanger
      </button>
      <button
        class="bar-item tst-button tablink paper"
        v-on:click="openKam($event, 'e-kam')"
      >
        Egne Kampagner
      </button>
    </div>

    <div class="content">
      <div id="e-kam" class="Campaign paper">
        <table v-for="campaign in owned" v-bind:key="campaign._id">
          <tr>
            <td>
              <div class="kam-text">
                <p>{{ campaign.titel }}</p>
              </div>
            </td>
            <td>
              <div class="kam-text">
                <p>af {{ campaign.ownerName }}</p>
              </div>
            </td>
            <td>
              <div class="kam-text">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked="campaign.private"
                  v-model="campaign.private"
                  v-on:click="updatePrivate(campaign)"
                /><label>Privat</label>
              </div>
            </td>
            <td>
              <button class="kam-btn" v-on:click="deleteCampaign(campaign._id)">
                Delete
              </button>
              <button class="kam-btn" v-on:click="roles(campaign)">
                Roller
              </button>
              <button class="kam-btn" v-on:click="calendar(campaign._id)">
                Kalender
              </button>
              <button class="kam-btn" v-on:click="edit(campaign)">
                Rediger
              </button>
            </td>
          </tr>
        </table>
      </div>

      <div id="t-kam" class="Campaign paper" style="display: none">
        <table v-for="campaign in added" v-bind:key="campaign._id">
          <tr>
            <td>
              <p>{{ campaign.titel }}</p>
            </td>
            <td>
              <p>af {{ campaign.ownerName }}</p>
            </td>
            <td>
              <p v-if="campaign.private">Privat</p>
            </td>
            <td>
              <button class="kam-btn" v-on:click="leaveCampaign(campaign)">
                Forlad
              </button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Kontakt</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <button class="okamp">Opret</button>
    </div>
  </div>
</template>

<script>
import CampaignCon from "../../controller/campaignController";

export default {
  data() {
    return {
      campaignCon: new CampaignCon(),

      campaigns: [],
      owned: [],
      userID: null,
      token: null,
      added: [],
      listOfPlayers: [],
    };
  },

  methods: {
    async getCampaigns() {
      this.campaigns = await this.campaignCon.readCampaigns();
      this.filterCampaigns();
    },

    async updatePrivate(campaign) {
      campaign.private = !campaign.private;

      const response = await this.campaignCon.updateCampaign(
        this.token,
        campaign,
        campaign._id
      );

      if (response == "campaign was succesfully updated") {
        //alert("Privat status opdateret");
      } else {
        alert(response.message);
      }
    },

    filterCampaigns() {
      this.campaigns.forEach((campaign) => {
        if (this.userID == campaign.ownerID) {
          this.owned.push(campaign);
        }

        campaign.listOfPlayers.forEach((player) => {
          if (this.userID == player.playerID) {
            if (this.userID != campaign.ownerID) {
              this.added.push(campaign);
            }
          }
        });
      });
    },

    async leaveCampaign(campaign) {
      if (confirm("Er du sikker på du vil forlade denne kampagne")) {
        const playerList = campaign.listOfPlayers;
        var index = playerList
          .map(function (user) {
            return user.playerID;
          })
          .indexOf(this.userID);

        playerList.splice(index, 1);

        campaign.listOfPlayers = playerList;

        const response = await this.campaignCon.updateCampaign(
          this.token,
          campaign,
          campaign._id
        );
        if (response.message == "campaign was succesfully updated") {
          this.owned = [];
          this.added = [];
          this.getCampaigns();
        } else {
          alert(response.message);
        }
      }
    },

    async deleteCampaign(_id) {
      if (confirm("Er du sikker på du vil slette denne kampagne")) {
        const response = await this.campaignCon.deleteCampaign(this.token, _id);
        if (response.message == "Campaign was succesfully deleted") {
          alert("Kampagnen er slettet");
          this.owned = [];
          this.added = [];
          this.getCampaigns();
        } else {
          alert(response.message);
        }
      }
    },

    openKam(evt, tabName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("Campaign");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" paper", "");
      }
      document.getElementById(tabName).style.display = "inline-block";
      evt.currentTarget.className += " paper";
    },

    roles(campaign) {
      this.$router.push({
        name: "Roller",
        params: { campaign: JSON.stringify(campaign) },
      });
    },
    calendar(_id) {
      this.$router.push({
        name: "Kalender",
        params: { id: _id },
      });
    },
    edit(campaign) {
      this.$router.push({
        name: "Redigerkampagne",
        params: { campaign: JSON.stringify(campaign) },
      });
    },
  },

  created() {
    this.token = sessionStorage.getItem("token");
    this.userID = sessionStorage.getItem("user_id");
    if (this.userID == null) {
      this.$router.push("/login");
    } else {
      this.getCampaigns();
    }
  },
};
</script>

<style>
.minekampagner {
  background-image: url(../../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.bar {
  margin: 0 auto;
  text-align: left;
  width: 65%;
}

.content {
  white-space: nowrap;
  margin-bottom: 50px;
}

.Campaign {
  display: inline-block;
  width: 65%;
  padding: 20px;
  border-radius: 20px;
}

.paper,
.hover-paper:hover {
  color: #000 !important;
  background-color: #dedbc4 !important;
}

.dndred,
.hover-red:hover {
  color: #fff !important;
  background-color: #b93b3b !important;
}

table {
  width: 100%;
  table-layout: auto;
  border-top: solid 1px;
}

table:first-child {
  margin-top: 20px;
}

table:last-child {
  margin-bottom: 20px;
  border-bottom: solid 1px;
}

.kam-btn {
  background-color: #b93b3b;
  color: white;
  font-family: "Charm", cursive;
  border-radius: 10px;
  border: none;
  float: right;
  padding: 5px 15px;
  margin: 0 10px 0 10px;
}

.tst-btn,
.tst-button {
  font-family: charm;
  border: none;
  display: inline-block;
  padding: 8px 16px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  background-color: #b93b3b;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}
</style>