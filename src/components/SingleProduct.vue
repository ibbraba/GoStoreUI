<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const _id = route.params._id
console.log(route.params._id);

const product = ref({})


async function LoadProduct(params) {
    try {
        const res = await axios.get("http://localhost:3000/product/" + _id)
        console.log(res.data);
        product.value = res.data
    } catch (error) {
        console.log(error);
        
    }

}
onMounted(() => {
    LoadProduct()
})
</script>

<template>
    <h3> {{ product.type }}</h3>
    <P>{{ product.description }}</P>
    <p>{{ product.prix }}€ </p>
    <button class="btn btn-primary"> Ajouter au panier  </button>

</template>

<style scoped>

</style>