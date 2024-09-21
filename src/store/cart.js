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

    const getTotalAmount = ()=> {
        if(cart.value.length > 0){
           
            console.log(cart.value.length);
            let total = 0 
            
            for(let i=0; i<cart.value.length;i++){

                total += cart.value[i].prix

            }

           
            return total

        }else return 0
    }

    return{
        cart, 
        addProductToCart,
        removeProductFromCart, 
        getTotalAmount
    }

})