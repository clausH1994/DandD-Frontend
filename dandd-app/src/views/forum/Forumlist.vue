<template>
<div class="forum">
    <div class="top">
      <div class="overskrift">
    <h1> Forum </h1>
      </div>
      <div class="filler"></div>
      <div class="knap">
          <router-link to="/forum">
    <button class="okamp" onclick="history.back()">Tilbage</button>
          </router-link>
      </div>
    </div>

    <div class="contentforum">

    <div class="forumcard">
            <h2>{{ name }}</h2>
            <ul class="campcard">
              <li v-for="post in listOfPosts" v-bind:key="post.id">
                <div class="flex">
                  <div class="test">
                <router-link class="link" :to="{ name: 'Postdetail', params: { id: this.id, name: post.title }}">
                <div class="test1">
              <h3 class="ccp">{{ post.title }}</h3>
                </div>
                <div class="test2">
              <p class="ccp">{{ post.body }}</p>
                </div>
                <div>
                    <p class="forumsignature">Af {{ post.owner }} {{ post.date }}</p>
                </div>              
              </router-link>
              </div>
              <div class="right">
              <button class="kam-btn" v-if="post.owner == this.username" v-on:click="removePost">Delete</button>
              </div>
              </div>
              <hr>
              </li>
            </ul>
    </div>

    </div>

    <router-link :to="{ name: 'Makeforumpost', params: { id: this.id }}">
    <button class="opost" v-if="isLogged">Opret Post</button>
    </router-link>

  </div> 
</template>

<script>
import ForumCon from '../../controller/forumController'
export default {
    
    data () {
    return {
      forumCon: new ForumCon(),

      forum: [],
      id: null,
      name: null,
      owner: null,
      date: null,
      user: {},
      username: "",
      listOfPosts: [],
      listOfReplies: [],
    };
    },


methods: {
  getForum() {
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
              this.forum = response.data;
              this.name = response.data.name;
              this.owner = response.data.owner;
              this.date = response.data.date;
              this.listOfPosts = response.data.listOfPosts;
              this.listOfReplies = response.data.listOfReplies;
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

  removePost(post) {
    var index = this.listOfPosts
      .map(function (post) {
        return post.body;
      })
      .indexOf(post.body);

    this.listOfPosts.splice(index, 1);
    this.forum.listOfPosts = this.listOfPosts;
    this.forumCon.updateForum(sessionStorage.getItem("token"), this.forum, this.forum._id);
    },
},

computed: {
  isLogged() {
    return this.$store.getters.getIsLogged;
  }
},

created() {

  this.id = this.$route.params.id;
    //this.id = "61a77f6258295764f502c78c";
    if(this.id == null)
  {
    this.id = localStorage.getItem("forum_id");
   }
  if (this.id) {
      localStorage.setItem("forum_id", this.id);
      this.user = JSON.parse(sessionStorage.getItem("user"));
      if (this.user) {
        this.username = this.user.username;
      }
    this.getForum();
  } else {
    //this.$router.push("/");
  }
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
  padding-bottom: 20px;
}

.contentforum h2 {
  color: black;
  text-decoration: underline;
  font-size: 28px;
}

.forumcard {
    width: 65%;
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

ul.campcard {
  list-style-type: none;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
}

.test {
  display: block;
  width: 90%;
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

.link {
  text-decoration: none;
  color: black;
}

.kam-btn {
  background-color: #b93b3b;
  color: white;
  font-family: "Charm", cursive;
  border-radius: 10px;
  border: none;
  padding: 5px 15px;
  margin: 0 10px 0 10px;
  height: 25%;
}

.flex {
  display: flex;
  width: 100%;
}

.right {
  margin: auto;
}

</style>