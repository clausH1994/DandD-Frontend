<template>
  <div class="home">
    <div class="top">
      <div class="overskrift">
    <h1> Kampagner </h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
    <button class="okamp">Opret Kampagne</button>
      </div>
    </div>

    <div class="contenthome">
      <div class="filter" id="filterBox">
        <h3>Advanced Filter</h3>
        <input type="text" placeholder="Søgefilter"><br>
        <div class="checkboxes">
          <h4 class="check" @click="openEdition = !openEdition">Edition</h4>
          <div class="edition" v-if="openEdition">
            <div v-for="option in edition" v-bind:key="option">
                  <input :id="option" type="checkbox" :value="option" v-model="checked.edition">
                  <label :for="option" >{{ option }}</label>
            </div>
            <div>
            <input type="checkbox" name="1st" value="1st" id="1st" v-model="checked.edition"><label>1st</label>
            </div>
            <div>
            <input type="checkbox" name="2nd" value="2nd" id="2nd" v-model="checked.edition"><label>2nd</label>
            </div>
            <div>
            <input type="checkbox" name="3rd" value="3rd" id="3rd" v-model="checked.edition"><label>3rd</label>
            </div>
            <div>
            <input type="checkbox" name="3.5" value="3.5" id="3.5" v-model="checked.edition"><label>3.5</label>
            </div>
            <div>
            <input type="checkbox" name="4th" value="4th" id="4th" v-model="checked.edition"><label>4th</label>
            </div>
            <div>
            <input type="checkbox" name="5th" value="5th" id="5th" v-model="checked.edition"><label>5th</label>
            </div>
          </div>
        </div>
        <div class="checkboxes">
          <h4 class="check" @click="openSetting = !openSetting">Fortrukne Setting</h4>
          <div class="setting" v-if="openSetting">
            <div>
            <input type="checkbox" name="mordern" value="modern" id="modern" v-model="filterItems"><label>Modern</label>
            </div>
            <div>
            <input type="checkbox" name="sci-fi" value="scifi" id="scifi" v-model="filterItems"><label>Sci-fi</label>
            </div>
            <div>
            <input type="checkbox" name="fantasy" value="fantasy" id="fantasy" v-model="filterItems"><label>Fantasy</label>
            </div>
            <div>
            <input type="checkbox" name="homebrew" value="homebrew" id="homebrew" v-model="filterItems"><label>Homebrew</label>
            </div>
          </div>
        </div>
        <div class="checkboxes">
          <h4 class="check" @click="openClasses = !openClasses">Ønskede Classes</h4>
          <div class="classes" v-if="openClasses">
            <div v-for="option in wishedClasses" v-bind:key="option">
                  <input :id="option" type="checkbox" :value="option" v-model="checked.wishedClasses">
                  <label :for="option" >{{ option }}</label>
            </div>
            <div>
            <input type="checkbox" name="barbarian" value="barbarian" id="barbarian" v-model="filterItems"><label>Barbarian</label>
            </div>
            <div>
            <input type="checkbox" name="bard" value="bard" id="bard" v-model="filterItems"><label>Bard</label>
            </div>
            <div>
            <input type="checkbox" name="cleric" value="cleric" id="cleric" v-model="filterItems"><label>Cleric</label>
            </div>
            <div>
            <input type="checkbox" name="druid" value="druid" id="druid" v-model="filterItems"><label>Druid</label>
            </div>
            <div>
            <input type="checkbox" name="fighter" value="fighter" id="fighter" v-model="filterItems"><label>Fighter</label>
            </div>
            <div>
            <input type="checkbox" name="monk" value="monk" id="monk" v-model="filterItems"><label>Monk</label>
            </div>
            <div>
            <input type="checkbox" name="paladin" value="paladin" id="paladin" v-model="filterItems"><label>Paladin</label>
            </div>
            <div>
            <input type="checkbox" name="ranger" value="ranger" id="ranger" v-model="filterItems"><label>Ranger</label>
            </div>
            <div>
            <input type="checkbox" name="rogue" value="rogue" id="rogue" v-model="filterItems"><label>Rogue</label>
            </div>
            <div>
            <input type="checkbox" name="sorcerer" value="sorcerer" id="sorcerer" v-model="filterItems"><label>Sorcerer</label>
            </div>
            <div>
            <input type="checkbox" name="warlock" value="warlock" id="warlock" v-model="filterItems"><label>Warlock</label>
            </div>
            <div>
            <input type="checkbox" name="wizard" value="wizard" id="wizard" v-model="filterItems"><label>Wizard</label>
            </div>
            <div>
            <input type="checkbox" name="artificer" value="artificer" id="artificer" v-model="filterItems"><label>Artificer</label>
            </div>
          </div>
        </div>
          
          <h4>Lokation</h4>
          <input type="text" placeholder="Lokation">

      </div>

      <div class="maincontent">

        <div class="campaigncard">
            <h3>Header</h3>
            <ul class="campcard">
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Ejer:</b></p>
                </div>
                <div class="test2">
              <p class="ccp">Slayerfire22</p>
                </div>
              </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Regler:</b></p>
                </div>
                <div class="test2">
              <p class="ccp">This group follows the PHB with some minor homebrew</p>
                </div>
              </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Setting:</b></p>
                </div>
                <div class="test2">
              <p class="ccp">Fantasy</p>
                </div>
              </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Edition:</b></p>
                </div>
                <div class="test2">
              <p class="ccp">5th Edition</p>
                </div>
              </div>
              </li>
              <li>
                <div class="camproller">
              <p class="ccp"><b>Ønskede Classes:</b></p>
              <p class="ccp">Display icons here</p>
                </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Lokation</b></p>
                </div>
                <div class="test2">
              <p class="ccp">2100 København Ø</p>
                </div>
              </div>
              </li>
            </ul>
        </div>

        <div class="campaigncard" v-for="campaign in campaigns" v-bind:key="campaign.id" v-show="visible(campaign.edition, campaign.setting, campaign.wishedClasses)">
            <h3>{{ campaign.titel }}</h3>
            <ul class="campcard">
              <li>
                <div class="test">
                <div class="test1">
              <p class="ccp"><b>Ejer:</b></p>
                </div>
                <div class="test2">
              <p class="ccp" v-if="campaign.ownerName.length < 15 ">{{ campaign.ownerName }}</p>
              <p class="ccp" v-else>{{ campaign.ownerName.substring(0,15)+"..." }}</p>
                </div>
              </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Regler:</b></p>
                </div>
                <div class="test2">
              <p class="ccp" v-if="campaign.rules.length < 40 ">{{ campaign.rules }}</p>
              <p class="ccp" v-else>{{ campaign.rules.substring(0,40)+"..." }}</p>
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
              <p class="ccp">{{ campaign.wishedClasses }}</p>
                </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Lokation:</b></p>
                </div>
                <div class="test2">
              <p class="ccp">{{ campaign.zipcode }} {{ campaign.city }}</p>
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
import _ from 'lodash';

