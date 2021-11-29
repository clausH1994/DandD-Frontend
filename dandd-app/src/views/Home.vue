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
      <div class="filter">
        <h3>Advanced Filter</h3>
        <input type="text" placeholder="Søgefilter"><br>
        <div class="checkboxes">
          <h4 class="check" @click="openEdition = !openEdition">Edition</h4>
          <div class="edition" v-if="openEdition">
            <div>
            <input type="checkbox" name="" id=""><label>1st</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>2nd</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>3rd</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>3.5</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>4th</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>5th</label>
            </div>
          </div>
        </div>
        <div class="checkboxes">
          <h4 class="check" @click="openSetting = !openSetting">Fortrukne Setting</h4>
          <div class="setting" v-if="openSetting">
            <div>
            <input type="checkbox" name="" id=""><label>Modern</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Sci-fi</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Fantasy</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Homebrew</label>
            </div>
          </div>
        </div>
        <div class="checkboxes">
          <h4 class="check" @click="openClasses = !openClasses">Ønskede Classes</h4>
          <div class="classes" v-if="openClasses">
            <div>
            <input type="checkbox" name="" id=""><label>Barbarian</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Bard</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Cleric</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Druid</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Fighter</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Monk</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Paladin</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Ranger</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Rogue</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Sorcerer</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Warlock</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Wizard</label>
            </div>
            <div>
            <input type="checkbox" name="" id=""><label>Artificer</label>
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

        <div class="campaigncard" v-for="campaign in campaigns" v-bind:key="campaign.id">
            <h3>{{ campaign.titel }}</h3>
            <ul class="campcard">
              <li>
                <div class="test">
                <div class="test1">
              <p class="ccp"><b>Ejer:</b></p>
                </div>
                <div class="test2">
              <p class="ccp" v-if="campaign.owner.length < 15 ">{{ campaign.owner }}</p>
              <p class="ccp" v-else>{{ campaign.owner.substring(0,15)+"..." }}</p>
                </div>
              </div>
              </li>
              <li>
              <div class="test">
                <div class="test1">
              <p class="ccp"><b>Regler:</b></p>
                </div>
                <div class="test2">
              <p class="ccp" v-if="campaign.rules.length < 80 ">{{ campaign.rules }}</p>
              <p class="ccp" v-else>{{ campaign.rules.substring(0,80)+"..." }}</p>
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

export default {
  name: 'Home',
  components: { },
    data () {
    return {
      openEdition: false,
      openSetting: false,
      openClasses: false,
      campaigns: [],
    };
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
},

created() {
  this.getCampaigns();
}
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