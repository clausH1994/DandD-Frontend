<template>
  <div class="minekampagner">
    <div class="top">
      <div class="overskrift">
        <h1>Mine Kampagner</h1>
      </div>

      <div class="filler"></div>

      <div class="knap">
        <button class="okamp">Tilbage</button>
      </div>
    </div>

    <div class="">
      <button class="bar-item tst-button" v-on:click="openKam('t-kam')">
        Tilmeldte Kampanger
      </button>
      <button class="bar-item tst-button" v-on:click="openKam('e-kam')">
        Egne Kampagner
      </button>
    </div>

    <div class="content">
      <div id="e-kam" class="Campaign paper">
        <table>
          <tr>
            <td>
              <div class="kam-text"><p>Icewind dale</p></div>
            </td>
            <td>
              <div class="kam-text"><p>af slayerfire22</p></div>
            </td>
            <td>
              <div class="kam-text">
                <input type="checkbox" name="" id="" /><label>Privat</label>
              </div>
            </td>
            <td>
              <button class="kam-btn">Rediger</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Roller</button>
              <button class="kam-btn">Delete</button>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <div class="kam-text"><p>Icewind dale</p></div>
            </td>
            <td>
              <div class="kam-text"><p>af slayerfire22</p></div>
            </td>
            <td>
              <div class="kam-text">
                <input type="checkbox" name="" id="" /><label>Privat</label>
              </div>
            </td>
            <td>
              <button class="kam-btn">Rediger</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Roller</button>
              <button class="kam-btn">Delete</button>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <div class="kam-text"><p>Icewind dale</p></div>
            </td>
            <td>
              <div class="kam-text"><p>af slayerfire22</p></div>
            </td>
            <td>
              <div class="kam-text">
                <input type="checkbox" name="" id="" /><label>Privat</label>
              </div>
            </td>
            <td>
              <button class="kam-btn">Rediger</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Roller</button>
              <button class="kam-btn">Delete</button>
            </td>
          </tr>
        </table>
      </div>

      <div id="t-kam" class="Campaign paper" style="display: none">
        <table>
          <tr>
            <td><p>Icewind dale</p></td>
            <td><p>af slayerfire22</p></td>
            <td>
              <p>Privat</p>
            </td>
            <td>
              <button class="kam-btn">Kontakt</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Forlad</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openKam(tabName) {
      var i;
      var x = document.getElementsByClassName("Campaign");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "inline-block";
    },
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

.content {
  white-space: nowrap;
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

.red,
.hover-red:hover {
  color: #fff !important;
  background-color: #f44336 !important;
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
  color: #000;
  background-color: #dedbc4;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}
</style>