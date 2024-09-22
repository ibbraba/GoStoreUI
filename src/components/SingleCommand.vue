<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const props = defineProps(["singleCommand"])
const route = useRoute()
const commandId = route.params.id
const command = ref({})

onMounted(() => {
    getCommand()
})

async function getCommand() {
    try {
        let res = await axios.get("http://localhost:3000/command/" + commandId)
        console.log(res.data);
        
        command.value = res.data;

    } catch (error) {

    }
}


</script>

<template>
    <h2> Ma commande</h2>

    <div class="single-command">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Nom</th>
                    <th scope="col">Taille</th>
                    <th scope="col">Prix</th>
                </tr>
            </thead>
            <tbody>


                <tr v-for="product in command.products">
                    <thead><img :src="product.imageurl"></thead>
                    <td>{{ product.type}}</td>
                    <td> N/A </td>
                    <td>{{ product.prix }}€</td>
                </tr>
            </tbody>



        </table>

        <div class="command-total">  

            <p> Total : {{ command.price }}€ </p>
            <p> Statut : {{ command.validated ? "Payée" : "En attente de paiement" }}</p>
            <RouterLink v-if="!command.validated" class="btn btn-primary"  :to="{ name: 'command-validate', params: { id: commandId }}" > Payer la commande </RouterLink>
        </div>

    </div>


</template>

<style scoped>

thead{
    max-width: 200px
}  

thead img{
    width: 150px;

}

</style>