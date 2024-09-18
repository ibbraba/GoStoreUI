<script setup>
import { RouterLink } from 'vue-router';



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
                    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
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
