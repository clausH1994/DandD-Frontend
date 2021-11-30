<template>
  <div class="minekampagner">
    <div class="top">
      <div class="overskrift">
        <h1>Mine Kampagner</h1>
      </div>

      <div class="filler"></div>

      <div class="knap">
        <button class="okamp" onclick="history.back()">Tilbage</button>
      </div>
    </div>

    <div class="bar">
      <button
        class="bar-item tst-button tablink "
        v-on:click="openKam($event, 't-kam')"
      >
        Tilmeldte Kampanger
      </button>
      <button
        class="bar-item tst-button tablink paper"
        v-on:click="openKam($event,'e-kam')"
      >
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
              <button class="kam-btn">Delete</button>
              <button class="kam-btn">Roller</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Rediger</button>
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
              <button class="kam-btn">Delete</button>
              <button class="kam-btn">Roller</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Rediger</button>
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
              <button class="kam-btn">Delete</button>
              <button class="kam-btn">Roller</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Rediger</button>
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
              <button class="kam-btn">Forlad</button>
              <button class="kam-btn">Kalender</button>
              <button class="kam-btn">Kontakt</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <button class="okamp">Opret</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openKam(evt, tabName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("Campaign");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" paper", "");
      }
      document.getElementById(tabName).style.display = "inline-block";
      evt.currentTarget.className += " paper";
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

.bar {
  margin: 0 auto;
  text-align: left;
  width: 65%;
}

.content {
  white-space: nowrap;
  margin-bottom: 50px;
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

.dndred,
.hover-red:hover {
  color: #fff !important;
  background-color: #b93b3b !important;
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
  color: #fff;
  background-color: #b93b3b;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}
</style>