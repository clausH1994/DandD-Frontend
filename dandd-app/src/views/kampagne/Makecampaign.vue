<template>
  <div class="makecampaign">
    <div class="top">
      <div class="overskrift">
        <h1>Kampagner</h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
        <button class="okamp">Tilbage</button>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <form action="">
          <input
            class="input"
            type="text"
            placeholder="Titel"
            v-model="title"
            required
          />

          <select class="input" name="edition" id="edition" required>
            <option value="" disabled selected hidden>Edition</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="3.5">3.5</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
          </select>

          <select
            class="input"
            name="setting"
            id="setting"
            placeholder="Setting"
            required
          >
            <option value="" disabled selected hidden>Setting</option>
            <option value="Modern">Modern</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Homebrew">Homebrew</option>
          </select>

          <select class="input" name="numberOfPlayers" id="numberOfPlayers">
            <option value="" disabled selected hidden>Antal Deltager</option>
            <option v-for="i in 10" :key="i" value="">{{ i }}</option>
          </select>
          <div class="online">
            <input type="checkbox" name="online" class="checkbox"/><label for="online"
              >Online</label
            >
          </div>
           <input
            class="input"
            type="text"
            placeholder="City"
            v-model="city"
            required
          />
           <input
            class="input"
            type="text"
            placeholder="Postnr"
            v-model="zipcode"
            required
          />
        </form>
      </div>
      <div class="card">
        <textarea v-model="rules" rows="10" placeholder="Regler"></textarea>
      </div>
      <div class="card">
        <textarea v-model="notes" placeholder="Extra noter"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.token = sessionStorage.getItem("token");
    this.userID = sessionStorage.getItem("user_id");
    if (this.token == null && this.userID == null) {
      this.$router.push("Login");
    } else {
      //this.getLoginUser();
    }
  },

  data: () => ({
    userID: null,
    token: null,
    title: null,
    edition: null,
    setting: null,
    numberOfPlayers: "numberOfPlayers",
    city:null,
    zipcode: null,
    rules: null,
    notes: null,
  }),
};
</script>

<style scoped>
.makecampaign {
  background-image: url(../../assets/campaignbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
}

.card {
  border-radius: 35px/90px;
  width: 25%;
  background-color: #dedbc4;
  color: black;
  font-size: 24px;
  padding: 20px;
}

.input {
  width: 80%;
  height: 45px;
  margin-top: 30px;
  font-size: 24px;
}

.checkbox
{
  height: 30px;
  width: 30px;
}

.online {
  display: flex;
  width: 80%;
  margin: 15px auto 0 auto;
  text-align: left;
}
</style> 