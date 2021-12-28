<template>
  <div class="forum">
    <div class="top">
      <div class="overskrift">
        <h1>Forum</h1>
      </div>
      <div class="filler"></div>
      <div class="knap"></div>
    </div>

    <div class="contentforum">
      <div class="forumcard" v-for="forum in forums" v-bind:key="forum.id">
        <router-link
          :to="{
            name: 'Forumlist',
            params: { id: forum._id, name: forum.name },
          }"
        >
          <h2>{{ forum.name }}</h2>
        </router-link>
        <ul class="campcard">
          <li
            v-for="listOfPosts in forum.listOfPosts"
            v-bind:key="listOfPosts.id"
          >
            <div class="test">
              <div class="test1">
                <h3 class="ccp">{{ listOfPosts.title }}</h3>
              </div>
              <div class="test2">
                <p class="ccp" v-if="listOfPosts.body.length < 100">
                  {{ listOfPosts.body }}
                </p>
                <p class="ccp" v-else>
                  {{ listOfPosts.body.substring(0, 100) + "..." }}
                </p>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
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
    };
  },

  methods: {
    async getForums() {
      this.forums = await this.forumCon.readForums();
    },
  },

  created() {
    this.getForums();
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
}

.contentforum {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
}

.contentforum h2 {
  color: black;
  text-decoration: underline;
  font-size: 28px;
}

.forumcard {
  width: 20%;
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

ul.campcard {
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

hr {
  height: 1px;
  background-color: black;
  border: none;
}
</style>