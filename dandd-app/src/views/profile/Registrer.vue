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
            <div class="container">
              <div class="setting-1">
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label
                    >Barbarian</label
                  >
                </div>
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Bard</label>
                </div>

                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Cleric</label>
                </div>
              </div>
              <div class="setting-1">
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Druid</label>
                </div>
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Fighter</label>
                </div>
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Monk</label>
                </div>
              </div>
              <div class="setting-1">
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Paladin</label>
                </div>
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Ranger</label>
                </div>
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Rogue</label>
                </div>
              </div>
              <div class="setting-1">
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Sorcerer</label>
                </div>
                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Warlock</label>
                </div>

                <div class="setting-1">
                  <input type="checkbox" name="" id="" /><label>Wizard</label>
                </div>
              </div>
              <div class="setting-1">
                <input type="checkbox" name="" id="" /><label>Artificer</label>
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
  width: 50%;
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
  width: 25%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 10px;
  height: 350px;
}
.outerBox-2 {
  width: 25%;
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
</style>