import HomePage from "./components/HomePage.vue";
import Login from "./components/Login.vue";

export const routes = [
    {path : "/", component: HomePage, name:"home"}, 
    {path : "/login", component : Login, name:"login"}
]