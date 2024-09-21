<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ensureValidToken } from '../userRequests';

const router = useRouter()
const user = ref({})
const commands = ref({})


const route = useRoute()
const id = route.params._id

async function fetchUserInfos() {
    //Ensure token is valid 
    const tokenValid = await ensureValidToken()

    if (!tokenValid) {
        console.log("Get User : invalid token");

        await router.push({ path: "/login" })
        router.go(0)
    }

    try {
        //Fetch user data
        const res = await axios.get("http://localhost:3000/user/" + id)
        user.value = res.data
    } catch (error) {
        console.log(error);

    }
}

async function Logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    //Redirection
    await router.push("/")
    router.go(0)
}


async function getUserCommands(params) {

    let res = await axios.get("http://localhost:3000/commands/" + id)
    console.log(res.data.commands);
    commands.value = res.data.commands



}

onMounted(() => {
    fetchUserInfos()
    getUserCommands()
})



</script>

<template>
    <div>
        <h2> Mon profil </h2>

        <div class="card my-5 user-infos" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ user.username }}</h5>
                <p class="card-text"> {{ user.name }} {{ user.firstname }}</p>
                <p>Mail: {{ user.email }}</p>
                <p>Adress: {{ user.adress }}</p>
                <p>Code postal: {{ user.zipcode }}</p>
                <p>Pays : {{ user.country }}</p>

                <button> Modifier les informations </button>
            </div>
        </div>


        <h2>Mes Commandes </h2>

        <div class="user-commands">
       

            <div v-for="command in commands" class="card my-5" style="width: 68rem;">
                <div class="card-body command-infos">
                    <div> 
                        <img class="command-img" :src= command.products[0].imageurl  alt="">
                    </div>

                    <div class="command-qte">
                        <p>{{ new Date(command.date).toLocaleDateString() }}</p>
                        <P>{{ command.products.length > 1 ? command.products.length + " articles" : command.products.length + " article" }}  </P>
                    </div>

                    <div class="command-price">
                        <p>{{ command.price }} €</p>
                        <RouterLink :to="{ name: 'command', params : {id : command._id} }" :singleCommmand="command" class="btn btn-primary"> Voir les details </RouterLink>
                    </div>
                </div>
            </div>

        </div>


    </div>

    <button @click="Logout" class="btn btn-primary"> Se deconecter </button>

</template>


<style scoped>

.user-infos{
    margin: 0 auto;
}

.command-infos{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.command-qte{
    display: flex;
    flex-direction: column;
    margin-right: 40%;
}

.command-img{
    max-width: 150px;
}

.command-qte, .command-price{
    padding-top : 35px
}
</style>