import Cart from "./components/Cart.vue";
import EditUser from "./components/EditUser.vue";
import HomePage from "./components/HomePage.vue";
import Login from "./components/Login.vue";
import MyPage from "./components/MyPage.vue";
import SingleCommand from "./components/SingleCommand.vue";
import SingleProduct from "./components/SingleProduct.vue";
import ValidateCommand from "./components/ValidateCommand.vue";

export const routes = [
    {path : "/", component: HomePage, name:"home"}, 
    {path : "/login", component : Login, name:"login"},
    {path : "/product/:_id", component : SingleProduct, name:"single-product"},
    {path : "/my-page/:_id", component: MyPage, name:"my-page"},
    {path : "/cart", component : Cart, name:"cart"},
    {path : "/command/:id", component : SingleCommand, name:"command"},
    {path : "/my-page/edit/:_id", component : EditUser, name:"edit-user"},
    {path: '/command/validate/:id', component : ValidateCommand, name: "command-validate"}
]