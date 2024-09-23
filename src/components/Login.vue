<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ensureValidToken } from '../userRequests';

const router = useRouter()

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


onMounted(async() => {

    // Redirects to user page if already connected 
    const token = await ensureValidToken()
    const user = JSON.parse(localStorage.getItem('user'))
    if(token && user ){
        await router.push("/my-page/" + user.id)
        router.go(0)
    }
})

async function Login() {
   
    if(loginUsername.value == "" || loginPassword.value ==""){
        alert("Veuillez rensigner les champs")
        return
    }

    try {
         
        //Sending login request to backend
        const res = await axios.post("http://localhost:3000/login", {
        "username" : loginUsername.value, 
        "password" : loginPassword.value
        })
    
    
        if(res.data != null){
            //Store user data and token in localstorage
            localStorage.setItem("token" , res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            alert("Vous êtes maintenant connecté, " + loginUsername.value)
          
            //Redirection
            await router.push({path :"/"})
            router.go(0)
        }else{
            alert("Identifiants invalides")
        }
        
    } catch (error) {
        console.log(error);
        if(error.status == 401){
            alert("Identifiants invalides")
        }else{
            alert("Une erreur est survenue")
        }
        
    }
}

    async function registerUser(){
        
        //Validation
        if(registerUsernme.value == "" || registerPassword.value ==""
            || name.value =="" || firstname.value == ""
            || email.value == "" || adress.value == ""
            ||zipcode.value == "" ||country.value == ""
    
        ){
        alert("Veuillez rensigner les champs")
        return
    }

        //Register the user in DB
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
            alert("Vous êtes enregistré, vous pouvez maintenant vous connecter.")
        } catch (error) {
            console.log(error)  
            alert("Une erreur est survenue, veuillez ressayer")     
        }
}


 
    
</script>

<template>

    <h3> Connectez-vous et achetez vos vêtements préférés   </h3>
    <form class="mb-5 mt-4 mx-5">
        <div class="form-group">
            <label> Pseudo </label>
            <input id="login-input-username" name="input-pseudo" class="form-control" type="text" v-model="loginUsername" />
        </div>
        
        <div  class="form-group">
            <label> Mot de passe </label>
            <input id="login-input-password" name="input-password" class="form-control" type="password" v-model="loginPassword" />
        </div>

    <button id="connect"class="connect btn btn-primary" @click.prevent="Login"> Se connecter </button>

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

        <button class="register-button btn btn-primary" @click.prevent="registerUser"> S'inscrire </button>
    </form>

</template>