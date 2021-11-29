<template>
    <div>
  <div class="login">
    <div class="top">
      <div class="overskrift">
      </div>
      <div class="filler"></div>
      <div class="knap">
      </div>
    </div>
     <div class="placement">
        <div class="outerBox">
        <div class="register">
            <h3>Opret Profil</h3>
           <input v-model="username" placeholder="Brugernavn">
            <input v-model="name" placeholder="Navn">
            <input v-model="city" placeholder="By">
            <input v-model="postNr" placeholder="Post nr">
            <input type="date" id="birthday" name="Date of Birth">
            <div class="setting-1">
             <input type="checkbox" name="" id=""><label>GM/DM</label>
              <input type="checkbox" name="" id=""><label>Player</label>
            </div>
             </div>
        </div>
         <div class="spacer"></div>
        <div class="outerBox">
        <div class="register">
            <h3>Præferencer</h3>
            <p>Foretrukne Settings</p>
            <div class="setting-1">
             <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Modern</label>
            </div>
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Sci-fi</label>
            </div>
            </div>
            <div class="setting-1">
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Fantasy</label>
            </div>
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Homebrew</label>
            </div>
            </div>

            <p>Foretrukne Rolle</p>
            <div class="setting-1">
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Barbarian</label>
            </div>
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Bard</label>
            </div>
            </div>
            <div class="setting-1">
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Sorcerer</label>
            </div>
            <div class="setting-1">
            <input type="checkbox" name="" id=""><label>Druid</label>
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
    export default {
        
    }
</script>

<style scoped>

.outerBox {
    height: 400px;
}

.setting-1 {
    display: flex;
    font-size: 15px;
    align-items: center;
    margin-left: 5px;
 
}

p {
    text-align: left;
}

</style>