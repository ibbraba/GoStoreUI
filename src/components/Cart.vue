<script setup>
import { useCartStore } from '../store/cart';

//Using store
const store = useCartStore()

</script>


<template>
    <h1>Panier</h1>
    <div v-if="store.cart.length > 0">
        <div class="cart-item" v-for="item of store.cart">

            <div class="card">
                <div class="card-body">
                    <img class="cart-item-image" :src="item.imageurl" alt="">

                    <div class="cart-item-details">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                        <p>{{ item.prix }}€</p>
                        <button class="btn btn-danger remove-item" @click.prevent="store.removeProductFromCart(item)" >Retirer</button>
                    </div>
                </div>
            </div>

            <h2></h2>
          
        </div>
    </div>

    <div v-else>
        <h3>Votre panier est vide pour le moment</h3>

    </div>

</template>


<style scoped>
.cart-item-image {
    max-width: 200px;
    height: auto;
}

.card-body{
    display: flex;
}

.cart-item-details{
    display: flex;
    flex-direction: column;
}

.remove-item{
    max-width: 200px;
    margin: 0 auto;
}
</style> 