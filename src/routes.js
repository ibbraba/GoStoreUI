import Cart from "./components/Cart.vue";
import HomePage from "./components/HomePage.vue";
import Login from "./components/Login.vue";
import MyPage from "./components/MyPage.vue";
import SingleProduct from "./components/SingleProduct.vue";

export const routes = [
    {path : "/", component: HomePage, name:"home"}, 
    {path : "/login", component : Login, name:"login"},
    {path : "/product/:_id", component : SingleProduct, name:"single-product"},
    {path : "/my-page/:_id", component: MyPage, name:"my-page"},
    {path : "/cart", component : Cart, name:"cart"},
]