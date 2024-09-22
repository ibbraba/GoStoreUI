<script setup>
import { onMounted, ref } from 'vue';
import { fetchUserInfos } from '../userRequests';
import { useRoute } from 'vue-router';
import axios from 'axios';


const user = ref({})
const route = useRoute()
const id = route.params._id

onMounted(() => {
    getUser()
})

/*
const name = ref(user.name)
const firstname = ref(user.firstname)
const email = ref(user.email) 
const adress = ref(user.adress)
const zipcode = ref(user.zipcode)
const country = ref(user.country)
*/

async function getUser() {

    const res = await fetchUserInfos(id)
    user.value = res.data
    console.log(user);

}

async function updateUser() {

    try {
        const res = await axios.post("http://localhost:3000/user/edit/" + id, {
            "name": user.value.name,
            "firstname": user.value.firstname,
            "email": user.value.email,
            "adress": user.value.adress,
            "zipcode": user.value.zipcode,
            "country": user.value.country,
        })
        console.log(res.data);
        alert("Modifications effectuées !")

    } catch (error) {
        console.log(error);
        alert("Une erreur est survenue")
    }



}

</script>

<template>

    <h2> Modifier vos coordonées </h2>

    <form action="">
        <div class="form-group">
            <label for="">Name</label>
            <input class="form-control" type="text" v-model="user.name" />
        </div>

        <div class="form-group">
            <label for="">Firstname</label>
            <input class="form-control" type="text" v-model="user.firstname" />
        </div>

        <div class="form-group">
            <label for="">Mail</label>
            <input class="form-control" type="email" v-model="user.email" />
        </div>

        <div class="form-group">
            <label for="">Adresse</label>
            <input class="form-control" type="text" v-model="user.adress" />
        </div>

        <div class="form-group">
            <label for="">Code postal</label>
            <input class="form-control" type="number" v-model="user.zipcode" />
        </div>

        <div class="form-group">
            <label for="">Pays</label>
            <input class="form-control" type="text" v-model="user.country" />
        </div>

        <button @click.prevent="updateUser" class="btn btn-primary"> Mettre à jour mes informations </button>

    </form>


</template>

<style scoped></style>