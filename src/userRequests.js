import axios from "axios";
import { jwtDecode } from "jwt-decode";



export async function ensureValidToken() {
    
    const token = localStorage.getItem('token')
    //No user connected
    if(!token){
       return false

    }else{
        //Checks token validity
        const res = await axios.get("http://localhost:3000/verify", {
            headers : {
                Authorization : token
            }
        })
        if(res.data == true){
            //Valid token
            return true;
            
        }else{
            //Invalid token
            return false
        }
    }
} 

export async function getConnectedUser(){

    const validToken = await ensureValidToken()
    if(validToken){
        const decodedJwt = jwtDecode(localStorage.getItem('token'))
        return decodedJwt

        
    }else return null
}

export  async function fetchUserInfos(id) {
    //Ensure token is valid 
    const tokenValid = await ensureValidToken()

    if (!tokenValid) {
        console.log("Get User : invalid token");

        await router.push({ path: "/login" })
        router.go(0)
    }

    try {
        //Fetch user data
        const res = await axios.get("http://localhost:3000/user/" + id)
        return res
    } catch (error) {
        console.log(error);

    }
}
