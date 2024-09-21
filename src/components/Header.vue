<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

//Gets the user in localstorage
const user = ref((JSON.parse(localStorage.getItem('user'))))



</script>

<template>

    <header>
        <div class="gostore">
            <h1 class="mt-4">GoStore</h1>
            <h4 class="mt-2">Crée ton style</h4>

        </div>
        <nav class="mt-5">
            <ul>
                <li>
                    <RouterLink :to="{ name: 'home' }">HomePage</RouterLink>
                </li>
                <li>
                    <RouterLink v-if="user":to="{ name: 'my-page', params : { _id : user.id}}">{{user.username}}</RouterLink>    
                    <RouterLink v-else :to="{ name: 'login' }">Login</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name : 'cart'}"> Panier </RouterLink>
                </li>
            </ul>
        </nav>



    </header>

</template>

<style scoped>
header {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin-bottom: 35px;
    width: 100%;
    background-image: url("https://i.ibb.co/db15nPG/urban-Wall.png");
    border-bottom: 3px solid white;
}

.gostore{
    margin: 0 auto;
    font-family: "Lumanosimo", cursive;
  font-weight: 400;
  font-style: normal;
  color: white;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
}

nav a {
    color: white;
}

nav a:hover{
    color: white
}

</style>
