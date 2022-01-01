export default class UserCon {

    //calls api with GET request to get all users
    //returns all users 
    async readUsers(token) {
        try {
            let response = await fetch("https://dandd-api.herokuapp.com/api/users/", {
                method: "GET",
                headers: { "auth-token": token },
            })
            return response.json();
        } catch (error) {
            alert(error);
        }
    }

    //calls api with GET request and id to get specific user. 
    //returns specific user
    async readUserById(token, id) {
        try {
            let response = await fetch("https://dandd-api.herokuapp.com/api/users/" + id, {
                method: "GET",
                headers: { "auth-token": token },
            })
            return response.json();
        } catch (error) {
            alert(error);
        }
    }
    
    //check if username is null.
    //calls api with PUT request to update user.
    //return succsesful message
    async updateUser(user, id) {

        if (user.username == null) {
            try {

                const requestOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({

                        name: user.name,
                        city: user.city,
                        zipcode: user.postNr,

                        classes: user.classes,
                        setting: user.setting,
                        roles: user.roles,

                        age: user.age,
                    }),
                };
                let response = await fetch(
                    "https://dandd-api.herokuapp.com/api/users/" + id,
                    requestOptions
                )
                return response.json();
            } catch (error) {
                alert(error);
            }
        }
        else {
            try {

                const requestOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: user.username,
                        name: user.name,
                        city: user.city,
                        zipcode: user.postNr,

                        classes: user.classes,
                        setting: user.setting,
                        roles: user.roles,

                        age: user.age,
                    }),
                };
                let response = await fetch(
                    "https://dandd-api.herokuapp.com/api/users/" + id,
                    requestOptions
                )
                return response.json();
            } catch (error) {
                alert(error);
            }
        }
    }


}