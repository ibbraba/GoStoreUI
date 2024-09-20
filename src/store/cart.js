import { defineStore } from "pinia";
import { ref } from "vue";


export const useCartStore = defineStore("cart", ()=> {

    const cart = ref([])

    const addProductToCart = (product) => {
        console.log("Product added in cart");
        
        cart.value.push(product)
    }

    //TODO ; Cart  deletion
    const removeProductFromCart = (product) =>{
        console.log("Product remoed from cart");

        
        let itemIndex = cart.value.findIndex(item => item._id == product._id)

        cart.value.splice(itemIndex, 1)
       
        

        
        console.log(cart.value);
        
        
    }


    return{
        cart, 
        addProductToCart,
        removeProductFromCart
    }

})