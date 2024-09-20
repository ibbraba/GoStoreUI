import { defineStore } from "pinia";
import { ref } from "vue";


export const useCartStore = defineStore("cart", ()=> {

    const cart = ref([])

    const addProductToCart = (product) => {
            cart.value.push(product)
    }

    //TODO ; Cart  deletion
    const removeProductFromCart = (product) =>{
        
        let itemIndex = cart.value.findIndex(item => item._id == product._id)
        cart.value.splice(itemIndex, 1)    
    
    }


    return{
        cart, 
        addProductToCart,
        removeProductFromCart
    }

})