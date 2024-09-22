<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getConnectedUser } from '../userRequests';

const router = useRouter()
const route = useRoute()

const user = ref({})

const id = route.params.id
const command = ref({})

onMounted(() => {
    getCommand()
    getUser()

})

async function getUser() {

    user.value = await getConnectedUser()
    console.log(user.value);

}

async function getCommand() {
    try {
        let res = await axios.get("http://localhost:3000/command/" + id)
   

        command.value = res.data;
        console.log(command);
        

    } catch (error) {

    }
}

async function validateCommand() {


    try {
        let res = await axios.get("http://localhost:3000/command/validate/" + id)
        console.log(res.data);

        //Redirect to profile
        router.push("/my-page/" + user.value.userId)

    } catch (error) {

    }
}


</script>

<template>

    <h2> Valider la commande </h2>


    <div class="card infos my-5" style="width: 18rem; ">
        <div class="card-body">
            <h5 class="card-title">{{ command.price }}</h5>
            
            <p class="card-text">{{ command.products && command.products.length > 1 ? command.products.length + " élements" :  " 1 élement" }}</p>

        </div>
    </div>


    <div v-if="!command.validated">

        <div>
            <h5> Paiement par carte</h5>
            <div class="card" style="width: 18rem;">
                <img src="../assets/card.PNG">
                <p> Utilisez la carte prépayée enregistrée pour payer.</p>
            </div>


        </div>

        <button @click.prevent="validateCommand" class="btn btn-primary"> Payer </button>
    </div>

    <div v-else>

        <p style="color: green;"> Payée </p>
    </div>

</template>

<style scoped>
.infos {
    margin: 0 auto;
}
</style>