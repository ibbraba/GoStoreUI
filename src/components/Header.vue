<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>

<header>
<nav>
    <ul>
        <li><RouterLink :to="{name : 'home'}">HomePage</RouterLink> </li>
        <li><RouterLink :to="{name : 'login'}">Login</RouterLink></li>
    </ul>
</nav>

</header>

</template>

<style scoped>
ul{
    list-style: none;
}
</style>
