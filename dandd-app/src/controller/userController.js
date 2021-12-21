export default class UserCon {



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


    async updateUser(user, id) {
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