<template>
  <div>
    <div class="registrer">
      <div class="top">
        <div class="overskrift"></div>
        <div class="filler"></div>
        <div class="knap"></div>
      </div>
      <div class="placement">
        <div class="outerBox">
          <div class="register">
            <h3>Opret Profil</h3>
            <input v-model="username" placeholder="Brugernavn" />
            <input v-model="name" placeholder="Navn" />
            <input v-model="city" placeholder="By" />
            <input v-model="postNr" placeholder="Post nr" />
            <input type="date" id="birthday" name="Date of Birth" />
            <div class="setting-1">
              <input type="checkbox" name="" id="" /><label>GM/DM</label>
              <input type="checkbox" name="" id="" /><label>Player</label>
            </div>
          </div>
        </div>
        <div class="spacer"></div>
        <div class="outerBox-2">
          <div class="register">
            <h3>Præferencer</h3>
            <p>Foretrukne Settings</p>
            <div class="setting-1">
              <div class="setting-1">
                <input type="checkbox" name="" id="" /><label>Modern</label>
              </div>
              <div class="setting-1">
                <input type="checkbox" name="" id="" /><label>Sci-fi</label>
              </div>
            </div>
            <div class="setting-1">
              <div class="setting-1">
                <input type="checkbox" name="" id="" /><label>Fantasy</label>
              </div>
              <div class="setting-1">
                <input type="checkbox" name="" id="" /><label>Homebrew</label>
              </div>
            </div>

            <p>Foretrukne Class</p>
                  <div class="checkboxes-area">
            <div class="checkboxes-placement">
              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="barbarian"
                  name=""
                  id=""
                /><label class="labels">Barbarian</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="druid"
                  name=""
                  id=""
                /><label class="labels">Druid</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="paladin"
                  name=""
                  id=""
                /><label class="labels">Paladin</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="sorcerer"
                  name=""
                  id=""
                /><label class="labels">Sorcerer</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="artificer"
                  name=""
                  id=""
                /><label class="labels">Artificer</label>
              </div>
            </div>

            <div class="checkboxes-placement">
              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="bard"
                  name=""
                  id=""
                /><label class="labels">Bard</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="fighter"
                  name=""
                  id=""
                /><label class="labels">Fighter</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="ranger"
                  name=""
                  id=""
                /><label class="labels">Ranger</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="warlock"
                  name=""
                  id=""
                /><label class="labels">Warlock</label>
              </div>
            </div>

            <div class="checkboxes-placement">
              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="cleric"
                  name=""
                  id=""
                /><label class="labels">Cleric</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="monk"
                  name=""
                  id=""
                /><label class="labels">Monk</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="rogue"
                  name=""
                  id=""
                /><label class="labels">Rogue</label>
              </div>

              <div>
                <input
                  class="checkboxes"
                  type="checkbox"
                  v-model="wizard"
                  name=""
                  id=""
                /><label class="labels">Wizard</label>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
      <button class="okamp">Opret</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.placement {
  width: 65%;
  margin: 0 auto;
  display: flex;
}

.spacer {
  width: 30%;
}

.container {
  display: flex;
  justify-content: space-between;
  /* flex-flow: row wrap; */
  flex-direction: column;
}

.registrer {
  background-image: url(../../assets/profilebackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.register {
  color: black;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  height: 350px;
}

input {
  margin-top: 5px;
  border-radius: 5px;
  height: 30px;
  font-family: charm, cursive;
  padding-left: 5px;
  font-size: 15px;
}

.outerBox {
  width: 35%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 10px;
  height: 350px;
}
.outerBox-2 {
  width: 35%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 10px;
  height: 450px;
}

.setting-1 {
  display: flex;
  font-size: 15px;
  align-items: center;
  margin-left: 3px;
}

p {
  text-align: left;
}

.okamp {
  margin-bottom: 30px;
}


.checkboxes {
  height: 15px;
  width: 15px;
}

.labels {
  font-size: 15px;
  margin-left: 5px;
}

.checkboxes-area {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}

.checkboxes-placement {
  text-align: left;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>