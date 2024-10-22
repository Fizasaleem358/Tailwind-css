 
import { resolve } from "path";
import { Style } from "util";
export default async function About(){
    await new Promise( (resolve)=>{
        setTimeout(resolve,5000)
    })

    return(
    
    <div>
          
            <h1>
                About Page
            </h1>
        </div>
    )
}