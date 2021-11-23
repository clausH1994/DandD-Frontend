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
    }},
}
</script>

<style>
.home {
  background-image: url(../assets/campaignbackground.png);
}

.contenthome {
  display: flex;
  justify-content: center;
}

.filter {
  width: 20%;
  text-align: left;
}

.maincontent {
  width: 70%;
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
}

.edition {
  
}

.setting {

}

.classes {

}

</style>