<template>
<div class="forum">
    <div class="top">
      <div class="overskrift">
    <h1> Forum </h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
          <router-link to="/forum">
    <button class="okamp">Tilbage</button>
          </router-link>
      </div>
    </div>

    <div class="contentforum">

    <div class="forumcard">
      <h2>Opret Forum Post</h2>
        <div class="campcard">
          <div class="test">
            <div class="test2">
              <h3 class="ccp">Overskrift</h3>
              <input class="inputfield" type="text" placeholder="Forum Overskrift">
            <div>
              <h3 class="ccp">Tekst</h3>
              <textarea class="textarea" name="" id="" rows="7" placeholder="Forum tekst"></textarea>
            </div>
            </div>
          </div>
        </div>
    </div>

    </div>

    <button class="opost">Opret Post</button>

  </div> 
</template>

<script>
export default {

}
</script>

<style scoped>
.forum {
  background-image: url(../../assets/forumbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.contentforum {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
}

.contentforum h2 {
  color: black;
  text-decoration: underline;
  font-size: 28px;
}

.forumcard {
    width: 85%;
    background-color: #DEDBC4;
    border-radius: 15px/90px;
    padding-bottom: 5px;
    color: black;
    margin-bottom: 20px;
    margin: 25px;
}

.forumcard h3 {
  padding-top: 5px;
}

.campcard {
  list-style-type: none;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
}

.test {
  display: block;
}

.test1 {
  
}

.test2 {
  overflow-wrap: break-word;
}

.camproller {
  margin: 0px;
}

.ccp {
  margin: 2px;
}

.forumsignature {
    font-size: 12px;
}

hr {
  height: 1px;
  background-color: black;
  border: none;
}

.okamp {
    cursor: pointer;
}

button.opost {
  background-color: #B93B3B;
  color: white;
  font-family: 'Charm', cursive;
  font-size: 20px;
  height: 55px;
  width: 150px;
  border-radius: 12px;
  border: none;
  margin-bottom: 80px;
}

.inputfield {
  width: 98%;
  padding: 5px;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid;
}

.textarea {
  width: 98%;
  padding: 5px;
  margin: 5px;
  resize: none;
  border-radius: 8px;
  border: 1px solid;
}

</style>