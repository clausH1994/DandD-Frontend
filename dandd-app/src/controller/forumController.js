
export default class ForumCon {

  //calls api with GET request to get all forums
  //returns all forums 
  async readForums() {
    try {
      let response = await fetch("https://dandd-api.herokuapp.com/api/forums/", {
        method: "GET",
      })
      return response.json();
    } catch (error) {
      alert(error);
    }
  }

  //calls api with GET request and id to get specific forum. 
  //returns specific forum
  async readForumById(id) {
    try {
      let response = await fetch("https://dandd-api.herokuapp.com/api/forums/" + id, {
        method: "GET",
      })
      return await response.json();
    } catch (error) {
      alert(
        error
      );
    }
  }

   //calls api with PUT request to update forum.
    //return succsesful message
  async updateForum(token, forum, id) {
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          name: forum.name,
          listOfPosts: forum.listOfPosts,
        }),
      };
      let response = await fetch(
        "https://dandd-api.herokuapp.com/api/forums/" + id,
        requestOptions
      )
      return response.json();
    } catch (error) {
      alert(error)
    }
  }

}