export default {
  name: 'Home',
  components: { },
    data () {
    return {
      openEdition: false,
      openSetting: false,
      openClasses: false,
      campaigns: [],
      checked: {
        edition: [],
        setting: [],
        wishedClasses: [],
      },
    };

    },

computed: {

    edition: function() {
      return this.availableTwo('edition').sort((a, b) => a - b);
    },
    setting: function() {
      return this.available('setting').sort((a, b) => a - b);
    },
    wishedClasses: function() {
      return this.available('wishedClasses').sort((a, b) => a < b ? -1 : 1);
    }

},

methods: {
  getCampaigns() {
      this.userID;
      fetch("https://dandd-api.herokuapp.com/api/campaigns/" , {
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

    available: function(category) {
      const categorySet = new Set([]);
      for (var i = 0; i < this.campaigns.length; i++) {
        console.log(category)
        this.campaigns[i][category].forEach(el => categorySet.add(el));
      }
      return [...categorySet];
    },
    availableTwo: function(categoryTwo) {
      const categorySet = new Set([]);
      for (var i = 0; i < this.campaigns.length; i++) {
        console.log(categoryTwo)
        this.campaigns[i][categoryTwo].forEach(el => categorySet.add(el));
        console.log(categoryTwo)
      }
      return [...categorySet];
    },
    visible: function(edition, setting, wishedClasses) {
      const editions = this.checked.edition.length ? _.intersection(edition, this.checked.edition).length : true;
      const settings = this.checked.setting.length ? _.intersection(setting, this.checked.setting).length : true;
      const nclasses = this.checked.wishedClasses.length ? _.intersection(wishedClasses, this.checked.wishedClasses).length : true;
      if (editions && settings && nclasses) {
        return true;
      } else {
        return false;
      }
    },

},

filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

created() {
  this.getCampaigns();

},

/* lav filter basered på getCampaigns og array fra checkboxes på siden for at kun vise ting der er valgt i checkbox som filter */
};

</script>

<style scoped>
.home {
  background-image: url(../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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

.edition {
  
}

.setting {

}

.classes {

}

.campaigncard {
    width: 20%;
    background-color: #DEDBC4;
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

.camproller {
  margin: 0px;
}

.ccp {
  margin: 2px;
}

</style>