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
      <!-- The actual forum post -->
      <div class="forumcard">
        <h2>{{ post.title }}</h2>
        <div class="campcard">
          <div class="test">
            <div class="test2">
              <p class="ccp">{{ post.body }}</p>
              <div>
                <p class="forumsignature">
                  Af {{ post.owner }} {{ post.date }}
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <!-- The forum replies -->
      <div class="forumcard" v-if="post.listOfReplies">
        <ul class="campcard">
          <li v-for="reply in post.listOfReplies" v-bind:key="reply.id">
            <div class="flex">
              <div class="test">
                <div class="test1">
                  <p class="ccp">{{ reply.body }}</p>
                  <div>
                    <p class="forumsignature">
                      Af {{ reply.owner }} {{ reply.date }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="right">
                <button
                  class="kam-btn"
                  v-if="reply.owner == this.username"
                  v-on:click="removeReply(reply)"
                >
                  Delete
                </button>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isLogged">
      <textarea
        class="forumarea"
        name="forumPost"
        id=""
        rows="4"
        placeholder="Skriv reply her!"
        v-model="postreply"
      >
      </textarea>
      <br />
      <button class="opost" v-on:click="postReply()">Post Reply</button>
    </div>
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
      user: {},
      username: "",
      post: {},
      postreply: null,
    };
  },

  methods: {
    async getPost() {
      this.forum = await this.forumCon.readForumById(this.id);
      this.listOfPosts = this.forum.listOfPosts;
      this.listOfPosts.forEach((post) => {
        if (post.title == this.$route.params.name) {
          this.post = post;
        }
      });
    },

    postReply() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const reply = {};
      const time = Date.now();
      const today = new Date(time);
      reply.date = today.toLocaleString();
      reply.owner = user.username;
      reply.body = this.postreply;
      if (this.post.listOfReplies == null) {
        this.post.listOfReplies = [];
      }

      this.post.listOfReplies.push(reply);
      this.forum.listOfPosts.forEach((post) => {
        if (post.title == this.$route.params.name) {
          post = this.post;
        }
      });
      this.forumCon.updateForum(
        sessionStorage.getItem("token"),
        this.forum,
        this.forum._id
      );
      this.postreply = "";
    },

    removeReply(reply) {
      var index = this.post.listOfReplies
        .map(function (reply) {
          return reply.body;
        })
        .indexOf(reply.body);
      this.post.listOfReplies.splice(index, 1);
      this.forum.listOfPosts.forEach((post) => {
        if (post.title == this.$route.params.name) {
          post = this.post;
        }
      });
      this.forumCon.updateForum(
        sessionStorage.getItem("token"),
        this.forum,
        this.forum._id
      );
    },
  },

  computed: {
    isLogged() {
      return this.$store.getters.getIsLogged;
    },
  },

  created() {
    this.id = this.$route.params.id;
    //this.id = "61a77f6258295764f502c78c";
    if (this.id == null) {
      this.id = localStorage.getItem("post_id");
    }
    if (this.id) {
      localStorage.setItem("post_id", this.id);
      this.user = JSON.parse(sessionStorage.getItem("user"));
      if (this.user) {
        this.username = this.user.username;
      }
      this.getPost();
    } else {
      //this.$router.push("/");
    }

    this.$store.dispatch("setIsLogged");

    //this.post = JSON.parse(this.$route.params.post);
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

ul.campcard {
  list-style: none;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
}

.test {
  display: block;
  width: 90%;
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
  word-break: break-all;
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
  background-color: #b93b3b;
  color: white;
  font-family: "Charm", cursive;
  font-size: 20px;
  height: 55px;
  width: 150px;
  border-radius: 12px;
  border: none;
  margin-bottom: 80px;
}

.forumarea {
  width: 63%;
  padding: 5px;
  margin: 5px;
  resize: none;
  border-radius: 15px/90px;
  border: 1px solid;
}

.kam-btn {
  background-color: #b93b3b;
  color: white;
  font-family: "Charm", cursive;
  border-radius: 10px;
  border: none;
  padding: 5px 15px;
  margin: 0 10px 0 10px;
}

.flex {
  display: flex;
  width: 100%;
}

.right {
  margin: auto;
}

@media screen and (max-width: 800px) {
 .forumcard {
  width: 90%;
  background-color: #dedbc4;
  border-radius: 15px/90px;
  padding-bottom: 5px;
  color: black;
  margin-bottom: 10px;
}
}
</style>