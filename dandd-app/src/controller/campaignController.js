
export default class CampaignCon {

  //calls api with GET request to get all campaigns
  //returns all campaigns 
  async readCampaigns() {
    try {
      let response = await fetch("https://dandd-api.herokuapp.com/api/campaigns/", {
        method: "GET",
      })
      return response.json();
    } catch (error) {
      alert(error);
    }
  }

  //calls api with GET request and id to get specific campaign. 
  //returns specific campaign
  async readCampaignById(id) {
    try {
      let response = await fetch("https://dandd-api.herokuapp.com/api/campaigns/" + id, {
        method: "GET",
      })
      return await response.json();
    } catch (error) {
      alert(
        error
      );
    }
  }

  //calls api with POST request to create campaign.
  //return created campaign
  async createCampaign(token, campaign) {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          ownerID: campaign.ownerID,
          ownerName: campaign.ownerName,
          titel: campaign.titel,
          edition: campaign.edition,
          setting: campaign.setting,
          maxPlayer: campaign.maxPlayer,
          city: campaign.city,
          zipcode: campaign.zipcode,
          rules: campaign.rules,
          notes: campaign.notes,
          tools: campaign.tools,
          online: campaign.online,
          private: campaign.private,

          wishedClasses: campaign.wishedClasses,
          dates: campaign.dates,
          listOfPlayers: campaign.listOfPlayers,
        }),
      };
      let response = await fetch(
        "https://dandd-api.herokuapp.com/api/campaigns/",
        requestOptions
      )
      return response.json();

    } catch (error) {
      alert(error);
    }
  }

  //calls api with PUT request to update campaign.
  //return succsesful message
  async updateCampaign(token, campaign, id) {
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          ownerID: campaign.ownerID,
          ownerName: campaign.ownerName,
          titel: campaign.titel,
          edition: campaign.edition,
          setting: campaign.setting,
          maxPlayer: campaign.maxPlayer,
          city: campaign.city,
          zipcode: campaign.zipcode,
          rules: campaign.rules,
          notes: campaign.notes,
          tools: campaign.tools,
          online: campaign.online,
          private: campaign.private,

          wishedClasses: campaign.wishedClasses,
          dates: campaign.dates,
          listOfPlayers: campaign.listOfPlayers,
        }),
      };
      let response = await fetch(
        "https://dandd-api.herokuapp.com/api/campaigns/" + id,
        requestOptions
      )
      return response.json();
    } catch (error) {
      alert(error)
    }
  }

  //calls api with DELETE request to delete campaign.
  //return succsesful message
  async deleteCampaign(token, id) {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      };
      let response = await fetch(
        "https://dandd-api.herokuapp.com/api/campaigns/" + id,
        requestOptions
      )
      return response.json();
    }
    catch (error) {
      alert(error)
    }
  }
}