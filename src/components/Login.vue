<script setup>
import axios from 'axios';
import { ref } from 'vue';


const loginUsername = ref("")
const loginPassword = ref("")

const registerUsernme = ref("")
const registerPassword = ref("")
const name = ref("")
const firstname = ref("")
const email = ref("") 
const adress = ref("")
const zipcode = ref("")
const country = ref("")

async function Login() {
   
    try {

        console.log(loginUsername.value);
        console.log(loginPassword.value);
        
        
    
        const res = await axios.post("http://localhost:3000/login", {
        "username" : loginUsername.value, 
        "password" : loginPassword.value
        })
        
        console.log(res.data);
        

        if(res.data != null){
            alert("Vous êtes maintenant connecté, " + loginUsername.value)
        }else{
            alert("Identifiants invalides")
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

    async function registerUser(){
        
        //TODO: Validation
        
        try {
            const res = await axios.post("http://localhost:3000/register", {
                "username": registerUsernme.value,
                "password": registerPassword.value,
                "name": name.value,
                "firstname": firstname.value,
                "email": email.value,
                "adress": adress.value,
                "zipcode": zipcode.value,
                "country": country.value,
            })
            alert("Vous êtes enregistré, vous ouvez maintenant vous connecter.")
        } catch (error) {
            console.log(error);
            
        }
        
  }
    
    

    
</script>

<template>

    <h3> Connectez-vous et obtenez des réductions exclusives  </h3>
    <form class="mb-5 mt-4 mx-5">
        <div class="form-group">
            <label> Pseudo </label>
            <input class="form-control" type="text" v-model="loginUsername" />
        </div>
        
        <div class="form-group">
            <label> Mot de passe </label>
            <input class="form-control" type="password" v-model="loginPassword" />
        </div>

    <button class="btn btn-primary" @click.prevent="Login"> Se connecter </button>

    </form>


    <h3> Pas de compte ? Inscrivez-vous. </h3>
    <form class="mt-3 mx-5">
        <div class="form-group">
            <label for="">Username</label>
            <input class="form-control" type="text" v-model="registerUsernme"/> 
        </div>

        <div class="form-group">
            <label for="">Password</label>
            <input class="form-control" type="password" v-model="registerPassword"/> 

        </div>

        <div class="form-group">
            <label for="">Name</label>
            <input class="form-control" type="text" v-model="name"/> 
        </div>

        <div class="form-group">
            <label for="">Firstname</label>
            <input class="form-control" type="text" v-model="firstname"/> 
        </div>
        
        <div class="form-group">
            <label for="">Mail</label>
            <input class="form-control" type="email" v-model="email"/> 
        </div>

        <div class="form-group">
            <label for="">Adresse</label>
            <input class="form-control" type="text" v-model="adress"/> 
        </div>
        
        <div class="form-group">
            <label for="">Code postal</label>
            <input class="form-control" type="number" v-model="zipcode"/> 
        </div>

        <div class="form-group">
            <label for="">Pays</label>
            <input class="form-control" type="text" v-model="country"/> 
        </div>

        <button class="btn btn-primary" @click.prevent="registerUser"> S'inscrire </button>
    </form>

</template>