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
      <!-- The actual forum post -->
    <div class="forumcard">
      <h2>{{ post.title }}</h2>
        <div class="campcard">
          <div class="test">
            <div class="test2">
              <p class="ccp">{{ post.body }}</p>
            <div>
              <p class="forumsignature">Af {{ post.owner }} {{ post.date }}</p>
            </div>
            </div>
          </div>
        <hr>
        </div>
    </div>
    <!-- The forum replies -->
        <div class="forumcard">
          <ul class="campcard">
            <li v-for="reply in post.listOfReplies" v-bind:key="reply.id">
              <div class="test">
                <div class="test1">
              <p class="ccp">{{ reply.body }}</p>
                <div>
                    <p class="forumsignature">Af {{ reply.owner }} {{ reply.date }}</p>
                </div>
                </div>
              </div>
              <hr>
            </li>
          </ul>
        </div>
    </div>

    <textarea class="forumarea" name="forumPost" id="" rows="4" placeholder="Skriv reply her!">
    </textarea>
    <br>
    <button class="opost">Post Reply</button>

  </div> 
</template>

<script>
export default {
    
    data () {
    return {
      forums: [],
      id: null,
      title: null,
      owner: null,
      date: null,
      listOfReplies: [],
    };
    },


methods: {
  getPost() {
      fetch("https://dandd-api.herokuapp.com/api/forums/" + this.id, {
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
              this.title = response.data.title;
              this.owner = response.data.owner;
              this.date = response.data.date;
              this.listOfReplies = response.data.listOfReplies;
              console.log(response.data);
              console.log(response.data.listOfReplies);
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

  this.id = this.$route.params.id;
    //this.id = "61a77f6258295764f502c78c";
  if (this.id) {
    this.getPost();
  } else {
    //this.$router.push("/");
  }

  this.post = JSON.parse(this.$route.params.post);

},

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
    margin-bottom: 10px;
}

.forumcard h3 {
  padding-top: 5px;
}

.campcard {
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
}

.test {
  display: block;
}

.test1 {
  padding: 5px;
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
    padding-left: 5px;
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

.forumarea {
  width: 83%;
  padding: 5px;
  margin: 5px;
  resize: none;
  border-radius: 15px/90px;
  border: 1px solid;
}

</style>