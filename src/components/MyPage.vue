<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ensureValidToken } from '../userRequests';

const router = useRouter()



const user = ref({})



const route = useRoute()
const id = route.params._id

async function getUser() {

    //Ensure token is valid 
    const tokenValid = await ensureValidToken()

    if (!tokenValid) {

        router.push({ path: "/login" })
    }

    try {
        //Fetch user data
        const res = await axios.get("http://localhost:3000/user/" + id)
        user.value = res.data
    } catch (error) {

    }

 
}

async function Logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    //Redirection
    await router.push("/")
    router.go(0)
    }


onMounted(() => {
    getUser()
})



</script>

<template>
    <div>
        <h2> Mon profil </h2>

        <div>
            <p>{{ user.name }} {{ user.firstname }}</p>
            <P>{{ user.email }}</P>
            <p>{{ user.adress }}</p>

        </div>
    </div>

    <button @click="Logout" class="btn btn-primary"> Se deconecter </button>

</template>
