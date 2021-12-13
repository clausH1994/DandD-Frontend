export default class AuthCon {

    registerUser() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.rEmail,
                password: this.passwordR,
            }),
        };
        fetch("https://dandd-api.herokuapp.com/api/user/register", requestOptions)
            .then((response) => {
                if (response.ok) {
                    alert("User Registered");
                    response.json().then((data) => {
                        sessionStorage.setItem("tempID", data.data);
                        sessionStorage.setItem("pass", this.passwordR);
                        sessionStorage.setItem("email", this.rEmail);
                        this.$router.push("Registrer");
                    });

                    //return response.json();
                } else {
                    alert(
                        "Server returned " +
                        response.status +
                        " : " +
                        response.statusText,
                        (this.error = "Something went wrong")
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },

}