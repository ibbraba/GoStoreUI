import axios from "axios";

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
            console.log("Token valide")
            return true;
            
        }else{
            console.log("Token invalide");
            return false
        }
    }
} 
