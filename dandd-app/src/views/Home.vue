<template>
  <div class="home">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <router-link v-if="isLogged" to="/makecampaign">
          <button class="okamp">Opret Kampagne</button>
        </router-link>
      </div>
    </div>

    <div class="contenthome">
      <div class="filter" id="filterBox">
        <h3>Advanced Filter</h3>
        <input
          class="inputfelt"
          type="text"
          v-model="filterCampaigns"
          placeholder="Søg"
        /><br />
        <div class="checkboxes">
          <h4 class="check" @click="openEdition = !openEdition">Edition</h4>
          <div class="edition" v-if="openEdition">
            <div v-for="option in edition" v-bind:key="option">
              <input
                :id="option"
                type="checkbox"
                :value="option"
                v-model="checked.edition"
              />
              <label :for="option">{{ option }}</label>
            </div>
          </div>
        </div>
        <div class="checkboxes">
          <h4 class="check" @click="openSetting = !openSetting">
            Fortrukne Setting
          </h4>
          <div class="setting" v-if="openSetting">
            <div v-for="option in setting" v-bind:key="option">
              <input
                :id="option"
                type="checkbox"
                :value="option"
                v-model="checked.setting"
              />
              <label :for="option">{{ option }}</label>
            </div>
          </div>
        </div>
        <div class="checkboxes">
          <h4 class="check" @click="openClasses = !openClasses">
            Ønskede Classes
          </h4>
          <div class="classes" v-if="openClasses">
            <div v-for="option in wishedClasses" v-bind:key="option">
              <input
                :id="option"
                type="checkbox"
                :value="option"
                v-model="checked.wishedClasses"
              />
              <label :for="option">{{ option }}</label>
            </div>
          </div>
        </div>

        <h4>Lokation</h4>
        <input
          class="inputfelt"
          type="text"
          v-model="filterLocations"
          placeholder=" Søg Lokation"
        />
      </div>

      <div class="maincontent">
        <div
          class="campaigncard"
          v-for="campaign in sortedCampaigns"
          v-bind:key="campaign.id"
          v-show="
            visible(campaign.edition, campaign.setting, campaign.wishedClasses)
          "
        >
          <router-link
            class="link"
            :to="{ name: 'Kampagnedetails', params: { id: campaign._id } }"
          >
            <h3 v-if="campaign.titel.length < 25">{{ campaign.titel }}</h3>
            <h3 v-else>{{ campaign.titel.substring(0, 25) + "..." }}</h3>
            <ul class="campcard">
              <li>
                <div class="test">
                  <div class="test1">
                    <p class="ccp"><b>Ejer:</b></p>
                  </div>
                  <div class="test2">
                    <p class="ccpp" v-if="campaign.ownerName.length < 15">
                      {{ campaign.ownerName }}
                    </p>
                    <p class="ccpp" v-else>
                      {{ campaign.ownerName.substring(0, 15) + "..." }}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="test">
                  <div class="test1">
                    <p class="ccp"><b>Regler:</b></p>
                  </div>
                  <div class="test2">
                    <p class="ccpp" v-if="campaign.rules.length < 40">
                      {{ campaign.rules }}
                    </p>
                    <p class="ccpp" v-else>
                      {{ campaign.rules.substring(0, 40) + "..." }}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="test">
                  <div class="test1">
                    <p class="ccp"><b>Setting:</b></p>
                  </div>
                  <div class="test2">
                    <p class="ccpp">{{ campaign.setting }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="test">
                  <div class="test1">
                    <p class="ccp"><b>Edition:</b></p>
                  </div>
                  <div class="test2">
                    <p class="ccpp">{{ campaign.edition }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="camproller">
                  <p class="ccp"><b>Ønskede Classes:</b></p>
                  <div
                    class="wishedclassicons"
                    v-for="wish in campaign.wishedClasses"
                    v-bind:key="wish.id"
                  >
                    <img :src="getImgUrl(wish)" v-bind:alt="wish" />
                  </div>
                </div>
              </li>
              <li>
                <div class="test">
                  <div class="test1">
                    <p class="ccp"><b>Lokation:</b></p>
                  </div>
                  <div class="test3">
                    <p class="ccp" v-if="campaign.zipcode != 0">
                      {{ campaign.zipcode }}
                    </p>
                    <p class="ccpp">{{ campaign.city }}</p>
                  </div>
                  <div class="test4">
                    <p class="ccp" v-if="campaign.zipcode != 0">
                      {{ campaign.zipcode }}
                    </p>
                    <p class="ccpp">{{ campaign.city }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import CampaignCon from "../controller/campaignController";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      campaignCon: new CampaignCon(),
      openEdition: false,
      openSetting: false,
      openClasses: false,
      campaigns: [],
      sortedCampaigns: [],
      checked: {
        edition: [],
        setting: [],
        wishedClasses: [],
      },
      filterCampaigns: "",
      filterLocations: "",
      
    };
  },

  computed: {
    // Setting the catergory for the available funktion in methods and sorts the results in alfabetic order
    edition: function () {
      return this.available("edition").sort((a, b) => (a < b ? -1 : 1));
    },
    setting: function () {
      return this.available("setting").sort((a, b) => (a < b ? -1 : 1));
    },
    wishedClasses: function () {
      return this.available("wishedClasses").sort((a, b) => (a < b ? -1 : 1));
    },

    // getting the isLogged state from the vuex store
    isLogged() {
      return this.$store.getters.getIsLogged;
    },
  },

  methods: {
    // uses the campaign controller to get the list of campaigns from the database
    async getCampaigns() {
      this.campaigns = await this.campaignCon.readCampaigns();
      const privateCampaigns = [];
      // checks if the campaigns have the private boolean set to false to create list without campaigns marked as private
      this.campaigns.forEach((campaign) => {
        if (campaign.private == false) {
          privateCampaigns.push(campaign);
        }
      });
      // defines the campaigns and sortedCampaigns
      this.campaigns = privateCampaigns;
      this.sortedCampaigns = this.campaigns;
    },

    // the function to get the list of the available properties for the checkbox list in the campaigns based on the categories set in the computed property
    available: function (category) {
      const categorySet = new Set([]);
      for (var i = 0; i < this.campaigns.length; i++) {
        if (_.isString(this.campaigns[i][category])) {
          const array = [];
          array.push(this.campaigns[i][category]);

          array.forEach((el) => categorySet.add(el));
        } else {
          this.campaigns[i][category].forEach((el) => categorySet.add(el));
        }
      }
      return [...categorySet];
    },

    // the function to show the list of campaigns based on the properties checked in the checkbox list
    visible: function (edition, setting, wishedClasses) {
      const editionArray = [];
      editionArray.push(edition);

      const settingArray = [];
      settingArray.push(setting);

      const editions = this.checked.edition.length
        ? _.intersection(editionArray, this.checked.edition).length
        : true;
      const settings = this.checked.setting.length
        ? _.intersection(settingArray, this.checked.setting).length
        : true;
      const nclasses = this.checked.wishedClasses.length
        ? _.intersection(wishedClasses, this.checked.wishedClasses).length
        : true;
      if (editions && settings && nclasses) {
        return true;
      } else {
        return false;
      }
    },

    // getting the icons for the wishedclasses list
    getImgUrl(wish) {
      if (wish == "") {
        wish = "question-solid";
      }
      return require("../assets/classIcon/" + wish + ".svg");
    },
  },

  watch: {
    // the search function for the input field to search on titel and ownerName for the campaigns
    filterCampaigns: function () {
      this.sortedCampaigns = this.campaigns.filter((campaigns) => {
        return (
          campaigns.titel
            .toLowerCase()
            .includes(this.filterCampaigns.toLowerCase()) ||
          campaigns.ownerName
            .toLowerCase()
            .includes(this.filterCampaigns.toLowerCase())
        );
      });
    },

    // the search function to the input field to search on location for the campaigns
    filterLocations: function () {
      this.sortedCampaigns = this.campaigns.filter((campaigns) => {
        return campaigns.city
          .toLowerCase()
          .includes(this.filterLocations.toLowerCase());
      });
    },
  },

  filters: {
    // function to set first letter to capital letter
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },

  created() {
    this.getCampaigns();

    // dispatch to set the state isLogged from the vuex store
    this.$store.dispatch("setIsLogged");
  },
};
</script>

