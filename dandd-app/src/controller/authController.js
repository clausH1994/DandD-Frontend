export default class AuthCon {

    async registerUser(email, password) {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            };
            let response = await fetch("https://dandd-api.herokuapp.com/api/user/register", requestOptions)
            return response.json();
        } catch (error) {
            alert(error);
        }
    }


    async login(email, password) {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            };
           let response = await fetch(
                "https://dandd-api.herokuapp.com/api/user/Login",
                requestOptions
            )
            return response.json();
        } catch (error) {
            alert(error)
        }
    }
}