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
            console.log("Response: Token valide")
            
            return true;
            
        }else{
            console.log("Response: Token invalide");
            return false
        }
    }
} 

export async function getConnectedUser(){

    const validToken = ensureValidToken()
    if(validToken){
        const decodedJwt = jwtDecode(localStorage.getItem('token'))
        return decodedJwt

        
    }else return null
}