<style scoped>
.home {
  background-image: url(../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 90vh;
}

.contenthome {
  display: flex;
  justify-content: center;
}

.filter {
  width: 15%;
  text-align: left;
  margin-left: 50px;
}

.filter h3 {
  font-size: 25px;
}

.maincontent {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}

.checkboxes {
  margin-top: 15px;
  margin-bottom: 15px;
}

h4.check:hover {
  cursor: pointer;
}

h4 {
  display: table-cell;
  font-size: 20px;
}

.campaigncard {
  width: 20%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 5px;
  color: black;
  margin-bottom: 20px;
  margin: 25px;
  max-height: 420px;
}

.campaigncard h3 {
  padding-top: 5px;
  word-break: break-all;
  margin-right: 20px;
  margin-left: 20px;
}

ul.campcard {
  list-style-type: none;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
}

.test {
  display: flex;
}

.test1 {
  width: 45%;
}

.test2 {
  width: 55%;
  overflow-wrap: break-word;
}
.test3 {
  width: 55%;
  display: flex;
}

.camproller {
  margin: 0px;
}

.ccp {
  margin: 2px;
}

.ccpp {
  margin: 2px;
  word-break: break-all;
}

.wishedclassicons {
  display: inline-flex;
}

img {
  height: 20px;
  width: 20px;
  padding: 5px;
}

.inputfelt {
  border-radius: 5px;
}

.link {
  text-decoration: none;
  color: black;
}

@media screen and (min-width: 1600px) {
  .test4 {
    display: none;
  }
}

@media screen and (max-width: 1599px) {
  .test3 {
    display: none;
  }
}

@media screen and (max-width: 1440px) {
  .home {
    padding-bottom: 100px;
  }
  .maincontent {
    width: 75%;
  }
}

@media screen and (max-width: 1200px) {
  .home {
    padding-bottom: 100px;
  }
  .campaigncard {
    width: 25%;
  }

  .filter {
    width: 15%;
    text-align: left;
    margin-left: 50px;
    margin-right: 50px;
  }
}

@media screen and (max-width: 800px) {
  .home {
    padding-bottom: 100px;
  }
  .campaigncard {
    width: 70%;
  }

  .filter {
    width: 15%;
    text-align: left;
    margin-left: 50px;
    margin-right: 100px;
  }
}

@media screen and (max-width: 600px) {
  .home {
    padding-bottom: 100px;
  }
  .campaigncard {
    width: 50%;
    margin: 20px auto;
  }

  .filter {
    width: 50%;
    text-align: left;

    margin: 20px auto;
  }

  .contenthome {
    display: block;
    margin: 0 auto;
  }

  .maincontent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>