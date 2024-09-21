<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../store/cart';

const route = useRoute()
const _id = route.params._id



//Calls cart store
const store = useCartStore()


const product = ref({})

//Fetch product
async function LoadProduct(params) {
    try {
        const res = await axios.get("http://localhost:3000/product/" + _id)
        console.log(res);
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
    <img :src="product.imageurl" alt="Card image cap">
    <p>{{ product.prix }}€ </p>
    <button @click.prevent="store.addProductToCart(product)" class="btn btn-primary"> Ajouter au panier  </button>

</template>

<style scoped>

</style>