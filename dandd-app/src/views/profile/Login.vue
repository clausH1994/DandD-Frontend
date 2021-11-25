<template>
    <div class="background">
        <div class="placement">
        <div class="outerBox">
        <v-form class="register">
            <h3>REGISTRER</h3>
           <input v-model="email" placeholder="Email">
            <input v-model="password" placeholder="Password">
            <input v-model="bPassword" placeholder="Bekræft Password">
            <button class="btn-reg">Register</button>
            <button class="social">Facebook</button>
            <button class="social">Google</button>
        </v-form>
        </div>
        <div class="spacer"></div>
        <div class="outerBox">
        <v-form class="register">
            <h3>LOGIN</h3>
           <input v-model="email" placeholder="Email">
            <input v-model="password" placeholder="Password">
            <button class="btn-reg">Register</button>
            <button class="social">Facebook</button>
            <button class="social">Google</button>
        </v-form>
        </div>
      </div>   
   </div> 
</template>

<script>
    export default {
        
    }
</script>

<style>
.placement {
    width: 65%;
    margin: 0 auto;
    display: flex;
}
.spacer {
    width: 50%;
}
.background {
    background-image: url(../../assets/profilebackground.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 100px 0;
}
.outerBox {
    width: 25%;
    background-color: #DEDBC4;
    border-radius: 10%;
    padding-bottom: 10px;
    
}

.register {
    color: black;
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
    height: 350px;

}
input {
    margin-top: 5px ;
    border-radius: 10px;
    height: 45px;
    font-family: charm, cursive;
    padding-left: 10px;
    font-size: 20px;
}
.btn-reg {
    background-color: #B93B3B;
    color: white;
    margin-top: 5px;
    margin-bottom: 20px;
    font-family: charm, cursive;
    font-weight: bold;
    font-size: 20px;
}

.social {
    margin: 2px;
    background-color: white;
    font-size: 20px;

    
}
button {
    height: 45px;
    border-radius: 10px;
}


</style>