
export default class ForumCon {

    async readForums()
    {
      try { 
       let response = await fetch("https://dandd-api.herokuapp.com/api/forums/", {
          method: "GET",
        })
        return response.json();
      } catch (error) {
        alert(error);
      }
    }
  
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