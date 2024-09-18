<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0) 
const products = ref([])
async function LoadProducts() {
    let res = await axios.get("http://localhost:3000/products")
    console.log(res.data);
    products.value = res.data
}

//Script pn first page load
onMounted(async() => {
    let res = await LoadProducts()
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2> Nos produits </h2>
  <div v-for="product of products">
    <h3> {{ product.type }}</h3>
    <P> {{ product.prix }}€</P>
   </div>

</template>

<style scoped>

</style>
