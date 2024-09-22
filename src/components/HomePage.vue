<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';


defineProps({
  msg: String,
})

//Script pn first page load
onMounted(async() => {
  let res = await LoadProducts()
})

const count = ref(0) 




const products = ref([])

//Fetch products from DB
async function LoadProducts() {
    let res = await axios.get("http://localhost:3000/products")
    console.log(res.data);
    products.value = res.data
}


</script>

<template>


  <h1>{{ msg }}</h1>
  <h2> Nos produits </h2>
  <div v-for="product of products" class="product-list-container">
    <div class="card" style="width: 18rem;">
  <img class="card-img-top"  :src="product.imageurl" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ product.type }}</h5>
    <p class="card-text">{{ product.prix }}€</p>
    <button class="btn btn-light">

      <RouterLink class="btn btn-light" :to="{ name: 'single-product', params: { _id: product._id }}">
        Voir le produit
      </RouterLink> 
    </button>
  </div>
</div>


   </div>

   


</template>

<style scoped>
  .product-list-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
