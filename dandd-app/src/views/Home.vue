<template>
  <div class="home">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <router-link to="/makecampaign">
        <button class="okamp">Opret Kampagne</button>
        </router-link>
      </div>

    </div>

    <div class="contenthome">
      <div class="filter" id="filterBox">
        <h3>Advanced Filter</h3>
        <input class="inputfelt" type="text" v-model="filterCampaigns" placeholder="Søg" /><br />
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
        <input class="inputfelt" type="text" v-model="filterLocations" placeholder=" Søg Lokation" />
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
          <h3>{{ campaign.titel }}</h3>
          <ul class="campcard">
            <li>
              <div class="test">
                <div class="test1">
                  <p class="ccp"><b>Ejer:</b></p>
                </div>
                <div class="test2">
                  <p class="ccp" v-if="campaign.ownerName.length < 15">
                    {{ campaign.ownerName }}
                  </p>
                  <p class="ccp" v-else>
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
                  <p class="ccp" v-if="campaign.rules.length < 40">
                    {{ campaign.rules }}
                  </p>
                  <p class="ccp" v-else>
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
                  <p class="ccp">{{ campaign.setting }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="test">
                <div class="test1">
                  <p class="ccp"><b>Edition:</b></p>
                </div>
                <div class="test2">
                  <p class="ccp">{{ campaign.edition }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="camproller">
                <p class="ccp"><b>Ønskede Classes:</b></p>
                <div class="wishedclassicons" v-for="wish in campaign.wishedClasses" v-bind:key="wish.id"><img :src="getImgUrl(wish)" v-bind:alt="wish" /></div>
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
                  <p class="ccp">{{ campaign.city }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Home",
  components: {},
  data() {
    return {
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
      filterCampaigns: '',
      filterLocations: '',
    };
  },

  computed: {
    edition: function () {
      return this.available("edition").sort((a, b) => (a < b ? -1 : 1));
    },
    setting: function () {
      return this.available("setting").sort((a, b) => (a < b ? -1 : 1));
    },
    wishedClasses: function () {
      return this.available("wishedClasses").sort((a, b) => (a < b ? -1 : 1));
    },

  },

  methods: {
    getCampaigns() {
      this.userID;
      fetch("https://dandd-api.herokuapp.com/api/campaigns/", {
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
              this.campaigns = response.data;
              this.sortedCampaigns = response.data;
              console.log(response.data);
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

    getImgUrl(wish) {
      if (wish == "") {
        wish = "question-solid";
      }
      return require("../assets/classIcon/" + wish + ".svg");
    },

  },

  watch: {
    filterCampaigns: function() {
         this.sortedCampaigns = this.campaigns.filter(campaigns => {
         return campaigns.titel.toLowerCase().includes(this.filterCampaigns.toLowerCase()) ||
         campaigns.ownerName.toLowerCase().includes(this.filterCampaigns.toLowerCase())
         });
    },

    filterLocations: function() {
         this.sortedCampaigns = this.campaigns.filter(campaigns => {
         return campaigns.city.toLowerCase().includes(this.filterLocations.toLowerCase())
         });
    },
  },

  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },

  created() {
    this.getCampaigns();

  },

}

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
  width: 20%;
  text-align: left;
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

.wishedclassicons {
  display: inline-flex;
}

img {
  height: 20px;
  width: 20px;
}

.inputfelt {
  border-radius: 5px;
}

</style>