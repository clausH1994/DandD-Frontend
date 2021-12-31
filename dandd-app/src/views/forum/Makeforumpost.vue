<template>
  <div class="forum">
    <div class="top">
      <div class="overskrift">
        <h1>Forum</h1>
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
        <h2>Opret Forum Post</h2>
        <div class="campcard">
          <div class="test">
            <div class="test2">
              <h3 class="ccp">Overskrift</h3>
              <input
                class="inputfield"
                type="text"
                placeholder="Forum Overskrift"
                v-model="title"
              />
              <div>
                <h3 class="ccp">Tekst</h3>
                <textarea
                  class="textarea"
                  name=""
                  id=""
                  rows="7"
                  placeholder="Forum tekst"
                  v-model="body"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="opost" v-on:click="createPost()">Opret Post</button>
  </div>
</template>

<script>
import ForumCon from "../../controller/forumController";
export default {
  data() {
    return {
      forumCon: new ForumCon(),

      forums: [],
      id: null,
      forum: null,
      post: {},
      title: null,
      body: null,
    };
  },

  computed: {
     isLogged() {
      return this.$store.getters.getIsLogged;
    },
  },

  methods: {
    async getForum() {
      this.forum = await this.forumCon.readForumById(this.id);
    },

    async createPost() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const post = {};
      const time = Date.now();
      const today = new Date(time);
      post.date = today.toLocaleString();
      post.owner = user.username;
      post.title = this.title;
      post.body = this.body;
      if (this.forum.listOfPosts == null) {
        this.forum.listOfPosts = [];
      }

      this.forum.listOfPosts.push(post);

      const response = await this.forumCon.updateForum(
        sessionStorage.getItem("token"),
        this.forum,
        this.forum._id
      );
      console.log(response);
      if (response.message == "Forum was succesfully updated") {
        alert("Opslaget er blevet oprettet");
        this.$router.push({
          name: "Postdetail",
          params: { id: this.forum._id, name: post.title },
        });
      } else {
        alert(response.message);
      }
    },
  },

  created() {
    this.$store.dispatch("setIsLogged");
    this.id = this.$route.params.id;
    //this.id = "61a77f6258295764f502c78c";
    if (this.id == null) {
      this.id = localStorage.getItem("forum_id");
    }
    if (this.id) {
      this.getForum();
    }
  },
};
</script>

<style scoped>
.forum {
  background-image: url(../../assets/forumbackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 90vh;
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
  width: 65%;
  background-color: #dedbc4;
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

h3.ccp {
  margin: 2px;
  margin-left: 10px;
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
  background-color: #b93b3b;
  color: white;
  font-family: "Charm", cursive;
  font-size: 20px;
  height: 55px;
  width: 150px;
  border-radius: 12px;
  border: none;
  margin-bottom: 60px;
}

.inputfield {
  height: 25px;
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

@media screen and (max-width: 800px) {
  .forumcard {
    width: 90%;
  }

  .campcard {
  list-style-type: none;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
}
}
</style>