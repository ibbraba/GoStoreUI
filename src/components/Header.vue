<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

//Gets the user in localstorage

const user = ref((JSON.parse(localStorage.getItem('user'))))
console.log(user.value);


</script>

<template>

    <header>
        <div class="gostore">
            <h1>GoStore</h1>
            <h4>Crée ton style</h4>

        </div>
        <nav>
            <ul>
                <li>
                    <RouterLink :to="{ name: 'home' }">HomePage</RouterLink>
                </li>
                <li>
                    <RouterLink v-if="user":to="{ name: 'my-page', params : { _id : user.id}}">{{user.username}}</RouterLink>    
                    <RouterLink v-else :to="{ name: 'login' }">Login</RouterLink>
                </li>
            </ul>
        </nav>



    </header>

</template>

<style scoped>
header {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    border-bottom: 3px solid white;
}

.gostore{
    margin: 0 auto;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
}

</style>
